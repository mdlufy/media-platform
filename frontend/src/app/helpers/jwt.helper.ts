import { JwtToken } from './../interfaces/jwt';

export class JwtHelper {
    constructor() {}

    static parseJwt<T>(token: string): JwtToken<T> {
        const [header, payload] = token.split('.');

        return {
            header: JSON.parse(atob(header)),
            payload: JSON.parse(atob(payload)),
        };
    }

    static getFromAccessToken<T>(accessToken: string): T {
        const { payload } = this.parseJwt<T>(accessToken);

        return payload;
    }
}
