import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('f') signupForm:NgForm;
  title = 'HandlingForms';
  defaultquestion="teacher"
  answer='';
  genders=['male','female']
  defaultGender=this.genders[0];
  userkeys=[];

  user={
    UserName:'',
    email:'',
    SecretQuestion:'',
    Answer:'',
    gender:''
  }
  submitted=false
  suggestUserName() {
    const suggestedName = 'Superuser';
  
    // this.signupForm.setValue({
    //   UserData:{
    //     username:suggestedName,
    //     email:'prasannakumar@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'kiddu',
    //   gender:'male'
    // })
    
    this.signupForm.form.patchValue({
      UserData:{
        username:suggestedName
      }
    });

  }
  SignupFomValues=[];
  // onsubmit(form:ElementRef){
    //   console.log(form);
    
    // }
    // onsubmit(form:NgForm){
      //   console.log(form);
      
      // }
      
      
      onsubmit(){
        this.submitted=true;
        this.userkeys=Object.keys(this.user);
        console.log(this.userkeys);
        
        this.SignupFomValues=Object.values(this.signupForm.value);
        console.log(this.SignupFomValues);
        // SignvaluesOfGroup=[];
    
    this.user.UserName=this.signupForm.value.UserData.username;
    this.user.email=this.signupForm.value.UserData.email;
    this.user.SecretQuestion=this.signupForm.value.secret;
    this.user.gender=this.signupForm.value.gender;
    this.user.Answer=this.signupForm.value.questionAnswer;
    this.signupForm.reset()
    //it reset not only form inputs as well it states like touched dirty valid
    }

ngOnInit(){}


}
