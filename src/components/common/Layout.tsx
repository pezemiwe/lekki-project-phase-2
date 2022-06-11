import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layout: React.FC = () => {
  return (
    <Flex w="100%" h="100%" display="flex" bg="#fff" flexDirection="column">
      <Navbar />
      <Box w="100%" h="100%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
