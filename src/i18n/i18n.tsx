import * as React from 'react';
import {injectIntl, IntlShape} from 'react-intl';

interface I18NProps {
  intl: IntlShape;
}

class I18N extends React.Component<I18NProps, any, any> {
  static instance: I18N | null = null;

  componentWillMount() {
    if (!I18N.instance) {
      I18N.instance = this;
    }
  }

  render() {
    return null;
  }
}

export default injectIntl(I18N);

export function i18n(id, values?) {
  return I18N.instance ? I18N.instance.props.intl.formatMessage({id: id}, values) : id;
}
