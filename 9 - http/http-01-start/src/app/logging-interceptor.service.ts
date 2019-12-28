import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LogginInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Ougoing request');
    console.log(request.url);
    console.log(request.headers);
    return next.handle(request).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log('incoming response');
        console.log(event.body);
      }
    }));
  }
}