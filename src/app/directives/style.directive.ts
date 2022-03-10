import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyleDirective]'
})
export class StyleDirective {
    @Input() dStyles!: {color?: string, border?: string, borderRadius?: string}

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', this.dStyles.color)
        this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border)
        this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.elRef.nativeElement, 'color',null)
        this.renderer.setStyle(this.elRef.nativeElement, 'border', null)
        this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null)
    }
}
