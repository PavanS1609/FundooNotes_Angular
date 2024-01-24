import { Injectable } from '@angular/core';
import { HttpsService } from '../HttpsService/https.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  token:any;
  base = environment.baseUrl;
  constructor(private httpService : HttpsService) { this.token=localStorage.getItem('token')}

 addNote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.PostService(this.base+`Notes/Add-Note`, data, true, header);
   }
   getNote(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.GetService(this.base+`Notes/Get-All-Notes`, true, header);

   }

   updateNotes(data:any,noteId:any)
   {
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Bearer ' + this.token
      })
   }
   return this.httpService.PutService(this.base+`Notes/Update-note?noteId=`+noteId, data,true, header);
  }
  trashNotes(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Bearer ' + this.token
      })
   }
   return this.httpService.PutService(this.base+`Notes/Is-trash-or-not?noteId=`+data.noteId,{},true, header);
   }

   archiveNotes(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Bearer ' + this.token
      })
   }
   return this.httpService.PutService(this.base+`Notes/Is-Archieve-or-not?noteId=`+data.noteId+`&userId=`+data.userId,{},true, header);
   }
   
   notesColor(data:any){
    console.log(data)
    let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
      return this.httpService.PutService(this.base+`Notes/color?noteId=`+data.noteId+`&color=`+data.color,{},true, header);
 
   }

}

