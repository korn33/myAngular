import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitcherComponent),
    multi: true
}

@Component({
    selector: 'app-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.scss'],
    providers: [VALUE_ACCESSOR]
})
export class SwitcherComponent implements OnInit, ControlValueAccessor {

    state = 'off'

    constructor() {
    }

    private onChange = (value: any) => {}

    ngOnInit(): void {
    }

    setState(state: string){
        this.state = state;
        this.onChange(this.state)
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    writeValue(state: string): void {
        this.state = state;
    }
}
