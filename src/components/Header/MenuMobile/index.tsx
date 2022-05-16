// import { useState, useEffect, useRef, ReactElement } from 'react';
// import styles from '../menu.module.css';
// import NextLink from 'next/link';
// import { useRouter } from 'next/router';

// const menuItems = [
//   { path: '/', title: 'Home' },
//   { path: '/proyectos', title: 'Proyectos' },
//   { path: '/contacto', title: 'Contáctame' },
// ];

// const MenuMobile = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handler = () => setIsOpen(!isOpen);

//   const router = useRouter();
//   const elRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const clickedOutside = (e: any) => {
//       if (isOpen && elRef.current && !elRef.current.contains(e.target)) {
//         setIsOpen(false);
//         console.log('clic fuera');
//       }
//     };

//     document.addEventListener('mousedown', clickedOutside);

//     return () => {
//       document.removeEventListener('mousedown', clickedOutside);
//     };
//   }, [isOpen]);

//   return (
//     <h1> Menu</h1>
//     // <section className={styles.menuMobile} ref={elRef}>
//     //   <button className={`${styles.menuBurger}`} onClick={handler}>
//     //     <div
//     //       className={`${styles.line_1} ${
//     //         isOpen ? styles.rotatePositive : 'null'
//     //       }`}
//     //     ></div>
//     //     <div
//     //       cla // );v>
//     //   </button>

//     //     <div className={styles.menuItem}>
//     //       {menuItems.map((item) => (
//     //         <NextLink key={item.title} href={item.path}>
//     //           <Link
//     //             className={`${
//     //               router.pathname === item.path ? styles.linkActive : 'null'
//     //             } ${isOpen ? styles.itemsAnimated : styles.itemsHidden}`}
//     //             style={{
//     //               textTransform: 'uppercase',
//     //               color: theme?.colors.white.value,
//     //               fontSize: theme?.fontSizes.sm.value,
//     //             }}
//     //           >
//     //             {item.title}
//     //           </Link>
//     //         </NextLink>
//     //       ))}
//     //     </div>

//     // </section>
//   );
// };

// export default MenuMobile;
