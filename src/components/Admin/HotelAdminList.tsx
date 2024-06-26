import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { Hotel } from '../../types/index';


const HotelAdminList: React.FC = () => {
    const hotels = useSelector((state: RootState) => state.hotels.allHotels);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Administrar Hoteles</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ciudad</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {hotels.map((hotel: Hotel) => (
                        <tr key={hotel.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{hotel.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{hotel.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{hotel.city}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{hotel.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                <Link
                                    to={`/hotel-admin/hotel-list/${hotel.id}`}
                                    className="bg-rose-400 text-white py-2 px-4 rounded-md hover:bg-rose-500 transition-colors"
                                >
                                    Editar Hotel
                                </Link>
                                <Link
                                    to={`/hotel-admin/hotel-list/${hotel.id}/rooms`}
                                    className="bg-rose-400 text-white py-2 px-4 rounded-md hover:bg-rose-500 transition-colors"
                                >
                                    Editar Habitaciones
                                </Link>
                                <Link
                                    to={`/hotel-admin/hotel-list/${hotel.id}/add-room`}
                                    className="bg-rose-400 text-white py-2 px-4 rounded-md hover:bg-rose-500 transition-colors"
                                >
                                    Agregar Habitaciones
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HotelAdminList;
