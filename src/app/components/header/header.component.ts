import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuDropDown', { static: false }) menuDropDown: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public activateMenu(): void {
    let dropDown = this.menuDropDown.nativeElement.style.display;
    if (dropDown === 'block') 
    this.menuDropDown.nativeElement.style.display = 'none';
    else this.menuDropDown.nativeElement.style.display = 'block';
  }

}
