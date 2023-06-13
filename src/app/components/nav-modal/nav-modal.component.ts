import {
  Component,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.scss'],
})
export class NavModalComponent {
  @Output() closeNavModal = new EventEmitter<void>();
  @Input() showNav = false;

  constructor() {}

  @HostBinding('class.showNavModal') get open() {
    return this.showNav;
  }

  closeModal() {
    this.closeNavModal.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (this.showNav && !targetElement.classList.contains('modal')) {
      this.closeNavModal.emit();
    }
  }
}
