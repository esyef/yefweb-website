import Image from 'next/image';
import Avatar from 'public/avatar.jpg';
import { ButtonDefault } from 'src/components/Buttons';
import { ButtonsGroup } from '../Hero/Hero.style';
import {
  AboutmeStyle,
  DescriptionStyle,
  DescriptionTxtStyle,
} from './Aboutme.style';

const Aboutme = () => {
  return (
    <AboutmeStyle id='sobremi'>
      <div>
        <Image
          src={Avatar}
          height={300}
          width={300}
          style={{ borderRadius: '30px' }}
        />
      </div>
      <DescriptionStyle>
        <DescriptionTxtStyle>
          Soy Yeferson desarrollador web frontend y vivo en la ciudad de Bogotá,
          Colombia. Me gusta crear sitios web modernos. Trabajo con ReactJs y
          CSS para construir experiencias eficaces.
        </DescriptionTxtStyle>

        <ButtonsGroup>
          <ButtonDefault primary href='/proyectos'>
            ver proyectos
          </ButtonDefault>

          <ButtonDefault href='/proyectos'>Descargar CV</ButtonDefault>
        </ButtonsGroup>
      </DescriptionStyle>
    </AboutmeStyle>
  );
};

export default Aboutme;
