import { createReducer } from '@reduxjs/toolkit';   

export const dataReducer = createReducer({
    data : {}
}, {
    FETCH_DATA_SUCCESS: (state, action) => { 
        return {
            ...state,
            data: action.payload
        }  
    }, 
    FETCH_DATA_ERROR: (state, action) => { 
        return {
            ...state,
            data : null
        }  
    },
    default: (state, action) => {
        return state
    }
})