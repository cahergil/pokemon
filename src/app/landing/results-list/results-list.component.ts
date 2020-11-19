import { Component, OnInit, Input } from '@angular/core';

// models
import { ResponseItem } from 'src/app/models/responseItem';

class Props {
  results: ResponseItem[] = [];
}

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  state: Props = new Props();
  @Input() results: ResponseItem[];
  constructor() {}

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.state.results = this.results.map((result) => {
      return {
        name: result.name,
        url: `https://img.pokemondb.net/sprites/black-white/anim/normal/${result.name}.gif`,
      };
    });
  }
}
