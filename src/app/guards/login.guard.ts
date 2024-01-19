import { CanActivateFn, Route, Router } from "@angular/router";
import { Services } from "../component/service/Services";
import { inject } from "@angular/core";

export const loginGuard: CanActivateFn = () => {

    const TokenService: Services = inject(Services)
    const router: Router = inject(Router)

    TokenService.isAutentication.subscribe((res) => {
        if (res) {
            router.navigateByUrl("profile")
        }
    })

    return true
}

