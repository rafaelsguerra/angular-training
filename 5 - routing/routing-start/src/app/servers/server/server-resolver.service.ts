import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { ServersService } from "../servers.service";


interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {
    constructor(private serverService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}