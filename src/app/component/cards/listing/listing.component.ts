import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})

export class ListingComponent {
  // item = ["ball", "water", "egg"]
  itemData:any = {}
  @Input() item: string[] = [];
  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>()
  @Output() edit:EventEmitter<string> = new EventEmitter<string>()

  delete(e: any) {
    this.deleteItem.emit(e)
  }
  editText(item:any,index:number){
    this.itemData = {
      name:item,
      id:index
    }
    this.edit.emit(this.itemData)
    // console.log(this.itemData)
  }
  // addMoreItems() {
  //   // if (this.moreItems) {
  //   //   // Assuming 'moreItems' is a string value to push into the 'item' array
  //   //   this.item.push(this.moreItems);
  //   // }
  // }
}
