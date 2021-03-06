import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPage } from '../pages/main/main';
import { Storage } from '@ionic/storage';

@NgModule({
    declarations: [
        MyApp,
        MainPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MainPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Storage
    ]
})
export class AppModule {}
