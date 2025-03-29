class StyleSheetTestUtils {
  static originalGetComputedStyle = window.getComputedStyle;

  static enableLightMode() {
    window.getComputedStyle = () => ({ getPropertyValue: () => '' }) as unknown as CSSStyleDeclaration;
  }

  static enableRealStyles() {
    window.getComputedStyle = StyleSheetTestUtils.originalGetComputedStyle;
  }

  static applyLightModeBeforeTests() {
    beforeAll(() => {
      StyleSheetTestUtils.enableLightMode();
    });

    afterAll(() => {
      StyleSheetTestUtils.enableRealStyles();
    });
  }

  static applyLightModePerTest() {
    beforeEach(() => {
      StyleSheetTestUtils.enableLightMode();
    });

    afterEach(() => {
      StyleSheetTestUtils.enableRealStyles();
    });
  }

  static applyRealStylesBeforeTests() {
    beforeAll(() => {
      StyleSheetTestUtils.enableRealStyles();
    });
  }

  static applyRealStylesPerTest() {
    beforeEach(() => {
      StyleSheetTestUtils.enableRealStyles();
    });
  }
}

export default StyleSheetTestUtils;
