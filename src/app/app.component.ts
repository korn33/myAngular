import {Component, OnInit} from '@angular/core'
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./MyValidators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    appState = 'off';

    form!: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl('er@y', [
                Validators.email,
                Validators.required,
                MyValidators.restrictedEmail
            ], [MyValidators.uniqEmail]),
            password: new FormControl('123455', [Validators.required, Validators.minLength(6)]),
            address: new FormGroup({
                country: new FormControl('by'),
                city: new FormControl('Самара', [Validators.required])
            }),
            skills: new FormArray([])
        })
    }

    submit() {
        if (this.form.valid) {
            // console.log('yo! form: ', this.form);
            console.log('controls: ', this.form.value);
            this.form.reset();
        }
    }

    setCapital(){
        const cityMap: any = {
            ru: 'Москва',
            ua: 'Киев',
            by: 'Минск'
        };

        const countryKey: string = this.form.get('address')?.get('country')?.value;
        const city = cityMap[countryKey];
        this.form.patchValue({address: {city}})
    }

    addSkill() {
        const control = new FormControl('', Validators.required);
        (<FormArray>this.form.get('skills')).push(control);
    }

    getControls() {
        return (this.form.get('skills') as FormArray).controls
    }

    handleChange() {
        console.log(this.appState)
    }
}
