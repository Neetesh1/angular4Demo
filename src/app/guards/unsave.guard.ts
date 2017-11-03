import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
export interface UnsavedComponentbase{

}
@Injectable()
export class UnsaveComponentGuard implements CanDeactivate<UnsavedComponentbase>{
    canDeactivate(component: UnsavedComponentbase,
         currentRoute: ActivatedRouteSnapshot, 
         currentState: RouterStateSnapshot, 
         nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
    {
        let canLeave:boolean=true;
        if(nextState.url)
        {
            canLeave = window.confirm("Do You want to leave page?");
        }
        return canLeave;
    }

}