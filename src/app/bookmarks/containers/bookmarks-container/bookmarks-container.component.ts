import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Bookmark} from "../../store/models/bookmark.model";
import {Store} from "@ngrx/store";
import {loadBookmarks, updateBookmark} from "../../store/actions/bookmarks.actions";
import {selectFilteredBook, selectIsLoaded} from "../../store/selectors/bookmarks.selectors";
import {MatDialog} from "@angular/material/dialog";
import {EditBookmarkComponent} from "../../components/edit-bookmark/edit-bookmark.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrl: './bookmarks-container.component.scss'
})
export class BookmarksContainerComponent implements OnInit {

  bookmarks: Observable<Bookmark[]> | null = null;
  selected: string = 'today';

  constructor(private store: Store, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    debugger
    this.store.select(selectIsLoaded).subscribe(isLoaded=>{
      if(!isLoaded){
        this.store.dispatch(loadBookmarks());
      }
    });

    this.loadFilter();
  }


  loadFilter(): void {
    this.bookmarks = this.store.select(selectFilteredBook(this.selected));
  }

  changeFilter(filter: string): void {
    this.selected = filter;
    this.loadFilter();
  }

  createNew(){
    this.router.navigate(['/create']);
  }

  edit(bookmark: { id: number; title: string; date: Date }): void {
    const dialogRef = this.dialog.open(EditBookmarkComponent, {
      width: '400px',
      data: { title: bookmark.title, date: bookmark.date },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      debugger
        this.store.dispatch(
          updateBookmark({ id: bookmark.id, changes: result })
        );
      }
    });
  }
}
