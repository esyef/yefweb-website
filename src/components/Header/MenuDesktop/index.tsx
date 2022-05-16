import Link from 'next/link';
import { MenuStyle, NavigationStyle, ItemsStyle } from './Menu.style';

const menuItems = [
  { path: '/', title: 'Home' },
  { path: '/proyectos', title: 'Proyectos' },
  { path: '/contacto', title: 'Contáctame' },
];

const MenuDesktop = () => {
  return (
    <MenuStyle>
      <NavigationStyle>
        {menuItems.map((item) => (
          <Link key={item.title} href={item.path} passHref>
            <ItemsStyle tabIndex={1}>{item.title}</ItemsStyle>
          </Link>
        ))}{' '}
      </NavigationStyle>
    </MenuStyle>
  );
};

export default MenuDesktop;
