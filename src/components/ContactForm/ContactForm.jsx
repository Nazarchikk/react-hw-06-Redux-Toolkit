import React from "react";
import { useDispatch } from 'react-redux';
import { addContacts } from "../../redux/contactsSlice"

export default function ContactForm() { 
    const dispatch = useDispatch();
    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addContacts(e.target.name.value,e.target.number.value))
    }
    return(
        <>
            <form onSubmit={formSubmit}>
            <label>Name</label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Enter your name'
            />
            <label>Number</label>
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder='Enter your number'
            />
            <button type="submit">add contact</button>
            </form>
        </>
    )
}