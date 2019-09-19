import { Component } from '@angular/core';
import { SiriShortcuts, SiriShortcut } from '@ionic-native/siri-shortcuts/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private siriShortcuts: SiriShortcuts) {}
//   addShortcut(cmd: string) {
//     this.siriShortcuts.present({
//         persistentIdentifier: 'open-my-app-' + cmd,
//         title: 'Open ' + cmd,
//         suggestedInvocationPhrase: 'Open ' + cmd,
//         userInfo: { command: cmd },
//     })
// .then(() => console.log('Shortcut added.'))
// .catch((error: any) => console.error(error));
// }


donatingShortcut() {
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
}

presentShortcut() {
  this.siriShortcuts.present({
    persistentIdentifier: 'open-my-app',
    title: 'Open my app',
    suggestedInvocationPhrase: 'Open my app',
    userInfo: { username: 'username' },
  })
    .then(() => console.log('Shortcut added.'))
    .catch((error: any) => console.error(error));
}

removeShortcut() {
  this.siriShortcuts.remove('open-my-app')
    .then(() => console.log('Shortcut removed.'))
    .catch((error: any) => console.error(error));
}

removeAllShortcuts() {
  this.siriShortcuts.removeAll()
    .then(() => console.log('All shortcuts removed removed.'))
    .catch((error: any) => console.error(error));
}

}
