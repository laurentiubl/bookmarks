import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {MemoryDbService} from "./bookmarks/services/memoryDb.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {BookmarkEffects} from "./bookmarks/store/effects/bookmarks.effects";
import { BookmarksContainerComponent } from './bookmarks/containers/bookmarks-container/bookmarks-container.component';
import { BookmarkListComponent } from './bookmarks/components/bookmark-list/bookmark-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {bookmarksReducer} from "./bookmarks/store/reducers/bookmarks.reducer";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { EditBookmarkComponent } from './bookmarks/components/edit-bookmark/edit-bookmark.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importă ReactiveFormsModule

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { CreateBookmarkComponent } from './bookmarks/components/create-bookmark/create-bookmark.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    BookmarksContainerComponent,
    BookmarkListComponent,
    EditBookmarkComponent,
    CreateBookmarkComponent,

  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDbService),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }}),
    EffectsModule.forRoot([BookmarkEffects]),
    StoreModule.forFeature('bookmarks', bookmarksReducer),
    StoreDevtoolsModule.instrument({
      autoPause: true,
    }),
  ],
  providers: [
    provideNativeDateAdapter(),
    provideClientHydration(),
    provideAnimationsAsync(),
    BookmarkEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
