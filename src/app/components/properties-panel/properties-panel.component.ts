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
  isDisabled: boolean = true;
  message: string = 'no object selected';

  constructor(private propertiesService: PropertiesService) {
    this.propertiesService
      .getObjectPropertiesOnPanel()
      .subscribe((response: IObjectModel) => {
        this.populateObjectProperties(response);
      });
  }

  ngOnInit(): void {
    this.propertiesService.getObjectPropertiesFromcanvas();

    this.propertiesService.setDisabled().subscribe((response: boolean) => {
      this.isDisabled = response;
    });
    this.propertiesService.setMessage().subscribe((msg: string) => {
      this.message = msg;
    });
    console.log("mess",this.isDisabled);
  }

  populateObjectProperties(response: IObjectModel) {
    (this.objProperties.stroke = response.stroke),
      (this.objProperties.strokeWidth = response.strokeWidth),
      (this.objProperties.fill = response.fill),
      (this.objProperties.angle = response.angle);
  }

  setProperties(propertyName: string) {
    if (!this.isDisabled)
      this.propertiesService.setObjectProperties(
        this.objProperties,
        propertyName
      );
  }
}
