import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.scss']
})
export class GamesDetailComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {

  }

  goBack(): void {
    this.location.back();
  }
}
