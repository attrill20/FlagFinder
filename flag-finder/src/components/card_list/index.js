import CountryCard from "../card";
import { SimpleGrid } from "@chakra-ui/react";

export default function CardList({data}) {

    if (typeof data !== 'Array') {
        console.log(typeof data); // not sure??
        return(<p>Failed!</p>); // or handle the error
      } else {
        return (
            <SimpleGrid spacing={10} columns={4}>
                console.log(data);
               <div> {data.map(i => 
               (<CountryCard data={i}/>
               ))}; </div>
            </SimpleGrid>
        );
      }
      
      

    
    


    // setCountryName(data[i].name.common);
        // // setFlagName(data[i]); // to be fixed!
        // setPopName(data[i].population);
        // setCapitalName(data[i].capital);
        // setRegionName(data[i].region);
}
