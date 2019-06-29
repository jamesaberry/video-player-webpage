import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class AppConfigService {
  
    private applicationConfig: any;
  
    constructor(private http: HttpClient) { }
  
    loadAppConfig() {
      return this.http.get('/assets/appConfig.json')
        .toPromise()
        .then(data => {
          this.applicationConfig = data;
        });
    }

    get appConfig() {

        if (!this.applicationConfig) {
        throw Error('Config file not loaded!');
        }

        return this.applicationConfig;
    }
  }