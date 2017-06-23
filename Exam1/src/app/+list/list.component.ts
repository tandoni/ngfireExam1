import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface List {
  fullName: string;
  abbreviation: string;
  $key?: string; // ? is optional
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  db: AngularFireDatabase;
  readonly listPath = 'list';
  formList: List = {
    'fullName': '',
    'abbreviation': ''
  };

  formListStream: FirebaseListObservable<List[]>;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  ngOnInit() {
    this.formListStream = this.db.list(this.listPath);
  }

  onSubmit(): void {
    // console.log('you wish to submit ', this.formMovieQuote);
    // this.movieQuotes.unshift(this.formMovieQuote);
    try {
      if (this.formList.$key) {
        this.formListStream.update(this.formList.$key, this.formList);
      } else {
        this.formListStream.push(this.formList);
      }
      this.formList = {
        'fullName': '',
        'abbreviation': ''
      };
    } catch (e) {
      console.log('Form error', e);
    }
  }

  remove(item: string): void {
    this.formListStream.remove(item);
  }

}
