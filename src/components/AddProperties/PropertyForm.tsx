import * as React from "react";
import {
  Button,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { createProperty } from "../../api/lib/property";
import { AddProperty } from "interfaces/property";

export const PropertyForm: React.FC = () => {
  const toast = useToast();
  const [creating, setCreating] = React.useState(false);

  const handleSubmit = async (values: AddProperty) => {
    setCreating(true);
    const result = await createProperty(values);
    setCreating(false);
    if (result.status === 200) {
      setCreating(false);
      toast({
        title: "Property has been successfully added",
        description: "",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-left",
      });
    } else {
      setCreating(false);
      toast({
        title: "Something went wrong",
        description: "",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-left",
      });
    }
  };
  return (
    <>
      <Flex w="100%" py="30px" px="50px">
        <Text fontWeight="700" fontSize="24px">
          Property Registration Form
        </Text>
      </Flex>
      <form
        id="my-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid templateColumns="repeat(8, 1fr)" px="50px">
          <GridItem colSpan={4} my="3" pr="2">
            <FormControl id="owner" isRequired>
              <FormLabel>Property Owner</FormLabel>
              <Input
                type="text"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pl="2">
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pr="2">
            <FormControl id="desc" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pl="2">
            <FormControl id="type" isRequired>
              <FormLabel>Type</FormLabel>
              <Input
                type="text"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pr="2">
            <FormControl id="bathroom" isRequired>
              <FormLabel>No of Bathroom</FormLabel>
              <Input
                type="number"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pl="2">
            <FormControl id="bedroom" isRequired>
              <FormLabel>No of Bedroom</FormLabel>
              <Input
                type="number"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pr="2">
            <FormControl id="kitchen" isRequired>
              <FormLabel>No of Kitchen</FormLabel>
              <Input
                type="number"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pl="2">
            <FormControl id="toilet" isRequired>
              <FormLabel>No of Toilet</FormLabel>
              <Input
                type="number"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pr="2">
            <FormControl id="sittingRoom">
              <FormLabel>No of Sitting Room</FormLabel>
              <Input
                type="number"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pl="2">
            <FormControl id="image">
              <FormLabel>Property Image</FormLabel>
              <Input
                type="file"
                accept=".jpg, .jpeg, .png"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pr="2">
            <FormControl id="validFrom">
              <FormLabel>Valid From</FormLabel>
              <Input
                type="date"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4} my="3" pl="2">
            <FormControl id="validTo">
              <FormLabel>Valid To</FormLabel>
              <Input
                type="date"
                borderColor="gray.300"
                _focus={{ borderColor: "gray.300" }}
                _hover={{ borderColor: "gray.300" }}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Flex px="50px" alignItems="flex-end"  w="100%">
          <Button
            type="submit"
            form="my-form"
            bg="#02055A"
            color="#fff"
            onClick={handleSubmit}
            disabled={creating}
            isLoading={creating}
            textAlign="end"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default PropertyForm;
