import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  displayedColumns = ['avatar','name', 'surname', 'email', 'phone'];
  dataSource = new MatTableDataSource <Contact> (CONTACTS);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Contact {
  name: string,
  surname:string,
  email:string,
  phone:number,
  avatar:string
}


const CONTACTS: Contact[] = [
  {
    name: 'Zulema',
    surname:'García Soto',
    email:'zulemagarcias@hotmail.com',
    phone: 654889097,
    avatar:'6'
  },{
    name: 'Andrés',
    surname:'San José de Vicente',
    email:'andreii@gmail.com',
    phone: null,
    avatar:'2'
  },{
    name: 'Guillermo',
    surname:'Moreno',
    email:'gmoreno@gmail.com',
    phone: 756899923,
    avatar:'2'
  },{
    name: 'Marian',
    surname:'de Vicente Garrido',
    email:'maavicen@ucm.es',
    phone: 692637287,
    avatar:'5'
  },{
    name: 'Martín',
    surname:'San José Herrera',
    email:'martinsjh@gmail.com',
    phone: 756899923,
    avatar:'2'
  },
];
