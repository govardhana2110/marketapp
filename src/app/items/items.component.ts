import { Component, OnInit,Output,EventEmitter ,Input } from '@angular/core';
import { Items } from './items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Output() myEvent = new EventEmitter();


  Productarr1:Items[]=[];
  flag:boolean=false;
  flag1:boolean=true;
  selectCatagory:string="apple";
 productsarr:Items[]= [
   new Items("apple",123),
   new Items("mi",456),
   new Items("hp",789),
 ]

  constructor() { }

  ngOnInit(): void {
  }
  onmyevent(val){
    console.log(val)
  }
  onSearchClick(val) {
    console.log(val);
    this.productsarr = this.productsarr.filter((productsarr) => productsarr.pname.startsWith(val));

  }

  onaddClick(productsarr)
  {
   this.Productarr1.push(new Items(productsarr.pname, productsarr.pcost));
   console.log(productsarr);
   //console.log(prooductsarr,'cart function');
  }
  oncartclick(){
    this.flag=true;

  }

}


