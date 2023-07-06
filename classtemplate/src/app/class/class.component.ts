import { Component, OnInit } from '@angular/core';
import { WEEK_STYLE } from '../models/enum';
import { CLASS_TEMPLATE } from '../models/data';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ClassTemplate, Week } from '../models/models';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  template: ClassTemplate = CLASS_TEMPLATE;
  WEEK_STYLE = WEEK_STYLE;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
  }

  isMobile(): boolean {
    return !this.deviceService.isDesktop() || (window.innerWidth <= 1000);
  }

}
