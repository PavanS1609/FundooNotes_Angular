import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Services/NotesServices/notes-service.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
 notesArray:any;
 isTrashNotes:any;
  constructor(private notesService:NotesServiceService) { }

  ngOnInit(): void {
    this.getTrashNotesList();
  }

  getTrashNotesList(){
    this.notesService.getNote().subscribe((res:any)=>{
      console.log("retrived all trash notes successfully",res.data);
      this.notesArray=res.data;
      this.notesArray.reverse();
      this.notesArray=this.notesArray.filter((notes:any)=>{
        return notes.istrash == true;
      })
      if(this.notesArray.length != 0){
        this.isTrashNotes =false
      }
      else{
        this.isTrashNotes = true
      }
    })
  }
}
