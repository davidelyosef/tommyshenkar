import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Artwork } from 'src/models/artwork';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public portfolioView: Artwork[];

  constructor(private title: Title) { 
    this.title.setTitle('Tommy Shenkar | Home')
  }

  ngOnInit() {
    fetch('./assets/json/home-artworks.json')
    .then(info => info.json())
    .then(json => {
      this.portfolioView = json
    })
  }

}
