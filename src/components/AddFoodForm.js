import { useState } from "react";
import { Input, Form,Button, Card, Col, Divider, Row } from "antd";


function AddFoodForm({ onAddFood }) {
    const [newFood, setNewFood] = useState({
      name: "",
      calories: 0,
      image: "",
      servings: 0,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewFood({ ...newFood, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAddFood(newFood);
      setNewFood({ name: "", calories: 0, image: "", servings: 0 });
    };
  
    return (
      <Card >
      <Form onSubmit={handleSubmit} layout="vertical">
        <Form.Item name="name" label="Username"  >
          <Input  
            type="text"
            name="name"
            placeholder="Food name"
            value={newFood.name}
            onChange={handleInputChange}
          />
          </Form.Item>
        <Form.Item name="calories" label="Calories"  >
          <Input
            type="number"
            name="calories"
            placeholder="Calories"
            value={newFood.calories}
            onChange={handleInputChange}
          />
          </Form.Item>

        <Input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newFood.image}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="servings"
          placeholder="Servings"
          value={newFood.servings}
          onChange={handleInputChange}
        />
        <Button type="submit">Add Food</Button>
      </Form>
      </Card>
    );
  }
  
export default AddFoodForm;
