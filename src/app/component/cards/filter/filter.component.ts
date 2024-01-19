

import { Component, EventEmitter, Output, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnChanges {
  select = 'male'
  text = ""
  @Output() addText:EventEmitter<string> = new EventEmitter<string>()
  @Input() editdata:any = ""
  add(e:any){
    // console.log(e)
    this.addText.emit(this.text)
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    if ('editdata' in changes && this.editdata) {
      this.text = this.editdata.name;
    }
  }

}
