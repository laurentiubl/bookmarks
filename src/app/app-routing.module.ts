import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookmarkComponent} from "./bookmarks/components/create-bookmark/create-bookmark.component";
import {BookmarksContainerComponent} from "./bookmarks/containers/bookmarks-container/bookmarks-container.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: BookmarksContainerComponent },
  { path: 'create', component: CreateBookmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
