
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data?.data;
    return (
        <div className="card">
            <img src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                +
                cloudinaryImageId
            } alt="Food" />
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