import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import React from 'react';
import {RawIntlProvider as IntlProvider, createIntl, createIntlCache} from 'react-intl';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomeConnected} from '../components/Home/HomeConnected';
import I18N from '../i18n/i18n';
import {AppContainerProps} from './AppContainerConnected';
import {environmentConfig} from 'helpers/environmentConfig';

const cache = createIntlCache();

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  const {locale, messages} = props;
  const intl = createIntl({ locale: locale, messages: messages }, cache);
  return (
    <Router>
      <Security authService={environmentConfig.authService}>
        <IntlProvider value={intl}>
          <I18N/>
          <Switch>
            <SecureRoute exact path="/" component={HomeConnected}/>
            <Route path='/implicit/callback' component={LoginCallback}/>
          </Switch>
        </IntlProvider>
      </Security>
    </Router>
  );
};