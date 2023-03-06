import { User, UserDocument } from '../../user/schema/user.schema';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);

        const userModel = {
            fullname: user.fullname,
            email: user.email,
            password: hash,
        };

        const createdUser = new this.userModel(userModel);

        return createdUser.save();
    }

    async signin(
        user: { email: string; password: string },
        jwtService: JwtService
    ): Promise<any> {
        try {
            const dbUser = await this.userModel
                .findOne({ email: user.email })
                .exec();

            const matchResult = await bcrypt.compare(user.password, dbUser.password);

            if (!matchResult) {
                throw new Error();
            }

            const jwtPayload = { 
                email: user.email,
            };

            const responseModel = {
                access_token: jwtService.sign(jwtPayload),
            }

            return responseModel;
        } catch (e) {
            throw new HttpException(
                'Incorrect login or password',
                HttpStatus.UNAUTHORIZED
            );
        }
    }
}
