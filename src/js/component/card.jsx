import React, {useContext} from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext"
export const Card = () => {
    const {store,actions} = useContext(Context)
    console.log(store.data)
	return(
        <>
        {store.data.results && store.data.results.map((item, index) => {
          return (
        <div className="card" style={{width: "18rem"}}>
  <img src={store.img + item.uid + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          )
        })}
        </>
        )
};
