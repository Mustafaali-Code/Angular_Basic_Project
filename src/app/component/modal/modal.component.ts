import { Component, EventEmitter, Input, Output } from '@angular/core';
import { } from 'stream';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  status: boolean
  @Input() open = true
  @Input() user
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>()

  close() {
    this.closed.emit(this.open)
  }
  
  Ok() {
    this.close()
  }

}