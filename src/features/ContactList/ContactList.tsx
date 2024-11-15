import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

// Інтерфейс для опису властивостей контакту
interface ContactProps {
  id: string;
  name: string;
  number: string;
}

// Інтерфейс для властивостей компонента ContactList
interface ContactListProps {
  userContacts: ContactProps[];
  handleDeleteContactUser: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ userContacts, handleDeleteContactUser }) => {
  const createContact = userContacts.map(user => (
    <li className={s.contactItem} key={user.id}>
      <Contact user={user} handleDeleteContactUser={handleDeleteContactUser} />
    </li>
  ));

  return (
    <div>
      <ul className={s.contactList}>{createContact}</ul>
    </div>
  );
};

export default ContactList;