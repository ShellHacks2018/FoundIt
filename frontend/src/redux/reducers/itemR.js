let dummyMapItems = 
[
   { 
        "location": {"latitude": 25.756085, "longitude": -80.376185},
        "title": "Temp A",	
        "image_url": "http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg",
        "rating":3,
        "user_id": 1 
    },
    { 
        "location": {"latitude": 25.759794, "longitude": -80.371109},
        "title": "Temp B",	
        "image_url": "http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg",
        "rating":4,
        "user_id": 2 
    },
    { 
        "location": {"latitude": 25.756854, "longitude": -80.371467},
        "title": "Temp C",	
        "image_url": "http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg",
        "rating":5,
        "user_id": 3 
    }
]

let dummyUserMapItems = 
[
   { 
        "location": {"latitude": 25.762619, "longitude": -80.373371},
        "title": "User A",	
        "image_url": "http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg",
        "rating":3,
        "user_id": 1 
    },
    { 
        "location": {"latitude": 25.763570, "longitude": -80.374882},
        "title": "User B",	
        "image_url": "http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg",
        "rating":4,
        "user_id": 2 
    },
    { 
        "location": {"latitude": 25.763328, "longitude": -80.371467},
        "title": "User C",	
        "image_url": "http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg",
        "rating":5,
        "user_id": 3 
    }
]

const initState = {
    mapItems: dummyMapItems,
    userMapItems: dummyUserMapItems
  }
  
  function itemR (state = initState, action){
    switch(action.type){
      case 'MAP_ITEMS':
        return { ...state, mapItems:action.val }
      case 'USER_MAP_ITEMS':
        return { ...state, userMapItems:action.val }
      default:
        return state
    }
  }
  
  export default itemR;