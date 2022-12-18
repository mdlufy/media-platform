import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { IUser, User } from '../schema/user.entity';
// import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<IUser>
    ) {}

    async signup(user: IUser): Promise<IUser> {
        const salt = await bcrypt.genSalt();

        const hash = await bcrypt.hash(user.password, salt);

        const reqBody = {
            fullname: user.fullname,
            email: user.email,
            password: hash,
        };

        const newUser = new this.userModel(reqBody);

        return newUser.save();
    }

    async signin(
        user: { email: string; password: string },
        jwtService: JwtService
    ): Promise<any> {
        const dbUser = await this.userModel
            .findOne({ email: user.email })
            .exec();

        if (dbUser) {
            const match = await bcrypt.compare(user.password, dbUser.password);

            if (match) {
                const payload = { email: user.email };

                return {
                    token: jwtService.sign(payload),
                };
            }

            return new HttpException(
                'Incorrect username or password',
                HttpStatus.UNAUTHORIZED
            );
        }

        return new HttpException('Email not found', HttpStatus.UNAUTHORIZED);
    }

    async getOne(email): Promise<IUser> {
        return await this.userModel.findOne({ email }).exec();
    }
}
