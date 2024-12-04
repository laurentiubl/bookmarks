import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.scss'
})
export class BookmarkListComponent {
  @Input() bookmarks: any[] = [];
  @Output() edit = new EventEmitter<any>();
  displayedColumns: string[] = ['id', 'title', 'date', 'edit'];

}
