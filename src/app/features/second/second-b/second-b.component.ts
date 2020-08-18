import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './second-b.component.html',
  styleUrls: ['./second-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondBComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
