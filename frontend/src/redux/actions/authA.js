/*
login:
------------------------------------- 
Sets state: auth => true
Sets localStorge: user, userId, token

Use:
data = {username: "", password: ""}
authA.login(data)

logout 
-------------------------------------
Sets state auth => false
Clears localStorage

use:
authA.logout()
*/
import axios from 'axios'

const authA = (dispatch) => {
  return {
    login: (data) => {
      url = 'localhost:3001/api/Users/login';
      axios.post(url, data).then(
        (res) => {
          localStorage.setItem('user', res.username)
          localStorage.setItem('token', res.id)
          localStorage.setItem('userId', res.userId)
          dispatch({type: 'LOGIN'} );
        }
      )
    },
    logout: () => {
      localStorage.clear()
      dispatch({type: 'LOGOUT'})
    } 
  }
}

export default authA;