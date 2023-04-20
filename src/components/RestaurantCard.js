
import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data?.data;
    return (
        <div className="card">
            <img src={ IMG_CDN_URL +cloudinaryImageId} alt="Food"/>
            <div className="content">
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <br />
                <div className="rating">
                    <span>⭐</span>
                    <span> {avgRating}</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;