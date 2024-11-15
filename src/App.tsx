import { useEffect, useState } from 'react';
import { ContactForm } from '@features/ContactForm';
import { ContactList } from '@features/ContactList';
import { SearchBox } from '@features/SearchBox';
import contactData from '@shared/data/contactData.json';
import { nanoid } from 'nanoid';

interface Contact {
  id: string;
  name: string;
  number: string;
}

function App() {
  const [userContacts, setUserContacts] = useState<Contact[]>(() => {
    const savedContacts = window.localStorage.getItem('contactUser');
    return savedContacts ? JSON.parse(savedContacts) : contactData;
  });

  const [searchUser, setSearchUser] = useState<string>('');

  const filteredContacts = userContacts.filter((item) =>
    item.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem('contactUser', JSON.stringify(userContacts));
  }, [userContacts]);

  const addContact = (values: Omit<Contact, 'id'>) => {
    setUserContacts((prev) => [...prev, { id: nanoid(), ...values }]);
  };

  const handleDeleteContactUser = (id: string) => {
    setUserContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="pageTitle">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchUser={searchUser} setSearchUser={setSearchUser} />
      <ContactList
        userContacts={filteredContacts}
        handleDeleteContactUser={handleDeleteContactUser}
      />
    </>
  );
}

export default App;