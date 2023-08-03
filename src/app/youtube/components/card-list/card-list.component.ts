import {Component, Input, OnInit} from '@angular/core';
import {Items} from '../../../core/models/items';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {
  @Input() video: Array<Items>;

  private id: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  async detail() {
    this.video.map((i) => (typeof i.id === 'string' ? (this.id = i.id) : ''));
    await this.router.navigate(['home/', this.id]);
  }
}
