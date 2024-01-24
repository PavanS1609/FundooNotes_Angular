import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup ,Validators, FormBuilder} from '@angular/forms';
import { NotesServiceService } from 'src/app/Services/NotesServices/notes-service.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  submitted:boolean=false;
  NotesForm !: FormGroup;
  @Output() refreshEvent= new EventEmitter<string>();
  constructor(private notesService: NotesServiceService, private form:FormBuilder) { }

  ngOnInit(): void {
    this.NotesForm = this.form.group({
      title: ['', Validators.required],
      note: ['', Validators.required]
    });
  }
  isValid:boolean=true;

  isvalid():void{

    this.isValid=false;
  }
 
  
  onNote() {
    if(this.submitted = true && this.NotesForm.valid){
    console.log('Form values:', this.NotesForm.value);
  
    let data = {
      title: this.NotesForm.value.title,
      note: this.NotesForm.value.note
    };
  
    console.log('Data to be submitted:', data);
    this.notesService.addNote(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
      this.refreshEvent.emit(res);
      localStorage.getItem("token");
    })
     this.isValid=true;
  }

else{
  console.log("please provide input");
  this.isValid=true;
}
}
}
