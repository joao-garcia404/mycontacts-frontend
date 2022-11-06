import arrowIcon from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

import {
  Card,
  Container,
  Header,
  ListContainer,
} from './styles';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>

        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={editIcon} alt="Edit contact" />
            </a>

            <button type="button">
              <img src={trashIcon} alt="Delete contact" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
