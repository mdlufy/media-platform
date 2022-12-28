import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../schema/user.schema';
import { UserService } from '../service/user.service';

@ApiTags('user')
@Controller('/api/v1/user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    @ApiOperation({ summary: 'Create new user' })
    @ApiBody({ type: User })
    @Post('/signup')
    @ApiResponse({
        status: 201,
        description: 'Return created user',
        type: User,
    })
    async SignUp(@Res() res, @Body() user: User) {
        const newUser = await this.userService.signup(user);

        return res.status(HttpStatus.CREATED).json({
            newUser,
        });
    }

    @ApiOperation({ summary: 'Auth exist user' })
    @ApiBody({ type: User })
    @Post('/signin')
    @ApiResponse({
        status: 200,
        description: 'Return token',
        type: String,
    })
    async SignIn(@Res() res, @Body() user: User) {
        const token = await this.userService.signin(user, this.jwtService);

        return res.status(HttpStatus.OK).json(token);
    }

    @ApiOperation({ summary: 'Get user by email' })
    @ApiParam({ name: 'email', type: String })
    @Get(':email')
    @ApiResponse({
        status: 200,
        description: 'Return user by email',
    })
    async getUser(@Param('email') email, @Req() req, @Res() res) {
        // const user = req.user;
        const user = await this.userService.getOne(email);

        return res.status(HttpStatus.OK).json(user);
    }
}
