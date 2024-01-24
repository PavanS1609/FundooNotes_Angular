import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { IconsComponent } from './Components/icons/icons.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayComponent } from './Components/display/display.component';
import { GetComponentComponent } from './Components/get-component/get-component.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ForgotEmailComponent,
    DashboardComponent,
    IconsComponent,
    CreateNotesComponent,
    DisplayComponent,
    GetComponentComponent,
    UpdateNoteComponent,
    TrashNotesComponent,
    ArchiveNotesComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
