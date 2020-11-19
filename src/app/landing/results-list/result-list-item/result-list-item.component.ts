import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// models
import { ResponseItem } from 'src/app/models/responseItem';

@Component({
  selector: 'app-result-list-item',
  templateUrl: './result-list-item.component.html',
  styleUrls: ['./result-list-item.component.scss']
})
export class ResultListItemComponent implements OnInit {
  @Input() result: ResponseItem;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoDetails() {
    this.router.navigate(['/pokemon', this.result.name]);
  }

}
