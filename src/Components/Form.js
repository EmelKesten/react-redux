import { useDispatch } from "react-redux/es/exports"
import { useState } from "react";
import { addUser } from "./User";
import { store } from "./store";


const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
        console.log(store.getState());
    }

  return (
    <div>
      <input type="text" placeholder='First name' onChange={handleChange}/>
      <input type="text" placeholder='Last name'/>
      <button onClick={() => dispatch({
          type: addUser.type,
          payload: {
              name: name
          }
      })}>SUBMIT</button>
    </div>
  )
}

export default Form
