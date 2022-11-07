import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="MyContacts logo" />
    </Container>
  );
}
