import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private Url="http://localhost:83/contact/";


  public getAllContacts(){
  return this.http.get(this.Url+"all");
  }

  getContact(id:string){
    this.http.get(this.Url+"find/"+id);
  }
  addContact(contact:Contact){
  this.http.post(this.Url+"add",contact);
  }
  deleteContact(id:string){
    this.http.delete(this.Url+"delete/"+id);
  }
  updateContact(contact:Contact){
    this.http.put(this.Url+"update/", contact);
  }
  constructor(private http:HttpClient) { }
}
