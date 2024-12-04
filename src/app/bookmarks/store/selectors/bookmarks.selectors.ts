import {createSelector} from '@ngrx/store';
import {State} from "../models/state.model";
import {Bookmark} from "../models/bookmark.model";

export const selectBookmarksState = (state: { bookmarks: State }) => state.bookmarks;

export const selectBookmarks = (state: State) => state.bookmarks;

export const selectIsLoaded = createSelector(
  selectBookmarksState,
  (state: State) => state.loaded
);

export const selectFilteredBook = (filter: string) =>
  createSelector(selectBookmarks, (bookmarks:Bookmark[]) => {
    const now = new Date();
    return bookmarks['bookmarks'].filter((bookmark) => {
      const bookmarkDate = new Date(bookmark.date);
      if (filter === 'today') {
        return (
          bookmarkDate.toDateString() === now.toDateString()
        );
      } else if (filter === 'yesterday') {
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        return (
          bookmarkDate.toDateString() === yesterday.toDateString()
        );
      } else {
        return bookmarkDate < new Date(now.setDate(now.getDate() - 1));
      }
    });
  });
