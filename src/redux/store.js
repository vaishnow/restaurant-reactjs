import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from '../redux/restaurantSlice'



const store = configureStore({
	reducer: {
		restaurantSlice
	}
})

export default store