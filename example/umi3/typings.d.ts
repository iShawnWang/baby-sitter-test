declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

interface Window {
  apmPlus: any
  __bl: any
  _SERAPH_: any
}

declare const MonitorJS: any;
declare const Sentry: any;