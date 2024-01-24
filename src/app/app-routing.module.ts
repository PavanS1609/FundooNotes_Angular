import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IconsComponent } from './Components/icons/icons.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayComponent } from './Components/display/display.component';
import { GetComponentComponent } from './Components/get-component/get-component.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';



const routes: Routes = [ {path:'Reg',component:RegisterComponent},
{path:'Login',component:LoginComponent},
{path:'Forgot_Email',component:ForgotEmailComponent},
{path:'Forgot_Password',component:ForgotPasswordComponent},
{path:'Reset_Password/:token',component:ResetPasswordComponent},
{path:'Dashboard',component:DashboardComponent,
children:[
  {
    path:'',redirectTo:"/Dashboard/Notes",pathMatch:'full'
  },
  {path:'Notes',component:GetComponentComponent},
  {path:'Archive',component:ArchiveNotesComponent},
  {path:'trash',component:TrashNotesComponent}
    
  
]},
// {path:'display',component:DisplayComponent},
// {path:'get',component:GetComponentComponent},

// {path:'icons',component:IconsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
