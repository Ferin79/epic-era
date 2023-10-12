import { useDataEnhancementPlugin } from '@firecms/data_enhancement';
import '@fontsource/ibm-plex-mono';
import { User as FirebaseUser } from 'firebase/auth';
import { Authenticator, FirebaseCMSApp } from 'firecms';
import { useCallback } from 'react';
import 'typeface-rubik';
import { HistoryCollection } from './collections/histories.tsx';
import { firebaseConfig } from './firebase-config.ts';

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user }) => {
      if (user?.email?.includes('ferinpatel79@gmail.com')) {
        return true;
      }
      throw Error('You are not allowed!');
    },
    []
  );

  const dataEnhancementPlugin = useDataEnhancementPlugin({
    getConfigForPath: ({ path }) => {
      return true;
    },
  });

  return (
    <FirebaseCMSApp
      name={'Epic Era'}
      plugins={[dataEnhancementPlugin]}
      authentication={myAuthenticator}
      collections={[HistoryCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}
