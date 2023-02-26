import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from '../local-storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorageService.getToken();

        if (token) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            }) 
        }

        return next.handle(req);
    }
}