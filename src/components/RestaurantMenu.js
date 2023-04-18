import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const urlParam = useParams();
    const [restrauntDetails, setRestrauntDetails] = useState({});

    useEffect(() => {
        getRestrauntMenuDeatiails();
    }, []);

    async function getRestrauntMenuDeatiails() {
        const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId="+urlParam.id);
        const menuDetails = await res.json();
        console.log("menuDetails.data ", menuDetails?.data?.cards[0]?.card?.card?.info);
        setRestrauntDetails(menuDetails?.data?.cards[0]?.card?.card?.info);
    }
    return !restrauntDetails ? (<Shimmer />) : (
        <div className="container">
            <img className="detail_mg" src={IMG_CDN_URL + restrauntDetails?.cloudinaryImageId} alt="restraunt" height={200} />
            <h1>Restaurant id: {restrauntDetails.name}</h1> 
            <p>Area: {restrauntDetails.areaName}</p>
            <p>City: {restrauntDetails.city}</p>
            <p>Average Rating: {restrauntDetails.avgRating}</p>

            {/* <h4>Other Menu from {restrauntDetails.name}</h4> */}
            {/* This will Iterate a list of objects */}
            {/* <p>{
                Object.values(restrauntDetails.menu.items).map((item) => {
                    <li key={item.id}>{item.name}</li>
                })
            }</p> */}
        </div>

    )
}

export default RestaurantMenu