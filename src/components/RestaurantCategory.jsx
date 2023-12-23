import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,setShowIndex,showItems}) => {
    // console.log(data)
    // const [showList,setShowList] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div> 
            <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4 rounded-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title + " (" + data.itemCards.length + ") "}</span>
                <span >🔽</span>
                </div>
            {showItems && <ItemList items = {data.itemCards} />} 
            </div>        
        </div>
        
    )
}
export default RestaurantCategory;
