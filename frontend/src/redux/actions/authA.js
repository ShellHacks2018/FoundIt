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
      let data = {
        "username":this.props.email,
        "email": this.props.email,
        "password": this.props.password
      };
  
      let url = "http://localhost:3001/api/Users";

      axios.post(url, data).then( (response) => {
      }).fail((err) => {console.log(err); })
    },
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