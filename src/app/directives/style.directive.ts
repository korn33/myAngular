import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyleDirective]'
})
export class StyleDirective {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
    }
}
