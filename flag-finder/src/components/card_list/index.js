import CountryCard from "../card";
import { SimpleGrid } from "@chakra-ui/react";

export default function CardList({data}) {
    return (
        <SimpleGrid spacing={10} columns={4}>
            <CountryCard url={data[202].capital}/>
            
        </SimpleGrid>
    );
}
