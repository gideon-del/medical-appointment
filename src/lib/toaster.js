import {toast} from 'react-toastify'
export const taoster = ({state, message}) => {
   toast[state](message, {
    position: "top-right",
autoClose: 2500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
   })
}