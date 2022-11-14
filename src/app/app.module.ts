import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ObjectPaletteComponent } from './components/object-palette/object-palette.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { EventInspectorComponent } from './components/event-inspector/event-inspector.component';
import { PropertiesPanelComponent } from './components/properties-panel/properties-panel.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { canvasReducer } from './store/canvas.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectPaletteComponent,
    CanvasComponent,
    EventInspectorComponent,
    PropertiesPanelComponent,

    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ canvasEventStore: canvasReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
