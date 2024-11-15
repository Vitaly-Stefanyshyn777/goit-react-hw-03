import s from './Contact.module.css';


interface ContactProps {
  user: {
    id: string;
    name: string;
    number: string;
  };
  handleDeleteContactUser: (id: string) => void;
}

const Contact: React.FC<ContactProps> = ({ user, handleDeleteContactUser }) => {
  return (
    <>
      <div>
        <p className={s.contactText}>{user.name}</p>
        <p className={s.contactText}>{user.number}</p>
      </div>
      <button
        className={s.contactBtn}
        type="button"
        onClick={() => handleDeleteContactUser(user.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;