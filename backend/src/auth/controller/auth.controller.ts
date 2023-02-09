import { User } from './../../user/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('/api/v1/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService
    ) {}

    @ApiOperation({ summary: 'Registration user' })
    @ApiBody({ type: User })
    @Post('/signup')
    @ApiResponse({
        status: 201,
        description: 'Success created user',
        type: User,
    })
    async signup(@Res() res, @Body() user: User) {
        const createdUser = await this.authService.signup(user);

        return res.status(HttpStatus.CREATED).json();
    }

    @ApiOperation({ summary: 'Auth user' })
    @ApiBody({ type: User })
    @Post('/signin')
    @ApiResponse({
        status: 200,
        description: 'Success authencation',
        type: String,
    })
    async signin(@Res() res, @Body() user: User) {
        const token = await this.authService.signin(user, this.jwtService);

        return res.status(HttpStatus.OK).json(token);
    }
}
