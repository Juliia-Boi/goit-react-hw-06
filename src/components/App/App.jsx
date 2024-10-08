import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "../../redux/contactsSlice";
import { setFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { nanoid } from "nanoid";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const [newContact, setNewContact] = useState({ name: "", number: "" });

  const handleAddContact = (contact) => {
    const existingContact = contacts.find(
      (c) => c.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existingContact) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ ...contact, id: nanoid() }));
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
      <SearchBox
        value={filter}
        onFilter={(value) => dispatch(setFilter(value))}
      />{" "}
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
