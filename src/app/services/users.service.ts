import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  name:string;
  email:string;
  phoneNumber:number;
}

@Injectable({
  providedIn: 'root'
})



export class UsersService {

  constructor(private http:HttpClient) { }

 
 
  getUsers():Observable<User>{
    /*
    const usersList=[
      {userid:11,userName:'sarath'},
      {userid:12,userName:'santhosh'},
      {userid:13,userName:'Reddy'},
      {userid:14,userName:'Bhuvanagiri'}
    ]*/

    const headers=new HttpHeaders({'content-type':'application/json',
                                    'authenticationToken':'123456'});
    const params=new HttpParams().set('pageNum','10').set('pageSize','100');

    return this.http.get<User>("https://jsonplaceholder.typicode.com/users",{headers:headers,params:params});

    
  }

  addUsers(body){

    const headers=new HttpHeaders({'content-type':'application/json',
    'authenticationToken':'123456'});
const params=new HttpParams().set('pageNum','10').set('pageSize','100');

return this.http.post("https://jsonplaceholder.typicode.com/posts",{headers:headers,params:params})
//get<User>("https://jsonplaceholder.typicode.com/users",{headers:headers,params:param

  }
}
