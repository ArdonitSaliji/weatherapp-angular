import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.scss'],
})
export class NavModalComponent {
  @Output() closeNavModal = new EventEmitter<void>();
  @Input() showNav = false;

  constructor(private authService: AuthService) {}

  @HostBinding('class.showNavModal') get open() {
    return this.showNav;
  }

  closeModal() {
    this.closeNavModal.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (
      this.showNav &&
      !targetElement.classList.contains('modal') &&
      !targetElement.classList.contains('nav')
    ) {
      this.closeNavModal.emit();
    }
  }

  logout() {
    this.authService.logout();
  }
}
