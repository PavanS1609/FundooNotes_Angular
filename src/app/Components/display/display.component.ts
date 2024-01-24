import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  @Input() notesList:any;
  @Output() refreshUpdatedNote=new EventEmitter<string>();
  notes:any;

  ngOnInit(): void {
  }

  editNoteDialogBox(notes:any){
    const dialogbox=this.dialog.open(UpdateNoteComponent,{
      width:'500px',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(result=>{
      console.log(result);
      console.log("hello")
      this.refreshUpdatedNote.emit(result);
    })
  }


}
