export {};

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toInlucdesProps(partialObj: any): R;
      toIncludesObject(partialObj: any): R;
      toHaveCommonPropties({ type }: { type: string }): R;
    }
  }
}
