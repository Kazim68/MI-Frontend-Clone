import axios from 'axios'

export const fetchData = async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:3000/data')
        const data = res.data
        console.log(data)
        
        console.log("jfu");
        dispatch({type: 'FETCH_DATA_SUCCESS', payload: data})
    }
    catch (err) {
        console.log("AAAA");
        dispatch({type: 'FETCH_DATA_ERROR', payload: err})
    }
}