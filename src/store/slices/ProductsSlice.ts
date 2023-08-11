import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../storeInterfaces';

// const initialState: ProductType[] = [];
const initialState: ProductType[] = [
  {
    id: 1,
    title: 'мок копченой колбасы 1',
    category: 1,
    description: 'Длинное название, что если будет в 2 строчки ',
    price: 735,
    photo: [
      'https://img.freepik.com/free-photo/fillet-meat-and-salami-on-wooden-board_23-2148599818.jpg?size=626&ext=jpg',
    ],
    weight: 0.9,
    amount: 1,
    units: 'шт',
  },
  {
    id: 2,
    title: 'мок копченой колбасы 2',
    category: 3,
    description: 'Длинное название, что если будет в 2 строчки ',
    price: 255,
    photo: [
      'https://img.freepik.com/free-photo/top-view-fresh-meat-with-knife-and-rosemary_23-2148439423.jpg?size=626&ext=jpg',
    ],
    weight: 0.3,
    amount: 0.3,
    units: 'кг',
  },
  {
    id: 3,
    title: 'мок копченой колбасы 3',
    category: 2,
    description: 'Длинное название, что если будет в 2 строчки ',
    price: 455,
    photo: [
      'https://img.freepik.com/free-photo/front-view-fresh-tasty-sausage-with-tomatoes-on-blue-meat-food-burger-sandwich-bun-color_179666-44071.jpg?size=626&ext=jpg',
    ],
    weight: 1,
    amount: 1,
    units: 'кг',
  },
  {
    id: 4,
    title: 'мок копченой ветчины 4',
    category: 1,
    description: 'Длинное название, что если будет в 2 строчки ',
    price: 65,
    photo: [
      'https://img.freepik.com/free-photo/fillet-meat-and-salami-on-wooden-board_23-2148599818.jpg?size=626&ext=jpg',
    ],
    weight: 0.5,
    amount: 1,
    units: 'шт',
  },
  {
    id: 5,
    title: 'мок копченой полендвицы 5',
    category: 2,
    description: 'Длинное название, что если будет в 2 строчки ',
    price: 5655,
    photo: [
      'https://img.freepik.com/free-photo/top-view-of-salami-arrangement-on-chopper_23-2148738913.jpg?size=626&ext=jpg',
    ],
    weight: 23,
    amount: 23,
    units: 'кг',
  },
  {
    id: 6,
    title: 'мок копченой креветки 6',
    category: 3,
    description: 'Длинное название, что если будет в 2 строчки ',
    price: 4955,
    photo: [
      'https://img.freepik.com/free-photo/top-view-assorted-sausages-with-rowan-and-mustard-in-board-cookware_176474-3285.jpg?size=626&ext=jpg',
    ],
  },
];
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      return [...action.payload];
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
