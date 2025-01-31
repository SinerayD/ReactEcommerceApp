import { createSlice } from '@reduxjs/toolkit';


const getFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getFromStorage(),
};

const addToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id)
            if (findProduct) {
                const extractProducts = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractProducts, findProduct];
                addToStorage(state.products);
            }

            else {
                state.products = [...state.products, action.payload];
                addToStorage(state.products);
            }
        }

    },
    extraReducers: (builder) => {
        builder

    },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;