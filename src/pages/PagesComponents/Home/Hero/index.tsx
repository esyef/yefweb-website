import Image from 'next/image';
import githubIcon from '/public/github.svg';
import linkedinIcon from '/public/linkedin.svg';
import { HeroStyle, TitleStyle, TextAccent, ButtonsGroup } from './Hero.style';
import { ButtonDefault, ButtonIcon } from 'src/components/Buttons';

const Hero = () => {
  return (
    <HeroStyle>
      <TitleStyle>
        Hola soy <TextAccent>Yeferson,</TextAccent> un{' '}
        <TextAccent>&lt;Frontend Developer &#47;&gt;</TextAccent>
      </TitleStyle>

      <ButtonsGroup>
        <ButtonDefault href='/contacto' passHref primary>
          contáctame
        </ButtonDefault>

        <ButtonDefault href='#sobremi' passHref>
          sobre mí
        </ButtonDefault>
      </ButtonsGroup>

      <ButtonsGroup>
        <ButtonIcon href='https://github.com/yeffweb' target='_blank'>
          <Image src={githubIcon} alt='github icon' />
        </ButtonIcon>
        <ButtonIcon href='https://www.linkedin.com/in/yeferson-olarte-roncancio-432867171/'>
          <Image src={linkedinIcon} alt='linkedin icon' />
        </ButtonIcon>
      </ButtonsGroup>
    </HeroStyle>
  );
};

export default Hero;
