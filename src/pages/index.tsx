import type { NextPage } from 'next';
import Head from 'next/head';
import CallToAction from 'src/components/CallToAction';
import Aboutme from './PagesComponents/Home/Aboutme';
import Hero from './PagesComponents/Home/Hero';

const tech = ['ReactJs', 'Typescript', 'NextJs', 'TailwindCss'];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yeferson - Portafolio</title>
        <meta
          name='description'
          content='Yeferson Olarte Roncancio, Desarrollador frontend'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      <Aboutme />

      <CallToAction />
    </>
  );
};

export default Home;
