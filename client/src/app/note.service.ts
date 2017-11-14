import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {
	
  constructor(private _http: Http) { }

  retrieveNotes(callback){
  	this._http.get('http://localhost:8000/notes').subscribe(
  		(res)=>{
        console.log("Load: ",res.json());
  			callback(res.json());
  		},
  		(err)=>{
  			console.log(err);
  			return err;
  		}
  	)
  }

  create(data, callback){
  	this._http.post('http://localhost:8000/notes',{note:data}).subscribe(
  		(response)=>{
        console.log("Create: ",response.json());
  			callback(response.json());
  		},
  		(error)=>{
  			console.log("ERROR: ",error);
  		}
  	)
  }
}
