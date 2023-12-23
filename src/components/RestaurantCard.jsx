import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { name, cuisines, avgRating, sla } = resData.info;
    return (
      <div data-testid="resCard" className="p-4 m-4 w-[240px] bg-gray-50 rounded-lg hover:bg-gray-400 " >
        <img
          className="rounded-lg "
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

//HigherOrderComponent
  // export const withPromotedTag = (RestaurantCard) => {
  //   return (props) => {
  //     return (
  //       <div>
  //         <label>Promoted</label>
  //         <RestaurantCard {...props}/>
  //       </div>
  //     )
  //   }
  // }

  export default RestaurantCard;