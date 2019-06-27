import { Component } from '@angular/core';
import { interval } from 'rxjs';
import photoNames from '../assets/photoNames.json';

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
    this.randNum = this.getRandomInt(photoNames.image_names.length);
    this.picture = '/assets/photos/' + photoNames.image_names[this.randNum] ;
    this.currentStyles = {
      'background-size':'contain',
      'height':'auto',
      'width':'auto',
      'min-height':'100vh',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-image': 'url(' + this.picture + ')' 
    };
  }
  
  ngOnInit() {
    this.counter.subscribe( x => 
      this.getImage()
      )
  }
}
