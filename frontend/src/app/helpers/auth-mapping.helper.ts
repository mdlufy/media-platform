import { AuthInfo } from '../+state/auth/auth.reducer';
import { AuthDto } from '../interfaces/auth.dto';

export function mapAuthDtoToAuthInfo(authDto: AuthDto): AuthInfo {
    const isAuth = authDto.token ? true : false;
    const role = authDto?.role ?? null;

    return {
        isAuth,
        token: authDto.token,
        role,
    };
}
