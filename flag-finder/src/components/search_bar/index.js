import { Input, Stack, InputGroup, InputLeftElement,  } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBar() {
    return (
        <Stack spacing={4}>
            <InputGroup margin={20}>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
                />
            <Input
                    bg="white"
                    type="tel"
                    placeholder="Search for a country..."
                />
            </InputGroup>
        </Stack>
    );
}
