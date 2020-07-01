import {AfterViewInit, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'cypress-mock-blob';

  constructor(private httpClient: HttpClient) {
  }

  ngAfterViewInit() {
    this.httpClient.get(`/myroute/12345`, {
      responseType: 'blob',
    }).subscribe((result) => {
      console.log('Anything', result);
    });
  }
}
