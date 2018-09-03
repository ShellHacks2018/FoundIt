const initState = {
  auth: false
}

function authR (state = initState, action){
  switch(action.type){
    case 'LOGIN':
      return { ...state, auth:true }
    case 'LOGOUT':
      return { ...state, auth:false }
    default:
      return state
  }
}

export default authR;