/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegEye, FaRegStar } from 'react-icons/fa';

const NewsCard = ({ singleNews }) => {
    return (
        <div className=" mx-auto bg-white shadow-lg rounded overflow-hidden space-y-2">
            <div className="flex items-center px-4 py-3 bg-[rgb(243,243,243)]
            ">
                {/* author image */}
                <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={singleNews.author.img}
                    alt={singleNews.author.name}
                />
                <div className="ml-3">
                    <p className="text-gray-900 font-semibold">{singleNews.author.name}</p>
                    <p className="text-gray-600 text-sm">
                        {singleNews.author.published_date}
                    </p>
                </div>
            </div>
            <h2 className="font-bold text-xl text-gray-800 mb-2">{singleNews.title}</h2>
            {/* news banner image */}
            <img
                className="w-full h-[300px] object-cover"
                src={singleNews.thumbnail_url}
                alt={singleNews.title}
            />

            <div className="p-4">

                <p className="text-gray-600 text-sm mb-4">
                    {singleNews.details.substring(0, 300)}...
                </p>
                <button className="text-blue-500 hover:underline">Read More</button>
            </div>
            <div className="border-b-2"></div>
            <div className="px-4 py-2  flex justify-between items-center">
                <div className="flex items-center text-yellow-500">
                    <FaRegStar className="mr-1" />
                    <span className="font-semibold">{singleNews.rating.number}</span>
                    <span className="text-gray-600 ml-1">{singleNews.rating.badge}</span>
                </div>

                <div className="flex items-center text-gray-600">
                    <FaRegEye className="mr-1" />
                    <span>{singleNews.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
