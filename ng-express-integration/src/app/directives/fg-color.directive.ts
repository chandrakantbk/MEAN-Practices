import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[FgColor]'
})
export class FgColorDirective {

  constructor(private elemRef: ElementRef, private render:  Renderer2  ) { 
    console.log("FgColorDirective constructor");
  }

  @Input()
  set FgColor(color: string){
    this.render.setStyle(this.elemRef.nativeElement, "color", color);
  }

}
