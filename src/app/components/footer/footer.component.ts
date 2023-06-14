import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NavModalComponent } from '../nav-modal/nav-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Output() openNavModalEvent = new EventEmitter<void>();

  openNavModal(): void {
    this.openNavModalEvent.emit();
  }
}
