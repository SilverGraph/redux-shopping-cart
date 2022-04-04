import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalItems: 0,
        totalCartPrice: 0,
        showCart:false
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.itemsList.find(item => item.id === newItem.id)

            if(existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
                state.totalCartPrice += existingItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
                state.totalItems++
                state.totalCartPrice += newItem.price
            }
        },
        removeFromCart(state, action) {
            const itemId = action.payload
            const existingItem = state.itemsList.find(item => item.id === itemId)

            const itemIndex = state.itemsList.indexOf(existingItem)
            existingItem.quantity--
            if(existingItem.quantity < 1) {
                state.itemsList.splice(itemIndex, 1)
            }
            existingItem.totalPrice -= existingItem.price
            state.totalCartPrice -= existingItem.price
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        },
    }
})

export const cartActions = cartSlice.actions

export default cartSlice