import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router,private userService: UserService) { }
  ngOnInit(): void {
  }
  LoginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])
    
  })
  redirectToForgot_Email(){
    
    this.router.navigate(['/Forgot_Email']);
  }
  redirectToForgot_Password()
  {
    this.router.navigate(['/Forgot_Password']);

  }
  redirectToRegister()
  {
    this.router.navigate(['/Reg']);

  }
  
onLogin(){
  console.log("hello")
  let data={
    email : this.LoginForm.value.email,
    password : this.LoginForm.value.password
  }
  this.userService.Login(data).subscribe((res:any)=>{
    console.log(res.message);
    console.log(res.data);
    localStorage.setItem("token",res.data);
  })
}
get email() {
  
    return this.LoginForm.get('email');
  
}

get password() {
  
  return this.LoginForm.get('password');

}


}
