const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {		
			img: "https://starwars-visualguide.com/assets/img/characters/",
			data: {},
			moredata: {},
			lessdata: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
					.then(response => response.json())
					.then(result => setStore({data:result}))
					.catch(error => console.log('error', error));
			},
			singleData: (num) => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  console.log(num)
				  
				  fetch(`https://www.swapi.tech/api/people/${num}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({moredata:result}))
					.catch(error => console.log('error', error));
			},
			thirdData: (item) => {
				const store = getStore()
				setStore({lessdata:[...store.lessdata, item]})

			},
			Delete: (index) => {
				const store = getStore()
				const del = store.lessdata.filter((result,i) => index !== i)
				setStore({lessdata:del})
			}

		}
	};
};

export default getState;
