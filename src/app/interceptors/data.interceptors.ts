import { Injectable } from "@angular/core";
import { HttpRequest,HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class DataInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const secureReq = req.clone({
            url: req.url.replace('http://','https://'),
            headers:req.headers.set("tes-header","myvalue")
        });
        console.log("Process"+secureReq.url);
        console.log(secureReq);
        return next.handle(secureReq);
    }
}