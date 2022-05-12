import { compose } from 'recompose';
import { withColorMode } from './withColorMode';
import { withUI } from './withUI';

export const withProviders = compose(withUI, withColorMode);
