import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPanelComponent } from './properties-panel.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PropertiesPanelComponent', () => {
  let component: PropertiesPanelComponent;
  let fixture: ComponentFixture<PropertiesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesPanelComponent],
      providers:[provideMockStore({})]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
