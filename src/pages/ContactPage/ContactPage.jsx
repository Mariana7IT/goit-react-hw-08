import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactPage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <div className={css.div}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
