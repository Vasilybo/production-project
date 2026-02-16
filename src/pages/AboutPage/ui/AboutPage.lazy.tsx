import { FC, lazy } from 'react';

// const AboutPageLazy: FC = lazy(() => import("../AboutPage/AboutPage"));

export const AboutPageLazy: FC = lazy(() => 
  import("./AboutPage")
  .then((module) => ({default: module.AboutPage})),
);