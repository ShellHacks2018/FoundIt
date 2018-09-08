/*
setMapItems
------------------------------------- 
Sets state: mapItems = [ { ... } ]

Use:
data = [{
    “location”: {“latitude”: 1234.1234, “longitude”: 1234.1234},
    “title”: “some text”,	
    “image_url”:”http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg”,
    “rating”:0:1-5,
    “user_id”: 123456
}, ...]

itemA.setMapItems(data)

setUserMapItems 
-------------------------------------
Sets state: userMapItems = [ { ... } ]

use:
data = [{
    “location”: {“latitude”: 1234.1234, “longitude”: 1234.1234},
    “title”: “some text”,	
    “image_url”:”http://wallscollection.net/wp-content/uploads/2017/02/House-Images-Mobile-Compatible.jpg”,
    “rating”:0:1-5,
    “user_id”: 123456
}, ...]

itemA.setUserMapItems(data)
*/

const itemA = (dispatch) => {
  return {
    setMapItems: (data) => {
      dispatch({type: 'MAP_ITEMS', val: data})
    },
    setUserMapItems: (data) => {
      dispatch({type: 'USER_MAP_ITEMS', val: data})
    } 
  }
}

export default itemA;