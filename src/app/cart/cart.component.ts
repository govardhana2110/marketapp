import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Cart } from "./cart"


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  @Input() cartarr : Cart [] =[];
  pname;
  pcost;

  constructor() { }

  ngOnInit(): void {
  }


}
