import Image from 'next/image';
import Link from 'next/link';
import MenuDesktop from './MenuDesktop';
import { HeaderStyle } from './Header.styled';
// import MenuMobile from './MenuMobile';
import Logo from '/public/logo.svg';

const Header = () => {
  return (
    <HeaderStyle>
      <Link href='/' passHref>
        <a>
          <Image src={Logo} alt='Yefweb logo' height={60} width={60} priority />
        </a>
      </Link>
      {/* <MenuMobile /> */}
      <MenuDesktop />
    </HeaderStyle>
  );
};

export default Header;
