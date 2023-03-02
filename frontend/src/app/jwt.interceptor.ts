import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from './local-storage.service';

export const ACCESS_TOKEN = 'access_token';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService) {}

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