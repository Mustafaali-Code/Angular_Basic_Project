import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../model/User.model";

@Pipe({
    name: "filterGender"
})
export class FilterGender implements PipeTransform {
    transform(listOfUser: User[], filterBy: string) {
        if (filterBy.toLowerCase() == 'all' || filterBy == "" || listOfUser.length == 0) {
            return listOfUser
        } else {
            return listOfUser.filter((user: any, index) =>
             user.gender.toLowerCase() == filterBy.toLowerCase())
        }
    }
}