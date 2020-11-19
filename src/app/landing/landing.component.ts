import { Component, OnInit } from '@angular/core';

// services
import { ApiService } from '../api/api.service';

// models
import { Page } from '../models/page';

class Props {
  page: Page;
  loader: boolean = true;
  loaderMsg: string = 'Loading...'
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  state: Props = new Props()
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.apiService.getList().subscribe(resp => {
      this.state.page = resp
      this.state.loader = false;
    })
  }
}
