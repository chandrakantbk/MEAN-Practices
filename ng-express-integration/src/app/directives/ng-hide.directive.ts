import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
/* Structure directives */
@Directive({
  selector: '[appNgHide]'
})
export class NgHideDirective {

  constructor(private templateRef:  TemplateRef<any>, private viewConRef: ViewContainerRef ) { 
    console.log("appNgHideDirective created....");
  }

  @Input()
  set appNgHide(flag: boolean){
    if(flag){
      this.viewConRef.createEmbeddedView( this.templateRef )
    }else{
      this.viewConRef.clear();
    }
     
  }

}
