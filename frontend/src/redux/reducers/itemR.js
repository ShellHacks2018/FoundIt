const initState = {
	dummyMapItems : [
		{ 
			"location": {"lat": 25.756085, "lng": -80.376185},
			"title": "Temp A",	
			"image_url": "https://news.fiu.edu/wp-content/uploads/33361133815_4930957805_z-1-1.jpg",
			"rating":3,
			"user_id": 1,
			"userItem": false,
			"type": "other"
		},
		{ 
			"location": {"lat": 25.759794, "lng": -80.371109},
			"title": "Temp B",	
			"image_url": "https://news.fiu.edu/wp-content/uploads/33361133815_4930957805_z-1-1.jpg",
			"rating":4,
			"user_id": 2,
			"userItem": false,
			"type": "jewelery"
		},
		{ 
			"location": {"lat": 25.756854, "lng": -80.371467},
			"title": "Temp C",	
			"image_url": "https://news.fiu.edu/wp-content/uploads/33361133815_4930957805_z-1-1.jpg",
			"rating":5,
			"user_id": "5b94b280c29b72670f51cb0c",
			"userItem": false,
			"type": "book"
		}
	]
}

// case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
// 	const updatePlayerList = state.players.map((player, index) => {
// if(index === action.index){
// return {
// 	...player,
// 	 score: player.score + action.score
//  };
// }
// return player;
// });
// 	return {
// 			...state,
// 			players: updatePlayerList
// 	};
// }




  
  function itemR (state = initState, action){
    switch(action.type){
      case 'MAP_ITEMS':{
        const updatedItemsList = state.dummyMapItems.map((item) => {
							if(item.user_id === localStorage.getItem('userId')){
									return{ ...item, userItem: action.payload }
							}				
							return item 			
						})
        return {
					...state,
					dummyMapItems: updatedItemsList
				}
			}
      default:
        return state
    }
  }
  
  export default itemR;