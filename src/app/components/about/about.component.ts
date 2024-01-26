import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  isHovered = false;

  toggleContent() {
    this.isHovered = true;
  }
  toggleContentBack() {
    this.isHovered = false;
  }
  @ViewChild('elementToHover1', { static: false }) elementToHover1: ElementRef | any;

  // @HostListener('mouseover', ['$event'])
  // onMouseOver(event: Event) {
  //   if (event.target === this.elementToHover1.nativeElement) {
  //     this.isHovered = true;
  //   }
  // }

  // @HostListener('mouseout', ['$event'])
  // onMouseOut(event: Event) {
  //   if (event.target === this.elementToHover1.nativeElement) {
  //     this.isHovered = false;
  //   }
  // }
}

