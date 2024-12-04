import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {catchError, map, of, switchMap} from 'rxjs';
import {addBookmark, loadBookmarks, loadBookmarksFailure, loadBookmarksSuccess} from "../actions/bookmarks.actions";
import {BookMarksService} from "../../services/bookmarks.service";



@Injectable()
export class BookmarkEffects {
  constructor(public actions$: Actions,
              public bookService:BookMarksService) {}


  loadBookmarks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookmarks),
      switchMap(() =>
        this.bookService.getBookmarks().pipe(
          map((bookmarks) =>
           loadBookmarksSuccess({ bookmarks })
          ),
          catchError((error) =>
            of(loadBookmarksFailure({ error }))
          )
        )
      )
    )
  );

  addBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBookmark),
      switchMap(({ bookmark }) =>
        this.bookService.addBookmark(bookmark).pipe(
          map(() => ({ type: 'Add Bookmark Success' })),
          catchError((error) => of({ type: 'Add Bookmark Failure', error }))
        )
      )
    )
  );
}
