import {useState} from "react";
import { Input, Button, Card, Col, Divider, Row } from "antd";
import './App.css';
import foods from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(true);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodList.filter((food) => food !== foodToDelete);
    setFoodList(updatedFoods);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {showForm ? <AddFoodForm onAddFood={addFood} /> : null}

      <Row gutter={16}> 
          {filteredFoods.map((food, index) => (
            <Col span={8}> 
            <FoodBox key={index} food={food} onDelete={deleteFood} />
            </Col>
          ))}  
      </Row> 

      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add New Food"}
      </Button>
    </div>
  );
}

export default App;