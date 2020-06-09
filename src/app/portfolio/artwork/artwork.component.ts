import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Artwork } from 'src/models/artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss','artworks-animations.component.scss']
})
export class ArtworkComponent implements OnInit {
  @Input('work') artwork: Artwork;
  public modal: string = 'none';
  public portfolio: Artwork[];
  public index: number;
  public maxLen: number;
  public modalContent: Artwork;
  @ViewChild('imgModal', { static: false }) imgModal: ElementRef;
  @ViewChild('imgInModal', { static: false }) imgInModal: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public openModal(): void {
    this.modal = 'block';
    this.modalContent = this.artwork;
    setTimeout(() => {
      this.imgModal.nativeElement.focus();
    }, 1000)
    if (!this.portfolio) {
      fetch('./assets/json/artworks.json').then(data => data.json())
        .then(json => {
          this.portfolio = json;
          this.modal = 'block';
          this.getArtworkInfo();
        })
    } else {
      this.getArtworkInfo();
    }
  }

  private getArtworkInfo(): void {
    this.index = this.portfolio.findIndex(work =>
      work.id === this.artwork.id ? true : false
    );
    this.maxLen = this.portfolio.length - 1;
  }

  public closeModal(): void {
    this.modal = 'none';
  }

  public prev(): void {
    if (this.index == 0) this.index = this.portfolio.length;
    this.modalContent = this.portfolio[this.index - 1];
    this.index--;
  }

  public next(): void {
    if (this.index + 1 > this.maxLen) this.index = -1;
    this.modalContent = this.portfolio[this.index + 1];
    this.index++;
  }

}
