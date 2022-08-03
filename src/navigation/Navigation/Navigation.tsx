import * as React from 'react';

import { Home } from '../../screens';
import { Search } from '../../components';

export const Navigation = () => {
  return(
    <>
     <Search searchKeyword={''} setSearch={function (value: string): void {
    throw new Error('Function not implemented.');
  } }/>
     <Home />
     </>
     );
};
