import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class userService {
    activatedEmitter = new Subject<boolean>()
}