import React from 'react';
import GUButton, { GUButtonProps } from '@components/control/gu-button';
import styled from 'styled-components';
import SOCIALS_DATA from '@common/defines/socials';

interface SocialsProps {
  containerClassName?: string;
  spacing?: number;
  height?: number;
  width?: number;
}

interface SocialsContainerProps {
  spacing?: number;
}

interface StyledButtonProps {
  height?: number;
  width?: number;
}

const SocialsContainer = styled.div<SocialsContainerProps>`
  font-size: 14px;
  .btn {
    &:not(:last-child) {
      ${({ spacing }) => spacing && `margin-right: ${spacing / 14}em`}
    }
  }
`;

const StyledButton = styled(GUButton)<StyledButtonProps>`
  ${({ height }) => height && `height: ${height / 14}em!important`};
  ${({ width }) => width && `width: ${width / 14}em; padding: 0!important`}
`;

const Socials = ({ containerClassName, height, width, spacing, ...props }: SocialsProps & GUButtonProps) => {
  return (
    <SocialsContainer spacing={spacing} className="social-block">
      {SOCIALS_DATA.map((item, index) => (
        <StyledButton key={index} height={height} width={width} href={item.link} {...props}>
          <i className={item.iconClassName} />
        </StyledButton>
      ))}
    </SocialsContainer>
  );
};

export default Socials;
