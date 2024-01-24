import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm =new FormGroup({
    Email:new FormControl("",Validators.required)

  })

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onForgotPassword(){

    console.log(this.ForgotPasswordForm)
    let data={
      email:this.ForgotPasswordForm.value.Email
    }
    this.userService.ForgotPassword(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);

    })
  }
  
}
