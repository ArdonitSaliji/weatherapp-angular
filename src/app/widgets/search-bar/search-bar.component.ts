import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchText!: string;
  @Output() sendInput: any = new EventEmitter<any>();

  onEnter(event: any) {
    this.sendInput.emit(this.searchText);
    event.target.value = '';
  }
}
