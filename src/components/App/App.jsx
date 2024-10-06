import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "../../redux/contactsSlice";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState("");

  const handleAddContact = (newContact) => {
    dispatch(addContact({ ...newContact, id: Date.now().toString() }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
