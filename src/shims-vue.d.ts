/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    disable?: boolean | string | (() => boolean);
  }
  const AOS: {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  };
  export default AOS;
}
