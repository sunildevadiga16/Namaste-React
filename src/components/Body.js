import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterFn(searchTxt, filteredRestaurants) {
    const filterData = filteredRestaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    return filterData;
};

const Body = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // useEffect(
    //     () => { console.log("This is useEffect") }
    //     , [filteredRestaurants]
    // );

    useEffect(
        () => {
            // API call
            getRestaurants();
        },
        []
    );

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    if (!allRestaurants) return null; // early return (component will not render)

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="body">
                <input type="search" name="search" id="search" placeholder="Search..."
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }} />
                <button onClick={() => {
                    const data = filterFn(searchTxt, allRestaurants);
                    (data?.length === 0)
                        ?
                        (
                            document.getElementById("err").innerHTML = "<h1>No Restaurants Found. Search Again 😥</h1>",
                            setFilteredRestaurants(data)
                        )
                        :
                        (
                            document.getElementById("err").innerHTML = "",
                            setFilteredRestaurants(data)
                        )
                        ;
                }}>Search</button>

                <span id="err"></span>
            </div>

            <div className="container card-parent" id="card-parent">
                {
                    filteredRestaurants?.map((restaurant) => {
                        return <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
                            <RestaurantCard {...restaurant?.data} />
                        </Link>
                    })
                }
            </div>

        </>

    );
};
export default Body;