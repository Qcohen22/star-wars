import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
export const Navbar = () => {
	const {store,actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul  className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
	  {store.lessdata.map((item, index) => {
		  return(
    <><li className="dropdown-item" >
		<Link to={"/details/"+item.uid} >
      <button className="btn btn-primary"  onClick={() => actions.singleData(item.uid)}>
      {item.name}

      </button>

     </Link>
	 <button onClick={() => actions.Delete(index) } className="btn btn-danger">x</button>
		</li></>
		  )
	  })}
  </ul>
	
</div>
		</nav>
	);
};
