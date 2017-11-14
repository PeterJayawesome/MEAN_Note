import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	note:string
	notes:array

  constructor(private noteService:NoteService) { 
  }

  ngOnInit() {
    this.noteService.retrieveNotes((res)=>{this.notes = res});
  }

  OnSubmit(){
  	this.noteService.create(this.note,(res)=>{this.notes = res; this.note = '';});
  }

}
