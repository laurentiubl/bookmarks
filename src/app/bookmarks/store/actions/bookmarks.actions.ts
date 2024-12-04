import {createAction, props} from "@ngrx/store";
import {Bookmark} from "../models/bookmark.model";


 export const loadBookmarksSuccess = createAction('[My Bookmarks] Load Bookm', props<{ bookmarks: Bookmark[] }>());

 export const loadBookmarksFailure = createAction(
  '[My Bookmarks] Load Bookmarks Failure',
  props<{ error: any }>()
);

export const loadBookmarks = createAction('[My Bookmarks] Load');


export const updateBookmark = createAction(
  '[My Bookmarks] Update',
  props<{ id: number; changes: { title: string; date: Date } }>()
);

export const addBookmark = createAction(
  '[My Bookmarks]  Add Bookmark',
  props<{ bookmark: Bookmark }>()
);
