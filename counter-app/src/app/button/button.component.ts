import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = 'Click here';
  @Input() color = 'black';
  @Output() onClick = new EventEmitter();
  clicked() {
    this.onClick.emit();
  }
}