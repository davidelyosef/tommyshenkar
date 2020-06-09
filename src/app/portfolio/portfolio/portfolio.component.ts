import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/models/artwork';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolio: Artwork[];

  constructor(private title: Title) { 
    this.title.setTitle('Tommy Shenkar | Portfolio')
  }

  ngOnInit() {
    fetch('./assets/json/artworks.json').then(data => data.json())
    .then(json => {
      this.portfolio = json;
    })
  }

}
