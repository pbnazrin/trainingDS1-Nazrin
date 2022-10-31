import { Component, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import 'fabric';
declare let fabric: any;

@Component({
  providers: [CanvasComponent],
  selector: 'app-object-palette',
  templateUrl: './object-palette.component.html',
  styleUrls: ['./object-palette.component.css'],
})
export class ObjectPaletteComponent implements OnInit {
  public canvas: any;

  public shape: any;

  constructor() {}

  ngOnInit() {
    console.log('ngOnit');
    this.canvas = new fabric.Canvas('canvas', {});
    // console.log(this.canvas);
    console.log(this);
  }

  rectClickEvent() {
    console.log('rectClick');
    // this.canvas = new fabric.Canvas('canvas', {});
    console.log(this);
    //this.canvas = new fabric.Canvas('canvas', {});
    this.shape = new fabric.Rect({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      fill: 'transparent',
      width: 50,
      height: 50,
      stroke: '#000',
    });
   

    this.canvas.add(this.shape);
  }

  triClickEvent() {
    this.shape = new fabric.Triangle({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      width: 100,
      height: 50,
      fill: 'transparent',
      stroke: '#000',
    });

    this.canvas.add(this.shape);
  }
  circleClickEvent() {
    this.shape = new fabric.Circle({
      left: this.canvas.width * Math.random(),
      top: this.canvas.height * Math.random(),
      radius: 50,
      fill: 'transparent',
      height: 50,
      stroke: '#000',
    });

    this.canvas.add(this.shape);
  }
}
