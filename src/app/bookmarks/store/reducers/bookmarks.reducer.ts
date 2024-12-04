import {State} from "../models/state.model";
import {createReducer, on} from "@ngrx/store";
import * as BookmarkActions from '../actions/bookmarks.actions';
import {addBookmark} from "../actions/bookmarks.actions";
export const initialState: State = {
  bookmarks: [],
  error: null,
  loaded: false
};


export const bookmarksReducer = createReducer(
  initialState,
  on(BookmarkActions.loadBookmarksSuccess, (state, { bookmarks }) => ({
    ...state,
    bookmarks,
    loaded: true
  })),
  on(BookmarkActions.loadBookmarksFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(BookmarkActions.updateBookmark, (state, { id, changes }) => ({
    ...state,
    bookmarks: state.bookmarks.map((bookmark) =>
      bookmark.id === id ? { ...bookmark, ...changes } : bookmark
    ),
  })),
  on(addBookmark, (state, { bookmark }) => ({
    ...state,
    bookmarks: [...state.bookmarks, bookmark],
  })),
);
