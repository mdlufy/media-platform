import { AuthInfo } from '../+state/auth/auth.reducer';
import { AuthDto } from '../interfaces/auth.dto';

export function mapAuthDtoToAuthInfo(authDto: AuthDto): AuthInfo {
    const isAuth = authDto.access_token ? true : false;

    return {
        isAuth,
        accessToken: authDto.access_token,
    };
}
