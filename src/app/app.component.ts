import {Component, OnInit} from '@angular/core';
import {ipcMain} from 'electron'


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
   title = 'updates';
   messages: any[] = [];

   ngOnInit(): void {
      console.log('subscribe');
      ipcMain.on('message', this.logMessage)
   }

   logMessage(e) {
      this.messages.push(e)
   }
}
