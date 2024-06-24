import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {
  @Input() totalCount?: any;
  @Input() pageSize?: any;
  @Output() pageChanged = new EventEmitter<number>();

  onPageChanged(event: any) {
    this.pageChanged.emit(event);
  }
}
