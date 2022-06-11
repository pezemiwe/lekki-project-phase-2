import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Search from "./Search";
import { useProperties } from "hooks/data/property";
import Cards from "./Cards";

const PropertyListing: React.FC = () => {
  const [queryBuild] = React.useState("");
  const { data: properties } = useProperties(queryBuild);
  return (
    <Flex w="100%" h="100%" bgColor="gray.100" flexDirection="column" px="50px">
      <Search />
      <Header />
      <Cards properties={properties || []} />
    </Flex>
  );
};

export default PropertyListing;
