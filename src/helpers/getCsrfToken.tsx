export const getCsrfToken = (): string | null | undefined => {
  const bffFrame = document.getElementById('bffFrame') as HTMLIFrameElement;
  const bffPage = bffFrame.contentDocument;
  return getCookie(bffPage!, 'XSRF-TOKEN');
};

const getCookie = (page: Document, key: string): string | null | undefined => {
  const values = page.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
  return values ? values.pop() : null;
};
