import { inject } from "@angular/core";
import { Services } from "../component/service/Services";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {

    const TokenService = inject(Services)
    const router = inject(Router)

 TokenService.isAutentication.subscribe((response) => {
    console.log("1")
    if (response) {
        // router.navigateByUrl("profile")
        console.log("2")
    } else {
        router.navigateByUrl("login")
        console.log("3")
    }
})
    console.log("4")
    return true

}