import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import hotelsData from "../../data/hotels.json";
import { RootState } from "../store";
import { Hotel, HotelsState } from '../../types/index';

const initialState: HotelsState = {
    allHotels: hotelsData,
    details: null,
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        fetchHotelDetails: (state, action: PayloadAction<string>) => {
            const hotelId = action.payload;
            const hotel = state.allHotels.find((hotel) => hotel.id === hotelId);
            if (hotel) {
                state.details = hotel;
            } else {
                state.details = null;
            }
        },
        addHotel: (state, action: PayloadAction<Hotel>) => {
            state.allHotels.push(action.payload);

        },
        updateHotel: (state, action: PayloadAction<Hotel>) => {
            const index = state.allHotels.findIndex(hotel => hotel.id === action.payload.id);
            if (index !== -1) {
                state.allHotels[index] = action.payload;
            }
        },
    },
});

export const { fetchHotelDetails, addHotel, updateHotel } = hotelsSlice.actions;
export const selectAllHotels = (state: RootState) => state.hotels.allHotels;
export const selectHotelDetails = (state: RootState) => state.hotels.details;

export default hotelsSlice.reducer;
