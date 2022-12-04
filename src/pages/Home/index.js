import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

import {
  Container,
  InputSearchContainer,
  Card,
  Header,
  ListContainer,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/contacts')
      .then(async (response) => {
        const data = await response.json();

        setContacts(data);
      });
  }, []);

  console.log(contacts);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {' '}
          {contacts.length === 1 ? 'contato' : 'contatos'}
        </strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </header>

        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>

                {contact.category_name && (
                  <small>{contact?.category_name}</small>
                )}
              </div>

              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={editIcon} alt="Edit contact" />
              </Link>

              <button type="button">
                <img src={trashIcon} alt="Delete contact" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
