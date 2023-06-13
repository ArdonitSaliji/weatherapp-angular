import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compass-svg',
  templateUrl: './compass-svg.component.html',
  styleUrls: ['./compass-svg.component.scss'],
})
export class CompassSvgComponent {
  @Input('wind') wind: any;
}
