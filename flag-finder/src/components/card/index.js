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
   return ( <Card maxW='sm'>
   <CardBody>
     <Image
       //src= {props.url}
       alt='Green double couch with wooden legs'
       borderRadius='lg'
     />
     <Stack mt='6' spacing='3'>
       <Heading size='md'>Living room Sofa</Heading>
       <Text>
         {props.data};
       </Text>
       <Text color='blue.600' fontSize='2xl'>
         $450
       </Text>
     </Stack>
   </CardBody>
   <Divider />
   <CardFooter>
     <ButtonGroup spacing='2'>
       <Button variant='solid' colorScheme='blue'>
         Buy now
       </Button>
       <Button variant='ghost' colorScheme='blue'>
         Add to cart
       </Button>
     </ButtonGroup>
   </CardFooter>
 </Card>
   )
}
