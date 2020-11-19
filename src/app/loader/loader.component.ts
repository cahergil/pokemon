import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() setSpinner: boolean = false;
  @Input() color: boolean = false;
  @Input() light: boolean = false;
  @Input() message: string = '';
  constructor() {}

  ngOnInit(): void {}
}
