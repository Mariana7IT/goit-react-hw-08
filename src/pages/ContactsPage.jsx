import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../redux/contacts/operations";
import { changeFilter, selectNameFilter } from "../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../redux/contacts/slice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };
  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilter={handleFilterChange} />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList onDelete={handleDeleteContact} />
    </div>
  );
};

export default ContactsPage;
