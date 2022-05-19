import styled from '@emotion/styled';
import { MultipleFieldErrors } from 'react-hook-form';
import { Theme } from 'src/styles/Theming';

export const ContactmeStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Theme.spacing.large};
  gap: 4rem;
`;

export const ContactmeDescriptionStyle = styled.div`
  max-width: 55rem;
  display: inline-flex;
  flex-direction: column;
  margin-inline: auto;
  gap: 1rem;
`;
export const ContactmeTxtStyle = styled.p`
  max-width: 55rem;
  margin-inline: auto;
  font-size: ${Theme.fontSizes.text};
`;

export const FormStyle = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 3rem;
`;

export const Formconstrolstyle = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Inputstyle = styled.input`
  background-color: ${Theme.colors.neutral};
  outline: none;
  border: 0;
  padding: 1rem;
  font-size: 1.2rem;
  color: ${Theme.colors.white};
  border-radius: 8px;
`;

export const TextTareaStyle = styled.textarea`
  background-color: ${Theme.colors.neutral};
  outline: none;
  border: 0;
  height: 120px;
  padding: 1rem;
  font-size: 1.2rem;
  color: ${Theme.colors.white};
  border-radius: 8px;
  resize: none;
`;

export const Btnsendstyle = styled.input`
  color: ${Theme.colors.secondary};
  border: 1px solid ${Theme.colors.secondary};
  transition: all 300ms ease-in-out;

  display: block;
  text-transform: uppercase;
  outline: none;
  padding: 1rem;
  border-radius: 15px;
  background: transparent;

  @media (min-width: 40rem) {
    width: 40%;

    margin: auto;
    &:hover {
      cursor: pointer;
      color: ${Theme.colors.white};
      background: ${Theme.colors.secondary};
      transform: translateY(-3px);
      opacity: 0.8;
      box-shadow: ${Theme.shadows.standar};
    }
  }
`;

export const MessgeErrorStyle = styled.span`
  color: ${Theme.colors.error};
`;
