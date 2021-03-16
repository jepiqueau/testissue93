import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLiteService } from './services/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(    private platform: Platform,
    private _sqlite: SQLiteService,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      this._sqlite.initializePlugin().then(ret => {
        console.log(">>>> in App  this.initPlugin " + ret)
      });
    });
  }

}
