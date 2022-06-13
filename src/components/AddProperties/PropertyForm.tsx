import * as React from "react";
import { Grid, GridItem, FormControl, FormLabel, Input, Textarea,  } from "@chakra-ui/react";

const PropertyForm: React.FC = () => {
  return (
    <form
      id="my-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Grid templateColumns="repeat(8, 1fr)">
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
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
              type="address"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="country" isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              type="country"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="state" isRequired>
            <FormLabel>State</FormLabel>
            <Input
              type="state"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="latitude" isRequired>
            <FormLabel>Latitude</FormLabel>
            <Input
              type="latitude"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="longitude" isRequired>
            <FormLabel>Longitude</FormLabel>
            <Input
              type="longitude"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <Input
              type="category"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="area" isRequired>
            <FormLabel>Area in square feet</FormLabel>
            <Input
              type="area"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={8} my="3">
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Explain in detail"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="noofbedrooms">
            <FormLabel>No of Bedrooms</FormLabel>
            <Input
              type="noofbedrooms"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="noofbathrooms">
            <FormLabel>No of Bathrooms</FormLabel>
            <Input
              type="noofbedrooms"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="nooftoilets">
            <FormLabel>No of Toilets</FormLabel>
            <Input
              type="nooftoilets"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="nooffloors">
            <FormLabel>No of Floors</FormLabel>
            <Input
              type="nooffloors"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input
              type="price"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="rentprice">
            <FormLabel>Rent price</FormLabel>
            <Input
              type="rentprice"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="bannerurl">
            <FormLabel>Banner Url</FormLabel>
            <Input
              type="bannerurl"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="videourl">
            <FormLabel>Video Url</FormLabel>
            <Input
              type="videourl"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pr="2">
          <FormControl id="floorplanurl">
            <FormLabel>Floor Plan Url</FormLabel>
            <Input
              type="floorplanurl"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4} my="3" pl="2">
          <FormControl id="threeDurl">
            <FormLabel>3D Url</FormLabel>
            <Input
              type="threeDurl"
              borderColor="gray.300"
              _focus={{ borderColor: "gray.300" }}
              _hover={{ borderColor: "gray.300" }}
            />
          </FormControl>
        </GridItem>
      </Grid>
    </form>
  );
};

export default PropertyForm;
