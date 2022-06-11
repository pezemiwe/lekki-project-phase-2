import { Box, SimpleGrid } from "@chakra-ui/react";
import { Property } from "../../interfaces/property";
import Card from "./Card";

interface Props {
  properties: Property[];
}

export const Cards: React.FC<Props> = ({ properties }) => {
  return (
    <Box>
      <SimpleGrid  minChildWidth="300px" spacing={8}>
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Cards;
