import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);

    if(resInfo === null ) return <Shimmer />;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const itemCategories = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(el => el.card.card?.["@type"] === 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return  (
        <div className="text-center">
             <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2> //Accordians */}
            {itemCategories.map((el,index) => <RestaurantCategory key={el.card.card.title} data = {el.card.card} showItems={showIndex === index ? true : false} setShowIndex={()=> setShowIndex(index)} />)}
        </div>
    )
}

export default RestaurantMenu;