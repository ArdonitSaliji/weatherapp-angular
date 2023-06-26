import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-temp-bar',
  templateUrl: './temp-bar.component.html',
  styleUrls: ['./temp-bar.component.scss'],
})
export class TempBarComponent implements AfterViewInit {
  @Input('temp') minMaxTemp: any;
  @ViewChild('tempBar') tempBar!: ElementRef;

  changeBarWidth(tempMin: number, tempMax: number) {
    const minTemp = 10;
    const maxTemp = 40;

    const totalWidth = 200;
    const temperatureRange = maxTemp - minTemp;

    const fillPercentage = (tempMax - tempMin) / temperatureRange;
    const fillWidth = Math.floor(totalWidth * fillPercentage);

    const offset = Math.floor((totalWidth - fillWidth) / 3);

    const dAttribute = `
      M${offset},0.5
      H${offset + fillWidth}
      V4
      H${offset}
      Z
    `;

    this.tempBar.nativeElement.setAttribute('d', dAttribute);
  }

  ngAfterViewInit() {
    this.changeBarWidth(this.minMaxTemp.tempMin, this.minMaxTemp.tempMax);
  }
}
