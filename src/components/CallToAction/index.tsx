import Image from 'next/image';
import { ButtonsGroup } from 'src/pages/PagesComponents/Home/Hero/Hero.style';
import { ButtonDefault, ButtonIcon } from '../Buttons';
import { CtaStyle, CtaTxtStyle } from './CallToAction.style';
import linkedinIcon from '/public/linkedin.svg';

const CallToAction = () => {
  return (
    <CtaStyle>
      <CtaTxtStyle>
        ¿Deseas que te ayude en tu próximo proyecto? ¡Hagamos equipo!
      </CtaTxtStyle>

      <ButtonsGroup
        style={{
          alignItems: 'center',
        }}
      >
        <ButtonDefault href='/contacto' passHref primary>
          contáctame
        </ButtonDefault>

        <ButtonIcon href='https://www.linkedin.com/in/yeferson-olarte-roncancio-432867171/'>
          <Image src={linkedinIcon} alt='linkedin icon' />
        </ButtonIcon>
      </ButtonsGroup>
    </CtaStyle>
  );
};

export default CallToAction;
