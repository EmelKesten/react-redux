import { store } from "./store";


const showName = () => {
    const user = store.getState().user;
    if(user.name && user.surname){
        alert(`Hello ${user.name} ${user.surname}`)
    }
    else{
        alert('Please fill in the form and submit it')
    }
}


export default showName