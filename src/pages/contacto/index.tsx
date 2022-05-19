import Image from 'next/image';
import React, { useState } from 'react';
import { ButtonIcon } from 'src/components/Buttons';
import {
  ContactmeStyle,
  ContactmeTxtStyle,
  Inputstyle,
  FormStyle,
  TextTareaStyle,
  Formconstrolstyle,
  Btnsendstyle,
  ContactmeDescriptionStyle,
  MessgeErrorStyle,
} from './Contacto.style';
import linkedinIcon from '/public/linkedin.svg';
import style from 'src/styles/styles.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import Emailsend from '../PagesComponents/Contact';

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [isSend, setIsSend] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch('/api/sendemail', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      reset();
    }
    setIsSend(true);

    setTimeout(() => {
      setIsSend(false);
    }, 2500);
  };

  return (
    <>
      <ContactmeStyle>
        <ContactmeDescriptionStyle>
          <ContactmeTxtStyle>
            Me encantaría saber en qué proyecto estás trabajando  y poder
            ayudarte a construirlo. Estoy buscando nuevos retos en una empresa
            emocionante como Frontend Developer. Mi preferencia es trabajar en
            modalidad remota, pero estoy abierto a otras ofertas que no se
            ajusten en su totalidad. Me gustaría aportar valor en el desarrollo
            de tu próxima aplicación web, asumo cada reto con sentido de
            propósito y atención a los detalles. No dudes en consultar mi perfil
            en Linkedin o si prefieres enviarme un correo electrónico desde el
            siguiente formulario.
          </ContactmeTxtStyle>

          <div>
            <ButtonIcon href='https://www.linkedin.com/in/yeferson-olarte-roncancio-432867171/'>
              <Image src={linkedinIcon} alt='linkedin icon' />
            </ButtonIcon>
          </div>
        </ContactmeDescriptionStyle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormStyle>
            <Formconstrolstyle>
              <Inputstyle
                autoComplete='off'
                className={`${errors.fullName ? style.inputError : ''}`}
                placeholder='Tu nombre'
                {...register('fullName', { required: true })}
              />

              {errors.fullName && (
                <MessgeErrorStyle> Este campo es requerido</MessgeErrorStyle>
              )}
            </Formconstrolstyle>

            <Formconstrolstyle>
              <Inputstyle
                className={`${errors.email ? style.inputError : ''}`}
                placeholder='yefweb@correo.com'
                type='email'
                autoComplete='off'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <MessgeErrorStyle> Este campo es requerido</MessgeErrorStyle>
              )}
            </Formconstrolstyle>

            <Formconstrolstyle>
              <TextTareaStyle
                className={`${errors.message ? style.inputError : 'undefined'}`}
                placeholder='Deja tu mensaje...'
                {...register('message', { required: true })}
              />
              {errors.message && (
                <MessgeErrorStyle> Este campo es requerido</MessgeErrorStyle>
              )}
            </Formconstrolstyle>

            <Btnsendstyle value='Enviar mensaje' type='submit' />
          </FormStyle>
        </form>
      </ContactmeStyle>

      {isSend && <Emailsend />}
    </>
  );
};

export default Contacto;
