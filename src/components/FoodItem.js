import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, description, cloudinaryImageId, price, message }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{message}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
