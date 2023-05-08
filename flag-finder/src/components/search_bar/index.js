import { Input, Stack, InputGroup, InputLeftElement,  } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBar({onChange}) {
    return (
        <Stack spacing={4}>
            <InputGroup width="300px" margin={20}>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
                />
            <Input
                    bg="white"
                    type="tel"
                    placeholder="Search for a country..."
                    onChange={onChange}
                />
            </InputGroup>
        </Stack>
    );
}
