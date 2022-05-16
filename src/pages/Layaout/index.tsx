import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';
import Header from 'src/components/Header';

type PROPS = {
  children: React.ReactNode;
};

const LayaoutStyle = styled.div`
  background-image: ${Theme.background.primary};
  min-height: 100vh;
  color: ${Theme.colors.white};
  font-family: ${Theme.fontFamily.sans};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  grid-column: span 4;

  @media (min-width: 40rem) {
    width: 90%;
  }
`;

const HeaderLayaout = styled.div`
  box-shadow: ${Theme.shadows.standar};
  padding-block: ${Theme.spacing.small};
  margin-bottom: ${Theme.spacing.medium};

  @media (min-width: 40rem) {
    margin-bottom: ${Theme.spacing.large};
  }

  grid-column: span 4;
`;
const FooterLayaout = styled.div`
  background: ${Theme.colors.neutral};
  border-top: 1px solid ${Theme.colors.neutral};

  grid-column: span 4;
`;

const Layaout = ({ children }: PROPS) => {
  return (
    <>
      <LayaoutStyle>
        <HeaderLayaout>
          <Wrapper>
            <Header />
          </Wrapper>
        </HeaderLayaout>
        <Wrapper>{children}</Wrapper>
        <FooterLayaout>
          <Wrapper>
            <Footer />
          </Wrapper>
        </FooterLayaout>
      </LayaoutStyle>
    </>
  );
};

export default Layaout;
