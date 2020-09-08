import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-detail',
  templateUrl: './label-detail.component.html',
  styleUrls: ['./label-detail.component.scss']
})
export class LabelDetailComponent implements OnInit {
  @Input() public label: string;
  @Input() public detail: string | number;

  constructor() {}

  ngOnInit(): void {}
}
