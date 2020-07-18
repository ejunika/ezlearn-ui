import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(
    private appHttpService: AppHttpService
  ) { }

  ngOnInit() {
    this.appHttpService.getData()
      .subscribe(
        (userName: string) => {
          this.user = { userName };
        }
      )
  }

}
