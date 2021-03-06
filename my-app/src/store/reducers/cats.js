import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'

// First, create the thunk
export const fetchCats = createAsyncThunk(
  'cats/fetchCatsStatus',
  async (statusCode) => {
    const response = await fetch("https://httpstat.us/" + statusCode + "?sleep=5000");
    return response.status;
  }
)

// Then, handle actions in your reducers:
const catSlice = createSlice({
  name: 'cats',
  initialState: { cats: '', statusCode: '', loading: false },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setStatusCode(state, action) {
      state.statusCode = action.payload
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchCats.pending]: (state) => {
      state.loading = true
    },
    [fetchCats.fulfilled]: (state, action) => {
      console.log(action, "action")
      // Add user to the state array
      state.cats = "https://http.cat/" + action.payload
      state.loading = false
    }
  }
})

export const { setStatusCode } = catSlice.actions
export default catSlice.reducer

// Later, dispatch the thunk as needed in the app
// dispatch(fetchCats())