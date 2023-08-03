import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataShareService} from '../../../core/services/datashare.service';
import {Items} from '../../../core/models/items';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit, OnDestroy {
  public detailVideo: Items;

  private _detail: Items[];

  private id: string | null;

  private sub: Subscription = new Subscription();

  constructor(private dataShareService: DataShareService, private router: Router, private route: ActivatedRoute) {
    this.dataShareService._mockVideo.subscribe((value) => {
      if (!value) return [];

      return (this._detail = value);
    });
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');

      if (this._detail.find((el) => el.id === this.id)) {
        this.detailVideo = this._detail.find((el) => el.id === this.id) as Items;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
