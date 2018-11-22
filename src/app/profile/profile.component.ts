import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user = {
    firstname:"Martín",
    secondname:'San José de Vicente',
    age: 26,
    email: 'martin@imaginagroup.com',
    phone: 647357583,
    nationality:'es',
    direction:{
      country:'es',
      city:'Valencia',
      postalcode:'46008',
      street:'C/ Doctor Manuel Candela',
    },
    work:{
      occupation:'Developer',
      skills:[
        {
          language:'Javascript',
          level: 'hight'
        },
        {
          language:'Angular',
          level: 'hight'
        },
        {
          language:'React',
          level: 'hight'
        },
        {
          language:'EXT JS',
          level: 'hight'
        },
        {
          language:'C',
          level: 'medium'
        },
        {
          language:'HTML + CSS',
          level: 'high'
        }
      ],
      jobs:[
        {
          where:'Imagina Formación',
          time: '2018 - Now'
        },{
          where:'Telefónica',
          time: '2017 - 2018'
        },{
          where:'Hipercor',
          time: '2017'
        },{
          where:'Banco Santander',
          time: '2015 - 2017'
        },
      ]
    }
  }

  constructor() { }

  ngOnInit() {
    //alert('Profile!');
    this.user;
  }

}
