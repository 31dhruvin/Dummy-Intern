import {FETCH_INFO} from './Type';
import Axios from 'axios'

const Refresh = id => dispatch =>{
    Axios.get(`https://api.unsplash.com/photos/?client_id=0od6zasfTyVfLNn4Me0AITWpAhG0zATnXX0MV9FAuvs&i=${id}`)
        .then(res=>dispatch({
            type:FETCH_INFO,
            payload:res.data
        }))
        .catch(err=>{
            console.log(err)
        })
    }
export default Refresh
    