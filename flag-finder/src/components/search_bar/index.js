import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function SearchBar() {
    return (
        <Stack spacing={4}>
            <InputGroup margin={20}>
                <InputLeftElement pointerEvents="none" />
                <Input
                    bg="white"
                    type="tel"
                    placeholder="Search for a country..."
                />
            </InputGroup>
        </Stack>
    );
}
