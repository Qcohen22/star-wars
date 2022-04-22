import React, {useContext} from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { Context } from "../store/appContext"
export const Card = () => {
    const {store,actions} = useContext(Context)
    console.log(store)
	return(
        <>
        {store.data.results && store.data.results.map((item, index) => {
          return (
        <div className="card" style={{width: "18rem"}}>
  <img src={store.img + item.uid + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={"/details/"+item.uid} >
      <button className="btn btn-primary"  onClick={() => actions.singleData(item.uid)}>
      Go somewhere

      </button>

     </Link>
     <button onClick={() => actions.thirdData(item)} type="button" class="btn btn-warning">♥</button>
  </div>
</div>
          )
        })}
        </>
        )
};
