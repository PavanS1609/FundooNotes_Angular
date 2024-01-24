import { Component, Input, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Services/NotesServices/notes-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() notesData: any;
istrash:any;
isArchive:any;
  constructor(private notes:NotesServiceService) { }

  ngOnInit(): void {
  }
  
  onDelete(){
    let data={
      noteId:this.notesData.noteId,
    }
    console.log(data)
    this.notes.trashNotes(data).subscribe((res:any)=>{
      console.log("Note Trashed Successfully",res);

    })

  }

  onArchive(){
    let data={
      noteId:this.notesData.noteId,
      userId:this.notesData.userId
    }
    console.log(data)
    this.notes.archiveNotes(data).subscribe((res:any)=>{
      console.log("Note Archived Successfully",res);

    })

  }
  colorsArray: Array<any> =[
    { code: "#FF5733", name:'Coral'},
    { code:"#3498db", name: 'Dodger Blue'},
    { code: "#2ecc71", name:'Emerald Green'},
    { code: "#e74c3c", name:'Alizarin Crimson'},
    { code: "#ffd700", name:'Gold'},
    { code: "#8e44ad", name:'Wisteria Purple'},
    { code: "#1abc9c", name:'Turquoise'},
    { code: "#2c3e50", name:'Midnight Blue'},
    { code: "#f39c12", name:'Sunflower Yellow'},
    { code: "#ff6347", name:'Tomato Red'},
    
  ];

  selectColor(colors : any){
    let data={
      color:colors.name,
      noteId:this.notesData.noteId
    }
    this.notes.notesColor(data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  
}

