import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {undoRedoMetaReducer} from './store/canvas.metareducer'
import { UndoRedoServiceService } from './services/undo-redo-service.service';
import {reducers}from './store/canvas.index'


import {META_REDUCERS } from '@ngrx/store';
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
    FormsModule,
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot( reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    UndoRedoServiceService,
    {
        provide: META_REDUCERS,
        deps: [UndoRedoServiceService],
        useFactory: undoRedoMetaReducer,
        multi: true,
    },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
