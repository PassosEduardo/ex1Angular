
import { Directive,
    ElementRef,
    Input,
    OnInit,
    OnChanges, 
    SimpleChanges} from "@angular/core";

@Directive({
    selector: '[moduloDirective]',
})
export class ModuloDirective implements OnChanges{

    @Input()
    moduloDirective: boolean | undefined;

    constructor(private el: ElementRef){
        console.log(el)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.moduloDirective) {
            this.el.nativeElement.style.backgroundColor = 'blue';
            this.el.nativeElement.style.fontWeight = 'bold';
          } else {
            this.el.nativeElement.backgroundColor='yellow'
        }
    }
}