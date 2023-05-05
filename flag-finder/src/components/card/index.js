import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

export default function CountryCard(props) {
    // add key function here
    return (
        <Card maxW="sm">
            <CardBody bg="white">
                <Image
                    src={props.data.flags.png}
                    alt="country flag"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{props.data.name.common}</Heading>
                    <Text fontSize={12}>
                        <b>Population: </b>{props.data.population}
                    </Text>
                    <Text fontSize={12}> <b>Region: </b>{props.data.region}</Text>
                    <Text fontSize={12}><b>Capital: </b>{props.data.capital}</Text>
                </Stack>
            </CardBody>
        </Card>
    );
}
