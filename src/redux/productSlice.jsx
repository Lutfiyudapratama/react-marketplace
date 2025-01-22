import { createSlice } from "@reduxjs/toolkit";
import { productOne, productThree, productTwo } from "../assets";

export const productSlice = createSlice({
    name: "cart",
    initialState: [
        {
            id: 1,
            products_name: 'Shoes Office',
            type: 'man shoes',
            description: 'this man shoes brooo',
            stock: 10,
            price: 250000,
            img_url: productOne
        },
        {
            id: 2,
            products_name: 'Shoes Sport',
            type: 'man shoes',
            description: 'this man shoes Sport brooo',
            stock: 10,
            price: 350000,
            img_url: productTwo
        },
        {
            id: 3,
            products_name: 'Shoes Boats',
            type: 'women shoes',
            description: 'this women shoes brooo',
            stock: 10,
            price: 2500000,
            img_url: productThree
        },
    ],
    reducers: {
        addToCartProduct: (state, payload) => {
            const findProduct = state.find(
                (product) => product.id === payload?.payload.id
            );

            if (findProduct.stock === 0) {
                alert("product habis")
                // let newProduct = { ...payload?.payload, stock: 1 };
                // state.push(newProduct);
                return;
            }

            if (findProduct) {
                state.map((product) => {
                    if (product.id === payload?.payload.id) {
                        product.stock -= 1;
                    }
                });
            }

        },
    }
})

export const { addToCartProduct } = productSlice.actions
export default productSlice.reducer