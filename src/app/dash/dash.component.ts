import { Component } from '@angular/core';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent {
  cards = [
    { title: 'Card 1', subtitle:"Subtitle 1", description:"First Description", chips:[{text:'chip1'},{text:'chip2'}], cols: 2, rows: 1 },
    { title: 'Card 2', subtitle:"Subtitle 2", description:"Second Description", chips:[{text:'chip2'},{text:'chip3'}],cols: 1, rows: 1 },
    { title: 'Card 3', subtitle:"Subtitle 3", description:"Third Description", chips:[{text:'chip1'},{text:'chip3'},{text:'chip4'}],cols: 1, rows: 2 },
    { title: 'Card 4', subtitle:"Subtitle 4", description:"Fourth Description", chips:[{text:'chip2'},{text:'chip3'}],cols: 1, rows: 1 }
  ];
}