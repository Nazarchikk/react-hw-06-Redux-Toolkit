import { useDispatch } from "react-redux";
import {filterContacts} from "../../redux/contactsSlice";

export default function Filter(){
    const dispatch = useDispatch();
    const contactsFilter = (e) => {
        dispatch(filterContacts(e.target.value));
    }
    return(
        <>
                <p>Find contacts by name</p>
                <input type="text" 
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder='Enter your name'
                onInput={contactsFilter}
                />
        </>
    )
}