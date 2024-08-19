import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaPhone, FaUser } from "react-icons/fa";
import s from "/src/components/Contact/Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.contactItem}>
      <div className={s.contactDetails}>
        <span className={s.contactSpan}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={s.contactSpan}>
          <FaPhone />
          <p>{contact.number}</p>
        </span>
      </div>
      <button onClick={handleDelete} className={s.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
