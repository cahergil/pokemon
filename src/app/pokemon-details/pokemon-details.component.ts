import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// services
import { ApiService } from '../api/api.service';

// packages
import { map } from 'rxjs/operators';

class Props {
  name: string;
  details: any;
  loader = false;
  loaderMsg: string;
}

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  state: Props = new Props();
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.state.loader = true;
    this.state.loaderMsg = 'Loading...';
    route.params.pipe(map((p) => p.id)).subscribe((res) => {
      this.state.name = res;
    });
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.apiService.getDetails(this.state.name).subscribe((details) => {
      this.state.details = details;
    });
  }

  goToList() {
    this.router.navigate(['/pokemon']);
  }
}
