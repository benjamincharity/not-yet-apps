import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

export interface SidebarProps {}

export const Sidebar = React.memo((props: SidebarProps): ReactElement => {
  //const {} = props;
  return (
    <Box as={'aside'} h={'full'}>
      Sidebar
    </Box>
  );
});
