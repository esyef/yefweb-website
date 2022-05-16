import { FooterStyle, FooterTxtStyle, FooterSpanStyle } from './Footer.style';

const currentYear = new Date().getUTCFullYear();

const Footer = () => {
  return (
    <FooterStyle>
      <FooterTxtStyle>
        Creado con 💚 por{' '}
        <a
          href='https://www.linkedin.com/in/yeferson-olarte-roncancio-432867171/'
          target='_blank'
          rel='noreferrer'
        >
          Yefweb
        </a>
      </FooterTxtStyle>

      <FooterTxtStyle>{currentYear}</FooterTxtStyle>
    </FooterStyle>
  );
};

export default Footer;
