import {AbstractControl, FormControl} from "@angular/forms";

export class MyValidators {
    static restrictedEmail(control: FormControl): {[key: string]: boolean} | null {
        if (['v@ya.ru', 'g@ya.ru'].includes(control.value)) {
            return {restricted: true}
        }
        return null;
    }

    static uniqEmail(control: AbstractControl): Promise<{[key: string]: boolean}> | Promise<null> {
        return new Promise<any>(resolve => {
            setTimeout(() => {
                if (control.value === 'test@ya.ru'){
                    resolve({
                        uniqEmail: true
                    })
                } else {
                    resolve(null)
                }
            }, 5000)
        })
    }
}