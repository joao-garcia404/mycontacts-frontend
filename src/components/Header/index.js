import logoImg from '../../assets/images/logo.svg';

import { Container, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="MyContacts logo" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
    </Container>
  );
}
