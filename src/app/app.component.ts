import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-photo-album';
  picture = 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png';
  counter = interval(3000);
  randNum = 0;
  currentStyles = {}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getImage() {
    this.randNum = this.getRandomInt(5) + 1;
    this.picture = 'https://www.gstatic.com/webp/gallery3/' + this.randNum.toString() + '_webp_ll.png';
    this.currentStyles = {
      'height':'55em',
      'background-size':'cover',
      'width':'auto',
      'background-position':'50% 50%',
      'background-image': 'url(' + this.picture + ')' 
    };
  }
  
  ngOnInit() {
    this.counter.subscribe( x => 
      this.getImage()
      )
  }
}
