import { useState } from "react";
import { Input, Button, Card, Col, Divider, Row } from "antd";



function Search({ onSearch }) {
    const handleSearch = (event) => {
      onSearch(event.target.value);
    };
  
    return (
      <Input
        type="text"
        placeholder="Search food"
        onChange={handleSearch}
      />
    );
  } 

  export default Search;