import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  surname: 'surname',
  initialState,
  reducers: {
    addUserName: (state,action) => {
      state.name = action.payload
    },
    addUserSurname: (state,action) => {
      state.surname = action.payload
    }
  },
})


export const { addUserName, addUserSurname } = userSlice.actions

export default userSlice.reducer