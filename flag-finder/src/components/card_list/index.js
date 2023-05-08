import CountryCard from "../card";
import { SimpleGrid } from "@chakra-ui/react";

export default function CardList({ data }) {
    return (
        <SimpleGrid spacing={10} columns={4}>
            {data.map((item) => (
                <CountryCard data={item} />
            ))}
        </SimpleGrid>
    );
}