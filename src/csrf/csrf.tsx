interface CsrfInfo {
  cookieName: string | null;
  headerName: string | null;
}

interface CsrfInfoSingleton {
  csrfInfo: CsrfInfo;
  initialized: boolean;

  init(csrfInfo: CsrfInfo): void;
}

export const csrfInfoSingleton: CsrfInfoSingleton = {
  csrfInfo: {
    cookieName: null,
    headerName: null,
  },
  initialized: false,
  init(csrfInfo: CsrfInfo) {
    this.csrfInfo = csrfInfo;
    this.initialized = true;
  }
};
