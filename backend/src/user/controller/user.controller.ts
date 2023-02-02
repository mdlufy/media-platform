import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../service/user.service';

@ApiTags('user')
@Controller('/api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Get user by email' })
    @ApiParam({ name: 'email', type: String })
    @Get(':email')
    @ApiResponse({
        status: 200,
        description: 'Succes get user by email',
    })
    async getUser(@Param('email') email, @Res() res) {
        const user = await this.userService.getOne(email);

        return res.status(HttpStatus.OK).json(user);
    }
}
