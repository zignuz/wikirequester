import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WikiFrameComponent } from './wiki-frame/wiki-frame.component';
import { WikiService } from './wiki.service';
import { InputFrameComponent } from './input-frame/input-frame.component';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, WikiFrameComponent, InputFrameComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WikiService]
})
export class AppModule { }
