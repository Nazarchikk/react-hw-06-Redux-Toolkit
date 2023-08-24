import { createSlice, nanoid } from "@reduxjs/toolkit";
import {Notify} from 'notiflix';

const contactsInitialState = {
  contacts:[
    {id: 0, name: 'Rosie Simpson', number: '459-12-56'},
    {id: 1, name: 'Hermione Kline', number: '443-89-12'},
    {id: 2, name: 'Eden Clements', number: '645-17-79'},
    {id: 3, name: 'Annie Copeland', number: '227-91-26'},
  ],
  filterdContacts:[
    {id: 0, name: 'Rosie Simpson', number: '459-12-56'},
    {id: 1, name: 'Hermione Kline', number: '443-89-12'},
    {id: 2, name: 'Eden Clements', number: '645-17-79'},
    {id: 3, name: 'Annie Copeland', number: '227-91-26'},
  ],
}


const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        const existingName = state.filterdContacts.some(
          contact => contact.name === action.payload.name
        );
        const existingNumber = state.filterdContacts.some(
          contact => contact.number === action.payload.number
        );
        if (existingName || existingNumber) {
          Notify.failure('Contact already exists');
        } else {
          state.contacts.unshift(action.payload);
          state.filterdContacts.unshift(action.payload);
        }

      },
      prepare(name,number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      const index1 = state.filterdContacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
      state.filterdContacts.splice(index1, 1);
    },
    filterContacts(state, action) {
      const filtersByName = state.filterdContacts.filter(contact => contact.name.toLowerCase().includes(action.payload))
      if (action.payload.length > 0) {
        state.filterdContacts = filtersByName;
      } else {
        state.filterdContacts = [...state.contacts];
      }
    },
  },
});

export const { addContacts, deleteContacts, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

