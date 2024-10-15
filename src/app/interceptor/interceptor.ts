import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AutenticacaoService } from "../service/autenticacao/autenticacao.service";
import { map } from "rxjs/operators"

export class Interceptor implements HttpInterceptor{

    constructor (private autenticacaoService : AutenticacaoService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers;

        if(req.body instanceof FormData){
            headers: new HttpHeaders({
                contentType: "false",
                processData:"false",
                Authorization: "Bearer " + this.autenticacaoService.ObterToken()
            })
        }else{
            headers: new HttpHeaders()
            .append("accept","application/json")
            .append("Content-Type", "application/json")
            .append("Authorization","Bearer" + this.autenticacaoService.ObterToken());
        }

        let request = req.clone({ headers });

        return next.handle(request).pipe(
            map((event) =>
            {
                return event;
            })

        )
    }

}