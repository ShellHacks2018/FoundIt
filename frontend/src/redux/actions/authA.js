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
    register: (data) => {
      let url = "http://localhost:3001/api/Users";

      axios.post(url, data).then( (response) => {
      }).catch((err) => {console.log(err); })
    },
    login: (data) => {
      let url = 'http://localhost:3001/api/Users/login';
      axios.post(url, data).then(
        (res) => {
          console.log(res)
          localStorage.setItem('user', data.email)
          localStorage.setItem('token', res.data.id)
          localStorage.setItem('userId', res.data.userId)
          dispatch({type: 'LOGIN'} );
        }
      ).catch((err) => {console.log(err); })
    },
    logout: () => {
      localStorage.clear()
      dispatch({type: 'LOGOUT'})
    } 
  }
}

export default authA;