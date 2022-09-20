import { useDispatch, useSelector } from "react-redux/es/exports"
import { useState } from "react";
import User, { addUser, userSlice } from "./User";
import { store } from "./store";


const Form = () => {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch()
    const submitUser = () => {
      dispatch(addUser(...username))
        console.log(store.getState())
    }

    const submiter = (event) => {
      event.preventDefault()
      submitUser()
    }

  return (
    <div>
      <form onSubmit={submiter}>
      <input type="text" placeholder='First name' onChange={(event) => {
        setUsername(event.target.value)
      }}/>
      <input type="text" placeholder='Last name'/>
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
