import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { ListOfContactsComponent } from './list-of-contacts/list-of-contacts.component';



@NgModule({
  declarations: [
    AddContactComponent,
    DeleteContactComponent,
    UpdateContactComponent,
    ViewContactsComponent,
    ListOfContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
