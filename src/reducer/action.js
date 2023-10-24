import axios from 'axios'
import {FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './dataReducer'

export const fetchData = async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:3000/data')
        const data = res.data[0].data
        console.log(data)
        
        console.log("jfu");
        //dispatch({type: 'FETCH_DATA_SUCCESS', payload: data})
        dispatch(FETCH_DATA_SUCCESS(data))
    }
    catch (err) {
        console.log("AAAA");
        //dispatch({type: 'FETCH_DATA_ERROR', payload: err})
        dispatch(FETCH_DATA_ERROR(err))
    }
}