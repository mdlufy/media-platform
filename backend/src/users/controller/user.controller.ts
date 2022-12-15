import { JwtService } from '@nestjs/jwt';
import { UserService } from '../service/user.service';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { User } from '../schema/user.schema';

@Controller('/api/v1/user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    @Post('/signup')
    async SignUp(@Res() res, @Body() user: User) {
        const newUser = await this.userService.signup(user);

        return res.status(HttpStatus.CREATED).json({
            newUser,
        });
    }

    @Post('/signin')
    async SignIn(@Res() res, @Body() user: User) {
        const token = await this.userService.signin(user, this.jwtService);

        return res.status(HttpStatus.OK).json(token);
    }
}
