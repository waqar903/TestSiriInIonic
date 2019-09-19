import { Component } from '@angular/core';
import { Platform, ToastController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SiriShortcuts, SiriShortcut } from '@ionic-native/siri-shortcuts/ngx';
import { FcmService } from './fcm.service';
// import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private siriShortcuts: SiriShortcuts,
    fcm: FcmService, toastCtrl: ToastController
  ) {
    this.initializeApp();
    this.startSiri();
    // platform.ready().then(() => {

    //   // Get a FCM token
    //   fcm.getToken();

    //   // Listen to incoming messages
    //   fcm.listenToNotifications().pipe(
    //     tap(async msg => {
    //       // show a toast
    //       const toast = await toastCtrl.create({
    //         message: msg.body,
    //         duration: 3000
    //       });
    //       toast.present();
    //     })
    //   )
    //   .subscribe();
    // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  startSiri() {
    this.siriShortcuts.donate({
      persistentIdentifier: 'open-my-app',
      title: 'Open my app',
      suggestedInvocationPhrase: 'Open my app',
      userInfo: { username: 'username' },
      isEligibleForSearch: true,
      isEligibleForPrediction: true,
    })
      .then(() => console.log('Shortcut donated.'))
      .catch((error: any) => console.error(error));

    this.siriShortcuts.present({
      persistentIdentifier: 'open-my-app',
      title: 'Open my app',
      suggestedInvocationPhrase: 'Open my app',
      userInfo: { username: 'username' },
    })
      .then(() => console.log('Shortcut added.'))
      .catch((error: any) => console.error(error));

    this.siriShortcuts.remove('open-my-app')
      .then(() => console.log('Shortcut removed.'))
      .catch((error: any) => console.error(error));

    this.siriShortcuts.removeAll()
      .then(() => console.log('All shortcuts removed removed.'))
      .catch((error: any) => console.error(error));

    this.siriShortcuts.getActivatedShortcut()
      .then((data: SiriShortcut | null) => console.log(data))
      .catch((error: any) => console.error(error));
  }
}
