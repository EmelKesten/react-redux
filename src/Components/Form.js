import { useDispatch } from "react-redux/es/exports"
import { useState } from "react";
import { addUserName, addUserSurname } from "./User";


const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const dispatch = useDispatch()
  const submitUser = () => {
    dispatch(addUserName(...[name]))
    dispatch(addUserSurname(...[surname]))
  }

  const submiter = (event) => {
    event.preventDefault()
    submitUser()
  }

  return (
    <div>
      <form onSubmit={submiter}>
        <input type="text" placeholder='First name' onChange={(event) => {
          setName(event.target.value)
        }} />
        <input type="text" placeholder='Last name' onChange={(event) => {
          setSurname(event.target.value)
        }} />
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default Form
