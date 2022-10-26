import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ObjectPaletteComponent } from './components/object-palette/object-palette.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { EventInspectorComponent } from './components/event-inspector/event-inspector.component';
import { PropertiesPanelComponent } from './components/properties-panel/properties-panel.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectPaletteComponent,
    CanvasComponent,
    EventInspectorComponent,
    PropertiesPanelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
