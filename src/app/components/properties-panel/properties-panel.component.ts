import { Component, OnInit, OnDestroy } from '@angular/core';

import { IObjectModel } from 'src/app/models/object.model';
import { PropertiesService } from 'src/app/services/properties.service';
@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css'],
})
export class PropertiesPanelComponent implements OnInit {
  objProperties: IObjectModel = {
    stroke: '',
    strokeWidth: 0,
    fill: '',
    angle: 0,
  };
  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this.propertiesService
      .setObjectProperties()
      .subscribe((response: IObjectModel) => {
        console.log(response);
        this.populateObjectProperties(response);
      });
  }

  populateObjectProperties(response: IObjectModel) {
    (this.objProperties.stroke = response.stroke),
      (this.objProperties.strokeWidth = response.strokeWidth),
      (this.objProperties.fill = response.fill),
      (this.objProperties.angle = response.angle);
  }

  updateStrokeWidth(strokeWidth: number) {
    this.objProperties.strokeWidth = strokeWidth;
    this.propertiesService.getObjectProperties(this.objProperties);
  }
  updateStrokeColor(stroke: string) {
    console.log('color', stroke);
    this.objProperties.stroke = stroke;
    this.propertiesService.getObjectProperties(this.objProperties);
  }
  updateFill(fill: string) {
    this.objProperties.fill = fill;
    this.propertiesService.getObjectProperties(this.objProperties);
  }
  updateAngle(angle: string) {
    this.objProperties.angle = Number(angle);
    this.propertiesService.getObjectProperties(this.objProperties);
  }
}
