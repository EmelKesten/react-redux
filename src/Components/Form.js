import { useDispatch, useSelector } from "react-redux/es/exports"
import { useState } from "react";
import User, { addUserName, addUserSurname, userSlice } from "./User";
import { store } from "./store";


const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [localUser, setLocalUser] = useState({})
  const dispatch = useDispatch()
  const submitUser = () => {
    dispatch(addUserName(...[name]))
    dispatch(addUserSurname(...[surname]))
    setLocalUser(store.getState().user)
  }

  const submiter = (event) => {
    event.preventDefault()
    submitUser()
  }

  return (
    <div>
      {localUser.name && localUser.surname ? <h1>Hi, {localUser.name} {localUser.surname}</h1> : <form onSubmit={submiter}>
        <input type="text" placeholder='First name' onChange={(event) => {
          setName(event.target.value)
        }} />
        <input type="text" placeholder='Last name' onChange={(event) => {
          setSurname(event.target.value)
        }} />
        <input type="submit" value="Submit" />
      </form>}
      
    </div>
  )
}

export default Form
