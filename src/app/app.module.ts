import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { GallaryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    PortfolioComponent,
    SupportComponent,
    FaqComponent,
    ContactComponent,
    TeamComponent,
    GallaryComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot([

      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path : 'home' , component : HomeComponent },
      {path : 'about' , component : AboutComponent },
      {path : 'contact' , component : ContactComponent },
      {path : 'support' , component : SupportComponent },
      {path : 'events' , component : EventsComponent },
      {path : 'faq' , component : FaqComponent },
      {path : 'gallary' , component : GallaryComponent },
      {path : 'portfolio' , component : PortfolioComponent },
      {path : 'team' , component : TeamComponent }
    ]),
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
