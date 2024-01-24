import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesServiceService } from 'src/app/Services/NotesServices/notes-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  note:any;
  id:any;

  constructor(
    @Inject(MAT_DIALOG_DATA)public data:any,
    public dialogbox:MatDialogRef<UpdateNoteComponent>,
    private notes:NotesServiceService)
   { 
    this.title=data.title,
    this.note=data.note,
    this.id=data.noteId
   }

  ngOnInit(): void {
  }

  closeDialog(){

    let data={
      title:this.title,
      note:this.note,
    }
    this.notes.updateNotes(data,this.id).subscribe((res:any)=>{
      console.log(res);
      this.dialogbox.close()
    })

    
  
  }
}

