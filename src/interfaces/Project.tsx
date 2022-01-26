import { ReactElement } from "react";

export interface Project {
  name: string,
  year: number,
  coverImg: string,
  coverImgAlt: string,
  stack: string[],
  ghLink: string,
  urlLink: string | undefined,
  description: ReactElement<HTMLParagraphElement, string>,
}