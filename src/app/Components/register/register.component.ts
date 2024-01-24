import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm =new FormGroup({
    firstName:new FormControl("",[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]{1,}(/s[A-Z]{1}[a-z]{1,})*$')]),
    lastName:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])


  })

  constructor(private router:Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  redirectToLogin(){
    
    this.router.navigate(['/Login']);
  }
  onRegister(){
    let data={
      firstName:this.RegisterForm.value.firstName,
      lastName:this.RegisterForm.value.lastName,
      email : this.RegisterForm.value.email,
      password : this.RegisterForm.value.password
    }
    this.userService.Register(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
    })
    

  }

  get email() {
  
    return this.RegisterForm.get('email');
  
}

get password() {
  
  return this.RegisterForm.get('password');

}

}
