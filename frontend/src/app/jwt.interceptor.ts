import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

export const ACCESS_TOKEN = 'access_token';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(@Inject(LOCAL_STORAGE) private readonly localStorageService: Storage) {}

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken = this.localStorageService.getItem(ACCESS_TOKEN);

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }) 
        }

        return next.handle(req);
    }
}