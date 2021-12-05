import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray,Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { pipeFromArray } from 'rxjs/internal/util/pipe';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {

  /*addLoansTypeForm= new FormGroup(
    {
        loanName:new FormControl(''),
        loanDescription:new FormControl('')
    });
    addLoansTypeForm= this.fb.group(
      {
          loanName:new FormControl('Sarath'),
          loanDescription:new FormControl('Its a new one')
      });*/ 
        constructor(private fb:FormBuilder,private usersService:UsersService) { }
         users:any;


        /* trackChanges(): void {
            console.log("changed");
            this.addLoansTypeForm.valueChanges.subscribe(data=>console.log(data));
            }*/
         trackChanges()
          {

           }         

       
  

        /*addLoan()
        {
           console.log(this.addLoansTypeForm.value);
           console.log(this.addLoansTypeForm.get('loanName').value);
           console.log(this.addLoansTypeForm.valueChanges.subscribe(data=>{console.log(data)}));
        } */

        
        
        /*setFormValues(){
         this.addLoansTypeForm.setValue({'loanName':"Sarath",
         'loanDescription':'I am very happuy'});  
          }  */

          addLoansTypeForm= this.fb.group(
            {
                loanName:new FormControl('',Validators.compose([Validators.minLength(10),Validators.required])),
                loanDescription:new FormControl('',Validators.required),
                users:new FormArray([new FormControl('ABS'),new FormControl('Sarath')]),
                usersLoan:new FormArray([this.fb.group({
                  name:new FormControl(''),
                  age:new FormControl(''),
                  dept:new FormControl('')
                })])

            })
             
            addUsers()
            {
              let userArr=this.addLoansTypeForm.get('usersLoan') as FormArray;
              let newArr=this.fb.group(
                {
                  name:'',
                  age:'',
                  dept:''
                }
              );
              userArr.push(newArr);
              

            }

            removeUser(i){
             let userArr=this.addLoansTypeForm.get('usersLoan') as FormArray;
             userArr.removeAt(i);
             console.log(userArr);
            }

             
            ngOnInit(): void {
        
            this.addLoansTypeForm.statusChanges.subscribe(data=>{console.log(data)});
           this.usersService.getUsers().subscribe(
          (data)=>
          {
            this.users=data;
          },
          (err)=>
          {
            console.log("Unable to get data")
          });
           
            
            }

            addLoan(){ console.log(this.addLoansTypeForm.value);}

          
             
            
        
         loanObj={
        'loanName':"Sarath",
         'loanDescription':'I am very happuy'
        }

        setFormValues(){
          this.addLoansTypeForm.setValue(this.loanObj);  
           }  

          resetFormValues(){
             this.addLoansTypeForm.reset();
           }


           //console.log(users);
            
          
          
            

}



