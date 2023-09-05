import { useState } from "react";
import { Input, Button, Card, Col, Divider, Row } from "antd";


function FoodBox({ food, onDelete }) {
    return (
      <Card title={food.name}>
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <img src={food.image} alt={food.name} width={100} />
  
        
        <Button onClick={() => onDelete(food)}>Delete</Button>
      </Card>
    );
  }

  export default FoodBox;