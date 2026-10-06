import type { HTMLAttributes, ReactNode } from "react";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  src?: string;
  mediaType?: "image" | "video";
  poster?: string;
  alt?: string;
  title?: string;
  scrollHint?: string;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
  useWindowScroll?: boolean;
  enabled?: boolean;
  children?: ReactNode;
};

declare const ScrollExpand: (props: Props) => React.JSX.Element;
export default ScrollExpand;