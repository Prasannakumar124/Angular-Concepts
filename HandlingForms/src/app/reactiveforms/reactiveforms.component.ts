import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { T } from '@angular/core/src/render3';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  user={
    userName:'',
      email:'',
      gender:'',
      hobbies:[]
    }
  genders = ['male', 'female'];
  signupForm:FormGroup;
  forbiddenuserNames=['yashu','pinky'];
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  // ngOnInit() {
  //   this.signupForm=new FormGroup({
  //     'username':new FormControl(null,Validators.required),
  //     'email':new FormControl(null,[Validators.required,Validators.email]),
  //     'gender':new FormControl('male',Validators.required)
  //   })
  // }

  /* grouping controls*/

  ngOnInit() {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,Validators.required,this.forbiddenNames.bind(this)),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmail)
      }),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    })
    /*valueChanges*/

    // this.signupForm.valueChanges.subscribe(
    //   (data)=>{console.log(data);
    //   }
    // )

    /*Status Change */

    // this.signupForm.statusChanges.subscribe(
    //   (values)=>{console.log(values);
    //   }
    // )
    
    /*set values */

    this.signupForm.setValue({
      'userData':{
        'username':'kumar',
        'email':'kumar@gmail.com'
      },
      'gender':'male',
      'hobbies':[]
    })
    /*Patch value */
    this.signupForm.patchValue({
      'userData':{
        'username':'prasanna'
      }
    })
  }
  values=[];
  
  onsubmit(){
    // console.log(this.signupForm);
    this.submitted=true;
    this.user.userName=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.gender=this.signupForm.value.gender;
    for(var i=0;i<=this.signupForm.value.hobbies.length-1;i++){
    this.values.push(this.signupForm.value.hobbies[i]);
    }
    // console.log();
    

  }

  onAddHoliday(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  // forbiddenNames(control:AbstractControl):{[s:string]:boolean} | null {
  //   if(this.forbiddenuserNames.indexOf(control.value)!==-1){
  //                 return {'nameIsForbidden':true}
  //               }
  //               return null;
  // }

  forbiddenNames(control:FormControl):Observable<any>|Promise<any> |any{
    const promise= new Promise(
      (resolve,reject)=>{

        if(this.forbiddenuserNames.indexOf(control.value)!==-1){
            resolve( {'nameIsForbidden':true})
        }else{
          resolve(null);
        }

        })
        return promise;
  }
  forbiddenEmail(control:FormControl):Observable<any> | Promise<any>{
    const emailpromise =new Promise(
      (resolve,reject)=>{
        setTimeout(() => {
          if(control.value ==='test@gmail.com'){
            resolve({'emailForbidden':true})
          }
          else{resolve(null)}
        }, 1500);
      }
    )
    return emailpromise;
  }
  // displaydata(){
  //   this.submitted=true;
  //   this.user.userName=this.signupForm.value.UserData.username;
  //   this.user.email=this.signupForm.value.UserData.email;
  //   this.user.gender=this.signupForm.value.gender;
  //   for(var i=0;i<=this.signupForm.value.hobbies;i++){
  //     this.user.hobbies.push(this.signupForm.value.hobbies[i]);
  //   }
  // }
  reset(){
    this.signupForm.reset();
  }
}