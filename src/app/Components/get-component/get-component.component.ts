import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Services/NotesServices/notes-service.service';

@Component({
  selector: 'app-get-component',
  templateUrl: './get-component.component.html',
  styleUrls: ['./get-component.component.scss']
})
export class GetComponentComponent implements OnInit {
notesArray:any;
  constructor(private notes:NotesServiceService) { }

  ngOnInit(): void {
    this.onNote();
  } 
  onNote(){
    this.notes.getNote().subscribe((res:any) => {
      console.log(res.data);
      this.notesArray = res.data;
      console.log('Stored to array variable');
      console.log(this.notesArray); 
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.isArchive == false;
      })
      this.notesArray.reverse();
    })
  }

  RefreshNoteAdded($event:any){
    console.log("refreshed");
this.onNote();
  }

  RefreshedUpdate($event:any){
console.log("updated notes refrehsed"+$event);
this.onNote();
  }

}
