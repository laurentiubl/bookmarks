import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Bookmark} from "../../store/models/bookmark.model";
import {addBookmark} from "../../store/actions/bookmarks.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrl: './create-bookmark.component.scss'
})
export class CreateBookmarkComponent {
  bookmarkForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.bookmarkForm = this.fb.group({
      title: ['', Validators.required],
      date: [null, [Validators.required]],
    });
  }

  submit() {
    if (this.bookmarkForm.valid) {
      const newBookmark: Bookmark = this.bookmarkForm.value;
      debugger
      this.store.dispatch(addBookmark({ bookmark: newBookmark }));
      this.bookmarkForm.reset();
      this.router.navigate(['/list']);
    }
  }
}
