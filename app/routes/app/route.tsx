import { Box } from '@chakra-ui/react';
import { Outlet } from '@remix-run/react';

export default function Route() {
  return (
    <Box>
      <Box>App:</Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
