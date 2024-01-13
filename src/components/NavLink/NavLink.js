import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

export const NavLink = ({ children, ...rest }) => {
  return <Wrapper {...rest}>
    <MainText>{children}</MainText>
    <HoverText aria-hidden={true}>{children}</HoverText>
  </Wrapper>;
}

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  /*
    Text slide-up effect
  */
  overflow: hidden;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 400ms;
    transform: translateY(var(--transform-from));

    ${Wrapper}:hover & {
      transition: transform 200ms;
      transform: translateY(var(--transform-to));
    }
  }
`;

const MainText = styled(Text)`
  --transform-from: 0%;
  --transform-to: -100%;
`;
const HoverText = styled(Text)`
  --transform-from: 100%;
  --transform-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;