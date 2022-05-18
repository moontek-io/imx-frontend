/* eslint-disable @typescript-eslint/no-empty-interface */
import { myTheme } from './theme';

import 'styled-components';
type theme = typeof myTheme;
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
