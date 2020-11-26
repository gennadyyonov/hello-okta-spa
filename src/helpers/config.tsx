const envSettings = window as any;

export class Config {
    static nodeEnv = process.env.REACT_APP_NODE_ENV || envSettings.REACT_APP_NODE_ENV;
    static bffUrl = process.env.REACT_APP_BFF || envSettings.REACT_APP_BFF;
    static environmentConfigUrl = process.env.REACT_APP_ENVIRONMENT_CONFIG || envSettings.REACT_APP_ENVIRONMENT_CONFIG;
    static logoutUrl = process.env.REACT_APP_LOGOUT || envSettings.REACT_APP_LOGOUT;
}