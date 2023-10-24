import { createSlice } from '@reduxjs/toolkit';   

export const dataReducer = createSlice({
    name: 'data',
    initialState: {
        data: {}
    },

    reducers: {
        FETCH_DATA_SUCCESS: (state, action) => {
            console.log("now payload");
            console.log(action.payload)
            state.data = action.payload
            console.log("now state");
            console.log(state.data)
        },
        FETCH_DATA_ERROR: (state, action) => {
            state.data = null
        },
        default: (state, action) => {
            return state
        }
    }
})

export const { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } = dataReducer.actions

export default dataReducer.reducer