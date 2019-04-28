import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

title="Reactive Form Validation example";
sf:FormGroup;

  constructor(private fb:FormBuilder) {
    console.log("ReactiveForm Component Created...");
     
  }

  ngOnInit() {
    console.log("ReactiveForm Component initialized...");
  
  this.sf=this.fb.group({
    firstName:["Pradeep",Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20),
      
    ])],
    lastName:["Chinchole",Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20),
     
    ])],
    email:["pradeep@gmail.com",Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20),
      Validators.email
    ])],

    mobile:["9158652627",Validators.pattern("[1-9][0-9]{9,9}")]

    });
    }

    submitForm(value:any){
      console.log("Form Data......");
      console.log(value);

      if(this.sf.valid)
      {
        alert("SUCCESS");
      }
      else{
        alert("FAIL");
        
      }

    }

}
