const envSettings = window as any;

export class Config {
  static baseUrl = envSettings.BASE_URL || '';
}
