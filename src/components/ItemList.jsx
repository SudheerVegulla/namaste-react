import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) => {
    const dispatch = useDispatch();
    // console.log(items);
    const handleAddItem = (el) => {
       dispatch(addItem(el))
    }
    return (
        <div>  
            {items.map(el => <div data-testid = "foodItems" className="border-b-2 border-solid border-gray-600 p-2 m-2 flex justify-between" key={el.card.info.id}>
                
                <div className="w-10/12">
                <div className="mb-2 text-left">
                    <div className=" font-semibold italic">{el.card.info.name}</div>
                    <div >₹{el.card.info.price/100}</div>
                </div>
                <p className="text-left text-xs">{el.card.info.description}</p>
                </div>
                <div className="w-3/12 mr-4">
                <img  src={ CDN_URL + el.card.info.imageId}/>
                <button className="p-2 m-2 bg-slate-400 rounded-lg" onClick={() => handleAddItem(el)}>Add+</button>
                </div>
            </div>)}
        </div>
    )
}

export default ItemList;