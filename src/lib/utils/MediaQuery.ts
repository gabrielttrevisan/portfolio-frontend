export default function getMediaQuery() {
  const width = window.innerWidth;

  return {
    mobile: width < 400,
  };
}

export type MediaQueryCallback = () => boolean;

export class MediaQueryParam {
  constructor(private value: number, private mediaQuery: MediaQuery) {}

  down(): MediaQueryCallback {
    const self = this;

    return () => window.innerWidth < self.value;
  }

  downOrEqual(): MediaQueryCallback {
    const self = this;

    return () => window.innerWidth <= self.value;
  }

  up(): MediaQueryCallback {
    const self = this;

    return () => window.innerWidth > self.value;
  }

  upOrEqual(): MediaQueryCallback {
    const self = this;

    return () => window.innerWidth >= self.value;
  }
}

export class MediaQuery {
  private params: Map<string, MediaQueryParam>;

  constructor() {
    this.params = new Map<string, MediaQueryParam>();
  }

  addQueryParam(key: string, value: number) {
    this.params.set(key, new MediaQueryParam(value, this));
  }
}
