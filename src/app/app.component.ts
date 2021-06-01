import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public contacts: Contact[];

  constructor(private contactService:ContactService) { }
  ngOnInit(){
    this.getAllContacts();}

   getAllContacts(){
    this.contactService.getAllContacts().subscribe((response: Contact[]) => {
      this.contacts = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onOpenModel(contact: Contact, mode: string){
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if(mode == 'add'){
    button.setAttribute('data-target', '#addContactModal');
  }
  if(mode == 'update'){
    button.setAttribute('data-target', '#updateContactModal');
  }
  if(mode == 'delete'){
    button.setAttribute('data-target', '#deleteContactModal');
  }
  


}

}
