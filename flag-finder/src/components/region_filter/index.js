import React from "react";
import { Select } from "@chakra-ui/react";

const RegionFilter = ({ onChange }) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Select
      placeholder="Filter by Region"
      onChange={onChange}
      className="region-filter-select"
    >
      {regions.map((region, index) => (
        <option key={index} value={region}>
          {region}
        </option>
      ))}
    </Select>
  );
};

export default RegionFilter;
