import React, {useContext} from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext"

export const Newcard = () => {
    const {store,actions} = useContext(Context)
    console.log(store)
    return(
      <>
      {store.moredata.result ? 
        <div className="card mb-3"  style={{width: "1000px", margin:"0 auto"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={store.img + store.moredata.result.uid + ".jpg"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div className="d-flex d-flex justify-content-evenly" >
        <div>
          <h4>eye-color</h4>
          <p>{store.moredata.result.properties.eye_color}</p>
        </div>
        <div>
          <h4>hair_color</h4>
          <p>{store.moredata.result.properties.hair_color}</p>
        </div>
        <div>
          <h4>Gender</h4>
          <p>{store.moredata.result.properties.gender}</p>
        </div>
        <div>
          <h4>year</h4>
          <p>{store.moredata.result.properties.birth_year}</p>
        </div>
        <div>
          <h4>height</h4>
          <p>{store.moredata.result.properties.height}</p>
        </div>
  </div>
</div>
:
<h1>
  loading
</h1>
}
</>
    )
}