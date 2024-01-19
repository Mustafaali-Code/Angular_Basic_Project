import { Component, Output, EventEmitter, Input } from '@angular/core';
import { } from 'stream';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  status: boolean
  @Input() open = true
  @Input() title: string
  @Input() body: string
  @Output() response: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>()

  close() {
    this.closed.emit(this.open)
  }
  deleteItem() {
    this.status = true
    this.response.emit(this.status)
    this.close()
  }

  cancel() {
    this.status = false
    this.response.emit(this.status)
    this.close()
  }

}
