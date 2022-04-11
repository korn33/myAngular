import {FormControl} from "@angular/forms";

export class MyValidators {
    static restrictedEmail(control: FormControl): {[key: string]: boolean} | null {
        if (['v@ya.ru', 'g@ya.ru'].includes(control.value)) {
            return {restricted: true}
        }
        return null;
    }
}