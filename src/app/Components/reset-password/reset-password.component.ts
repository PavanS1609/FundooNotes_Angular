import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm = new FormGroup({
    password:new FormControl("",[Validators.required]),
    confirmPassword:new FormControl("",[Validators.required])

  })

  token:any;
  constructor(private userService:UserService,private router:Router,private activeRoute:ActivatedRoute) { 
    this.token=this.activeRoute.snapshot.paramMap.get('token');
  }

  ngOnInit(): void {
  }
  onResetPassword(){
    if(this.ResetPasswordForm.valid){
      let data = {
        password : this.ResetPasswordForm.value.password,
        confirmPassword : this.ResetPasswordForm.value.confirmPassword
      }
      this.userService.ResetPassword(data,this.token).subscribe((res : any)=>{
        console.log(res.message);
      });
    }
    this.router.navigate(['/Login']);
  }

}
