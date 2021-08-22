import React, { createContext, useState } from "react";
import imageItem from "./svg/jordan-01.jpg";

const products = [
  {
    _id: "1",
    title: "Nike Shoes 01",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 19,
    colors: ["red", "black", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "2",
    title: "Nike Shoes 02",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 18,
    colors: ["red", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "3",
    title: "Nike Shoes 03",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 17,
    colors: ["lightblue", "white", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "4",
    title: "Nike Shoes 04",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 16,
    colors: ["orange", "black", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "5",
    title: "Nike Shoes 05",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 19,
    colors: ["orange", "black", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "6",
    title: "Nike Shoes 06",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 20,
    colors: ["red", "black", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "7",
    title: "Nike Shoes 07",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 21,
    colors: ["orange", "black", "crimson", "teal"],
    count: 1,
  },
  {
    _id: "8",
    title: "Nike Shoes 08",
    src: imageItem,
    description: "UI/UX designing , html css tutorial",
    content:
      "welcome to our channel Dev TL .Here you can learn web designing, UI/UX designing , html css tutorial",
    price: 23,
    colors: ["orange", "black", "crimson", "teal"],
    count: 1,
  },
];
const cart = [];

export const DataContext = createContext({ products, addCart: ()=> {} , cart});


const DataProvider = (props) => {

  const [AddToCart, setAddToCart] = useState([]);


  const addCart = (id) => {
    const data = products.filter((item) => {
      return item._id === id;
    });
    
    setAddToCart({cartC:[...cart ,...data ]})
    console.log('123',AddToCart);
  };

  return (
    <div>
      <DataContext.Provider value={{ products, addCart , cart}}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;
