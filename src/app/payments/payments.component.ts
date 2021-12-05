import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  firstName='';
  choose =false;
  preferences='';


  paragraph='';

  resetForm(formvalue:NgForm){
    formvalue.reset();
  }
  setValues(formvalue:NgForm){
    let payment={
      firstName:'Sarath',
      choose :false,
      preferences:'',
      paragraph:'I am happy'

    }
    formvalue.setValue(payment);
  }

  payments(paymentsvalue:NgForm){
    const userVals={
      name:paymentsvalue.value.firstName,
      gender:paymentsvalue.value.preferences,
    }
    
   this.usersService.addUsers(userVals).subscribe(
     data=>{console.log(data)},
     err=>{console.log("error"+err)}
   )
  }

  ngOnInit(): void {
  }

}
