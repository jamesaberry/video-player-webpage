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
  photoName = '';
  counter = interval(3000);
  randNum = 0;
  imageStyle = {}
  textStyle = {}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getImage() {
    this.randNum = this.getRandomInt(photoNames.image_names.length);
    this.photoName = photoNames.image_names[this.randNum];
    this.picture = '/assets/photos/' + this.photoName;
    this.imageStyle = {
      'background-size':'contain',
      'height':'auto',
      'width':'auto',
      'min-height':'100vh',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-color': '#000000',
      'color' : 'white',
      'text-align': 'center',
      'background-image': 'url(' + this.picture + ')' 
    };
    this.textStyle = {
      'position': 'absolute',
      'bottom': '8px',
      'left': '50%',
      'transform': 'translate(-50%, -50%)'
    }
  }
  
  ngOnInit() {
    this.counter.subscribe( x => 
      this.getImage()
      )
  }
}
