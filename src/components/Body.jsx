import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [resDataList,setResDataList] = useState(null);
  const [filterRestaurant,setFilterRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  const {loggedInUser , setUserName}=useContext(UserContext)


  useEffect(() => {
    fetchData();
  },[]);

  // const RestaurantCardPromoted = withPromotedTag(RestaurantCard); // HigherOrderComponent

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4385819&lng=78.3342549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setResDataList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks like you're Offline.Please check your connection</h1>;

  if(resDataList === null){
    return <Shimmer/>
  }
    return (
      <div className="body">
        <div className="flex">
          <div className="search p-4 m-4">
            <input className= "border border-solid border-black" data-testid = "searchInput" type = "text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button className="px-4 bg-green-400 m-4 rounded-lg" onClick={() => {
                const filteredRestaurant = resDataList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterRestaurant(filteredRestaurant);
                setSearchText("");
            }}>Search</button>
          </div>
          <div className="search p-4 m-4">
          <button className= "px-2 bg-red-300 m-4 rounded-lg " onClick = {() => {
            let filteredData = resDataList.filter((el) => el.info.avgRating > 4);
            setFilterRestaurant(filteredData);
          }}>Top Rated Restaurants</button>
          </div>
          {/* for updating context value inside child component */}
          <div className="search p-4 m-2"> 
            <label>UserName : </label>
          <input className = "m-4 border border-black p-1 rounded-lg "type="text" value = {loggedInUser} onChange = {(e) => {setUserName(e.target.value)}}/>
          </div>
          
        </div>
        <div className="flex flex-wrap">
          { filterRestaurant && filterRestaurant.map((el) => (
            <Link key={el.info.id} to = {"/restaurant/" + el.info.id} >
              {/* {el.info.promoted ? <RestaurantCardPromoted resData={el}/> : <RestaurantCard  resData={el} />} //Higher Order component */}
              <RestaurantCard  resData={el} />
              </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;