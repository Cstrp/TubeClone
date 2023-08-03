import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SearchService} from '../../../core/services/search.service';
import {Items} from '../../../core/models/items';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-result-details',
  templateUrl: './search-result-details.component.html',
})
export class SearchResultDetailsComponent implements OnInit, OnDestroy {
  item = {} as Items;

  private sub: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) {
    console.log(this.item);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((props: Params) => {
      this.searchService.getCardById(props['id']);
      this.searchService._detailVide$.subscribe((res) => {
        if (res) {
          this.router.navigate(['/result/error']);
        } else if (Object.keys(res).length) this.item = res;
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
