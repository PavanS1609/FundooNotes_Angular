import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Services/NotesServices/notes-service.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
 
  notesArray:any;
  isArchiveNotes:any;
  constructor(private notesService :NotesServiceService) { }

  ngOnInit(): void {
    this.getArchiveNotesList();
  }
  getArchiveNotesList(){
    this.notesService.getNote().subscribe((res:any)=>{ 
      console.log("retrived all archive notes successfully",res.data);
      this.notesArray=res.data;
      this.notesArray.reverse();
      this.notesArray=this.notesArray.filter((notes:any)=>{
        return notes.isArchive == true;
      })
      if(this.notesArray.length != 0){
        this.isArchiveNotes =false
      }
      else{
        this.isArchiveNotes = true
      }
    })
  }
  
}
