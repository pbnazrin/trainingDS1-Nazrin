import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPaletteComponent } from './object-palette.component';

describe('ObjectPaletteComponent', () => {
  let component: ObjectPaletteComponent;
  let fixture: ComponentFixture<ObjectPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call rectClickEvent on pressing rect button',()=>{
    let button=fixture.debugElement.nativeElement.querySelector('#rect');
    let funcSpy =spyOn(component,'rectClickEvent').and.callThrough();
    button.click();

    expect(funcSpy).toHaveBeenCalled();
  })

  it('should call triClickEvent on pressing tri button',()=>{
    let button=fixture.debugElement.nativeElement.querySelector('#tri');
    let funcSpy =spyOn(component,'triClickEvent').and.callThrough();
    button.click();

    expect(funcSpy).toHaveBeenCalled();
  })

  it('should call circleClickEvent on pressing rect button',()=>{
    let button=fixture.debugElement.nativeElement.querySelector('#circle');
    let funcSpy =spyOn(component,'circleClickEvent').and.callThrough();
    button.click();

    expect(funcSpy).toHaveBeenCalled();
  })
});
