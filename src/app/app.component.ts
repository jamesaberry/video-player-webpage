import { Component } from '@angular/core';
import { interval } from 'rxjs';
import photoNames from '../assets/photoNames.json';
import photoConfig from '../assets/photoConfig.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = photoConfig.photoAlbumTitle;
  textStyle = photoConfig.css.textStyle;
  imageStyle = photoConfig.css.imageStyle;
  picture = '';
  photoName = '';
  photoDate = '';
  counter = interval(photoConfig.photoDelayMs);
  randNum = 0;

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getMonthString(month) {
    switch (month) {
      case '01':
        return 'January';
      case '02':
        return 'February';
      case '03':
        return 'March';
      case '04':
        return 'April';
      case '05':
        return 'May';
      case '06':
        return 'June';
      case '07':
        return 'July';
      case '08':
        return 'August';
      case '09':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
    }

    return ''
  }

  getPhotoDate(photoName) {
    var year = photoName.substring(4, 8);
    var month = photoName.substring(8, 10);
    var day = photoName.substring(10, 12);
    return this.getMonthString(month) + ' ' + day + ' ' + year ;
  }

  getImage() {
    this.randNum = this.getRandomInt(photoNames.image_names.length);
    this.photoName = photoNames.image_names[this.randNum];
    this.picture = '/assets/photos/' + this.photoName;
    this.photoDate = this.getPhotoDate(this.photoName);
    this.imageStyle['background-image'] = 'url(' + this.picture + ')' ;
  }
  
  ngOnInit() {
    this.counter.subscribe( x => 
      this.getImage()
      )
  }
}
