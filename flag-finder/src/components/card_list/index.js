import CountryCard from "../card";
import { SimpleGrid } from "@chakra-ui/react";

export default function CardList({ data }) {
    return (
        <SimpleGrid spacing={20} columns={4}>
            {data.map((item) => (
                <CountryCard data={item} />
            ))}
        </SimpleGrid>
    );
}