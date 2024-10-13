import { Component, OnInit } from '@angular/core';
import { CardserviceService } from 'src/app/services/cardservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {
  constructor(public cards: CardserviceService){}
  ngOnInit(): void {
    this.cards.getCards();
  }

}
