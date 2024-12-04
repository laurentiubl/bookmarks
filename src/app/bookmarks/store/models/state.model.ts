import {Bookmark} from "./bookmark.model";

export interface State {
  bookmarks: Bookmark[];
  error: any;
  loaded:boolean
}
