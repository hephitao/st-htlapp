import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BookingForm from "./BookingForm";
import { RoomListProps } from '../types/index';


const RoomList: React.FC<RoomListProps> = ({ hotelId }) => {
    const rooms = useSelector((state: RootState) =>
        state.hotels.details?.rooms
            .map((roomId) => state.rooms.data.find((room) => room.id === roomId))
            .filter((room) => room && room.status === 'active')
    );

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4">Habitaciónes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {rooms?.map((room) => room && (
                    <div
                        key={room.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={room.imgurl}
                            alt={room.name}
                            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="p-6">
                            <h4 className="text-xl font-semibold mb-2">{room.name}</h4>
                            <p className="text-gray-700 mb-4">{room.description}</p>
                            <p className="text-gray-700 font-semibold mb-4">
                                Precio: ${room.price + (room.price * (room.tax/100))} COP x Noche
                            </p>
                            <p className="text-gray-700 mb-4">Ubicación: {room.location}</p>
                            <BookingForm hotelId={hotelId} roomId={room.id.toString()} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomList;