import Link from 'next/link';

import {
  SecondaryButton,
  ButtonIconStyle,
  PrimaryButton,
} from './Buttons.styled';

type Props = {
  children: React.ReactNode;
  href: string;
  passHref?: boolean;
  target?: string;
  primary?: true;
};

export const ButtonDefault = ({ children, href, primary }: Props) => {
  return (
    <>
      {primary ? (
        <Link href={href}>
          <PrimaryButton>{children}</PrimaryButton>
        </Link>
      ) : (
        <Link href={href}>
          <SecondaryButton>{children}</SecondaryButton>
        </Link>
      )}
    </>
  );
};

export const ButtonIcon = ({ children, href, target }: Props) => {
  return (
    <ButtonIconStyle href={href} target={target}>
      {children}
    </ButtonIconStyle>
  );
};
