import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={handleDelete} />
          </li>
        ))
      ) : (
        <li>No contacts found.</li>
      )}
    </ul>
  );
}
