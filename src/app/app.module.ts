import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContentAreaComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'',
      component:ContentAreaComponent
    },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
