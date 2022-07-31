import { createSlice } from "@reduxjs/toolkit";

const trialData = [
  {
    name: "Blue Berry Cheese Cake",
    count: 1,
    category: "seasonal",
    rating: "4.5",
    price: "$25",
    img: "./img/didi-miam-unsplash-seasonal-blueberry-cheesecake.jpg",
    description: "This simple classic is simply delicious.",
  },
  {
    name: "Carmalized Walnut Cupcake",
    count: 1,
    category: "seasonal",
    rating: "4.5",
    price: "$15",
    img: "./img/chris-hardy-unsplash-seasonal-chocolate-pillows.jpg",
    description: "These chocolate pillows will have you thinking that you are dreaming.",
  },
  {
    name: "Chocolate Pillows",
    count: 1,
    category: "seasonal",
    rating: "4",
    price: "$7",
    img: "./img/lore-schodts-unsplash-seasonal-cupcake.jpg",
    description: "Vanilla based cupcake with the delicious crunchy topping of carmalized walnuts.",
  },
];

const initialState = {
  shoppingList: trialData,
};

const shoppingCartSlice = createSlice({ name: "shoppingCart", initialState });

export const shoppingCartReducer = shoppingCartSlice.reducer;

export const selectShoppingCart = (state) => state.shoppingCart.shoppingList;
