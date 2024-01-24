import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpsService } from 'src/app/Services/HttpsService/https.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = environment.baseUrl;
  constructor(private httpService : HttpsService) { }
  

  Login(data : any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.base+`User/login-with-jwt`, data, false, header);
  }

  Register(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.base+`User/Register`, data, false, header);
  }
ForgotPassword(data:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  return this.httpService.PostService(this.base+`User/Forget-Password?Email=`+data.email,{}, false, header);
}

ResetPassword(data:any,token:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization':`Bearer ${token}`
    })
  }
  return this.httpService.PutService(this.base+`User/Reset-Password`,data, true, header);
}
}

  


