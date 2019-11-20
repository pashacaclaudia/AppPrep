import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
    results : string[];
    private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://3000-e31d5f6a-7d78-44dc-836c-31f06adf9636.ws-eu01.gitpod.io/api').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
    }
}
