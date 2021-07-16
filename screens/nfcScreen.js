import NfcManager from 'react-native-nfc-manager';
import NfcEvents from 'react-native-nfc-manager';

export default async function initNfc() {
  await NfcManager.start();
}

export const readNdef = () => {
  const cleanUp = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  return new Promise(resolve => {
    let tagFound = null;

    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      tagFound = tag;
      resolve(tagFound);
      NfcManager.setAlertMessage('NDEF tag found');
      NfcManager.unregisterTagEvent().catch(() => 0);
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      cleanUp();
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
};
