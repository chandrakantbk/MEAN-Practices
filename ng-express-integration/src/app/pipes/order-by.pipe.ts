import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array:any[],field?:string,descending?:boolean): any[] {
    
    var fieldType=typeof(array[0][field]);

    console.log("FieldType :"+fieldType);
    
    
    if(fieldType=='number')
    array.sort((e1,e2)=>e1[field]-e2[field]);
    else if(fieldType=='string')
    array.sort((e1,e2)=>e1[field].localeCompare(e2[field]));
    else if(fieldType=='object')
    array.sort((e1,e2)=>e1[field].getTime()-e2[field].getTime());
    



    
    
    if(descending)
    array.reverse();
       
    
    
    return array;

  }

}
