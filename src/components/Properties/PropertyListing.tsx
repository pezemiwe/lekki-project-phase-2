import { Flex } from "@chakra-ui/react";
import React from "react";
import Search from './Search';

const PropertyListing:React.FC = () => {
    return (
        <Flex w="100vw" h="100vh" bgColor="#FFFFFF">
            <Flex>
                <Search />
            </Flex>
        </Flex>
    )
}

export default PropertyListing;