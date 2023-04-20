import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    // const [restaurant, setRestrauntDetails] = useState({});

    // useEffect(() => {
    //     getRestrauntMenuDeatiails();
    // }, []);

    // async function getRestrauntMenuDeatiails() {
    //     const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId="+urlParam.id);
    //     const menuDetails = await res.json();
    //     console.log("menuDetails.data ", menuDetails?.data?.cards[0]?.card?.card?.info);
    //     setRestrauntDetails(menuDetails?.data?.cards[0]?.card?.card?.info);
    // }

    const restaurant = useRestaurant(params.id);
    console.log("restaurant ", restaurant);
    

    return !restaurant ? (<Shimmer />) : (
        <div className="container">
            <img className="detail_mg" src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId} alt="restraunt" height={200} />
            <h1>Restaurant id: {restaurant?.cards[0]?.card?.card?.info.name}</h1>
            <p>Area: {restaurant?.cards[0]?.card?.card?.info?.areaName}</p>
            <p>City: {restaurant?.cards[0]?.card?.card?.info?.city}</p>
            <p>Average Rating: {restaurant?.cards[0]?.card?.card?.info?.avgRating}</p>

            {/* <h4>Other Menu from {restaurant.name}</h4> */}
            {/* This will Iterate a list of objects */}
            {/* <p>{
                Object.values(restaurant.menu.items).map((item) => {
                    <li key={item.id}>{item.name}</li>
                })
            }</p> */}
        </div>

    )
}

export default RestaurantMenu