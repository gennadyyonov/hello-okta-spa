import { fetchCsrfInfo } from '../api/fetchCsrfInfo';
import Cookies from 'js-cookie';

interface CsrfInfo {
  cookieName: string | null;
  headerName: string | null;
}

class CsrfService {
  private static instance: CsrfService;

  private initialized: boolean = false;
  private csrfEnabled: boolean = false;
  private csrfInfo?: CsrfInfo;

  private constructor() {}

  static getInstance(): CsrfService {
    if (!CsrfService.instance) {
      CsrfService.instance = new CsrfService();
    }
    return CsrfService.instance;
  }

  async initialize(): Promise<void> {
    if (!this.csrfEnabled) {
      this.initialized = true;
      return;
    }

    if (this.initialized) {
      return;
    }

    try {
      this.csrfInfo = await fetchCsrfInfo();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to fetch CSRF info:', error);
    }
  }

  addCsrfToken(headers) {
    if (!this.csrfEnabled) {
      return;
    }
    if (!this.csrfInfo) {
      return;
    }
    const csrfToken = Cookies.get(this.csrfInfo.cookieName!);
    if (csrfToken) {
      headers[this.csrfInfo.headerName!] = csrfToken;
    }
  }

  setCsrfEnabled(value: boolean): void {
    this.csrfEnabled = value;
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}

const csrfService = CsrfService.getInstance();

export default csrfService;
