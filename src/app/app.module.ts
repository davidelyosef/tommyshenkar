import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { HomeComponent } from './home/home/home.component';
import { ArtworkComponent } from './portfolio/artwork/artwork.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    HomeComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }