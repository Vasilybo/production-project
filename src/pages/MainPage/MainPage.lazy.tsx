import { FC, lazy } from 'react';

export const MainPageLazy: FC = lazy(() => 
  import("../MainPage/MainPage")
  .then((module) => ({default: module.MainPage})),
);