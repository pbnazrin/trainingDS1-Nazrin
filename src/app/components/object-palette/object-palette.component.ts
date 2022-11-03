import { Component, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { CanvasShapesServiceService } from 'src/app/services/canvas-shapes-service.service';

@Component({
  selector: 'app-object-palette',
  templateUrl: './object-palette.component.html',
  styleUrls: ['./object-palette.component.css'],
})
export class ObjectPaletteComponent implements OnInit {
  constructor(protected canvasService: CanvasShapesServiceService) {}

  ngOnInit() {}

  rectClickEvent() {
    this.canvasService.drawRect();
  }

  triClickEvent() {
    this.canvasService.drawTriangle();
  }

  circleClickEvent() {
    this.canvasService.drawCircle();
  }
}
