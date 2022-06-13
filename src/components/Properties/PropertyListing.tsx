import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { useProperties } from "hooks/data/property";
import Cards from "./Cards";
import { FiSearch } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";

const PropertyListing: React.FC = () => {
  const [queryBuild, setQueryBuild] = React.useState<string>("");
  const { data: properties } = useProperties(queryBuild);
  const [value, setValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const filteredProperties = properties?.filter((t) =>
    t.address.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setQueryBuild(e.target.value);
  };
  console.log({ properties });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <Flex
      w="100%"
      h="100%"
      bgColor="gray.100"
      flexDirection="column"
      px="50px"
      pb="50px"
    >
      <Flex
        w="100%"
        justifyContent="center"
        mt="68px"
        mb="88px"
        alignItems="center"
      >
        <InputGroup w="600px" mr="20px">
          <InputRightElement
            mr="8px"
            mt="4px"
            pointerEvents="none"
            children={<FiSearch color="gray.300" />}
          />
          <Input
            bg="#fff"
            borderRadius="full"
            type="text"
            placeholder="Search by address or location"
            boxShadow="0px 8px 16px rgba(96, 97, 112, 0.16)"
            h="48px"
            value={searchValue}
            onChange={handleSearch}
          />
        </InputGroup>
        <Menu>
          <MenuButton
            as={Button}
            h="48px"
            bg="#fff"
            rightIcon={<BsFilter />}
            boxShadow="0px 8px 16px rgba(96, 97, 112, 0.16)"
            borderRadius="full"
          >
            Filter by
          </MenuButton>
          <MenuList defaultValue={value} onChange={onChange}>
            <MenuItem value="noOfBathrooms">No of bathrooms</MenuItem>
            <MenuItem value="noOfBedrooms">No of bedrooms</MenuItem>
            <MenuItem value="owner">Owner</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Cards properties={filteredProperties || []} />
    </Flex>
  );
};

export default PropertyListing;
