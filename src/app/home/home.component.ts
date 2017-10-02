import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onButtonClick() {
      //this.title = 'Hello from Kendo UI!';
      this.ping();
  }

  ping() {
      this.http.get('http://jsonplaceholder.typicode.com/posts')
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
    }
}
