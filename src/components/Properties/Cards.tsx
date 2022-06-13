import { Box, Flex, Text, Divider, SimpleGrid } from "@chakra-ui/react";
import { Property } from "../../interfaces/property";
import Card from "./Card";
import * as React from "react";

interface Props {
  properties: Property[];
}

export const Cards: React.FC<Props> = ({ properties }) => {
  return (
    <Box>
      <Flex w="100%" justifyContent="space-between" mb="5px">
        <Text fontSize="24px" fontWeight="700">
          Property Listing
        </Text>
        <Flex>
          <Text mr="5px">Total Listing:</Text>
          <Text>{properties?.length || 0}</Text>
        </Flex>
      </Flex>
      <Divider h="1px" bg="#E5E5E5" mb="10px" />
      <SimpleGrid minChildWidth="300px" spacing={8}>
        {properties?.map((property) => (
          <Card key={property._id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Cards;
