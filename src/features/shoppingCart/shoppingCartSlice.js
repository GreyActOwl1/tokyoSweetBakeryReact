import { createSlice } from "@reduxjs/toolkit";
import ShoppingCartItem from "./ShoppingCartItem";

const trialData = [
  {
    name: "Blue Berry Cheese Cake",
    count: 1,
    category: "seasonal",
    rating: "4.5",
    price: "$25",
    img: "./foodImg/didi-miam-unsplash-seasonal-blueberry-cheesecake.jpg",
    description: "This simple classic is simply delicious.",
  },
  {
    name: "Carmalized Walnut Cupcake",
    count: 1,
    category: "seasonal",
    rating: "4.5",
    price: "$15",
    img: "./foodImg/chris-hardy-unsplash-seasonal-chocolate-pillows.jpg",
    description: "These chocolate pillows will have you thinking that you are dreaming.",
  },
  {
    name: "Chocolate Pillows",
    count: 1,
    category: "seasonal",
    rating: "4",
    price: "$7",
    img: "./foodImg/lore-schodts-unsplash-seasonal-cupcake.jpg",
    description: "Vanilla based cupcake with the delicious crunchy topping of carmalized walnuts.",
  },
];

const initialState = {
  shoppingList: trialData,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    deleteAll: (state, action) => {
      state.shoppingList = [];
    },
    modifyCount: (state, action) => {
      const { itemName, count } = action.payload;
      const newState = state.shoppingList.map((item) => {
        if (item.name === itemName) {
          return { ...item, count };
        }
        return item;
      });
      state.shoppingList = newState;
    },
  },
});

export const shoppingCartReducer = shoppingCartSlice.reducer;

export const { deleteAll, modifyCount } = shoppingCartSlice.actions;

export const selectShoppingCart = (state) => state.shoppingCart.shoppingList;
