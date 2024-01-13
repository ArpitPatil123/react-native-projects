/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {AppwriteProvider} from './src/appwrite/AppwriteContext';

AppRegistry.registerComponent(appName, () => props => (
  <AppwriteProvider>
    <App {...props} />
  </AppwriteProvider>
));
// Navigation.registerComponent(
//   'App',
//   () => props =>
// (
//   <AppwriteProvider>
//     <App {...props} />
//   </AppwriteProvider>
// ),
//   () => App,
// );
