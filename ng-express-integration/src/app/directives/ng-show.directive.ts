import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
/* Structure directives */
@Directive({
  selector: '[ngShow]'
})
export class NgShowDirective {

  constructor(private t:TemplateRef<any>,private vcr:ViewContainerRef) {
    console.log("NgShowDirective created....");
   }


   @Input()
   set ngShow(value:boolean){

    console.log("In setNgShow.....");
    
         if(value)
         this.vcr.createEmbeddedView(this.t);
         else
         this.vcr.clear();
   }



}
