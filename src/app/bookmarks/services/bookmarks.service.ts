import {delay, Observable, of} from "rxjs";
import {Bookmark} from "../store/models/bookmark.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class BookMarksService{
  constructor(private httpClient: HttpClient) {}

  getBookmarks():  Observable<Bookmark[]> {
    return this.httpClient.get<Bookmark[]>('/api/bookmarks');
  }

  addBookmark(book:Bookmark):  Observable<Bookmark[]> {
     return this.httpClient.put<Bookmark[]>('/api/bookmarks/save', book);
    // de implementat salvarea

  }

}
