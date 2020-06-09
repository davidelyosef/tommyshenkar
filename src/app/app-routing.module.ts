import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';


const routes: Routes = [
  { path: 'tommyshenkar/home', component: HomeComponent },
  { path: 'tommyshenkar/portfolio', component: PortfolioComponent },
  { path: 'tommyshenkar/about', component: AboutComponent },
  { path: 'tommyshenkar/contact', component: ContactComponent },
  { path: "", redirectTo: "/tommyshenkar/home", pathMatch: "full" },
  { path: "**", redirectTo: "/tommyshenkar/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
