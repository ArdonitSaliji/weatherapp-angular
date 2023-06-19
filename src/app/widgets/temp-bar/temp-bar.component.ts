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
    const maxTemp = 30;

    const totalWidth = 200; // Update this value according to your desired width

    const blockWidth = totalWidth / (maxTemp - minTemp);
    const currentTempPosition = (tempMin - minTemp) * blockWidth;
    const fillWidth = (tempMax - tempMin + 1) * blockWidth;

    const dAttribute = `M${currentTempPosition} 2
    H${fillWidth - 2}
    Q${fillWidth} 2 ${fillWidth} 4
    V4
    H${currentTempPosition + 2}
    Q${currentTempPosition} 4 ${currentTempPosition} 2
    Z`;

    this.tempBar.nativeElement.setAttribute('d', dAttribute);
  }

  ngAfterViewInit() {
    this.changeBarWidth(this.minMaxTemp.tempMin, this.minMaxTemp.tempMax);
  }
}
