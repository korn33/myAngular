import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appIfNot]'
})
export class IfNotDirective {

    @Input('appIfNot') set ifNot(condition: boolean){
        if (!condition){
            //show
            this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
            //hide
            this.viewContainer.clear()
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

}
