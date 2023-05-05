import CountryCard from "../card";
import { SimpleGrid } from "@chakra-ui/react";

export default function CardList(props) {
    return (
        <SimpleGrid spacing={10} columns={4}>
            <CountryCard data={props.data}/>
            
        </SimpleGrid>
    );
}
