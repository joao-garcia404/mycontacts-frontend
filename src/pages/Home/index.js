import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

import {
  Container,
  InputSearchContainer,
  Card,
  Header,
  ListContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Modal danger />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Joao Vitor</strong>
              <small>Instagram</small>
            </div>

            <span>joao@email.com.br</span>
            <span>(11) 99911-2212</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={editIcon} alt="Edit contact" />
            </Link>

            <button type="button">
              <img src={trashIcon} alt="Delete contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
