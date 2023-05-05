import CountryCard from "../card";
import { SimpleGrid } from "@chakra-ui/react";

export default function CardList({ data }) {
    return (
        <SimpleGrid spacing={10} columns={4}>
            {data.map((item) => (
                <CountryCard data={item} />
            ))}
            ;
        </SimpleGrid>
    );
}

// setCountryName(data[i].name.common);
// // setFlagName(data[i]); // to be fixed!
// setPopName(data[i].population);
// setCapitalName(data[i].capital);
// setRegionName(data[i].region);
