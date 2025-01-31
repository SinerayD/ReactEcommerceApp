import { createSlice } from '@reduxjs/toolkit';

const getFromStorage = () => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
};

const initialState = {
    products: getFromStorage(),
    drawer: false,
    totalAmount: 0
};

const addToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.count += action.payload.count;
            } else {
                state.products.push({ ...action.payload, count: 1 });
            }
            addToStorage(state.products);
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        basketTotalAmount: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        }
    }
});

export const { addToBasket, setDrawer, basketTotalAmount } = basketSlice.actions;
export default basketSlice.reducer;
