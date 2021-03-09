import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import { ComponentProps, ComponentType, Fragment } from 'react';
import { color } from '../../shared/styles';
import { Icon } from '../Icon/Icon';

export type LinkProps<P = unknown> = {
  className?: string;
  href?: string;
  containsIcon?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  nochrome?: boolean;
  inverse?: boolean;
  isButton?: boolean;
  withArrow?: boolean;
  LinkWrapper?: ComponentType<P>;
} & ComponentProps<typeof LinkInner> &
  P;

const linkStyles = (p: LinkProps) => css`
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${darken(0.1, color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${p.containsIcon &&
  css`
    svg {
      height: 1em;
      width: 1em;
      vertical-align: middle;
      position: relative;
      bottom: 0;
      margin-right: 0;
    }
  `};

  ${p.secondary &&
  css`
    color: ${color.mediumdark};

    &:hover {
      color: ${color.dark};
    }

    &:active {
      color: ${color.darker};
    }
  `};

  ${p.tertiary &&
  css`
    color: ${color.dark};

    &:hover {
      color: ${color.darkest};
    }

    &:active {
      color: ${color.mediumdark};
    }
  `};

  ${p.nochrome &&
  css`
    color: inherit;

    &:hover,
    &:active {
      color: inherit;
      text-decoration: underline;
    }
  `};

  ${p.inverse &&
  css`
    color: ${color.lightest};

    &:hover {
      color: ${color.lighter};
    }

    &:active {
      color: ${color.light};
    }
  `};

  ${p.isButton &&
  css`
    border: 0;
    border-radius: 0;
    background: none;
    padding: 0;
    font-size: inherit;
  `};
`;

const LinkInner = styled.span<{ withArrow?: boolean }>`
  ${props =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const LinkA = styled.a`
  ${linkStyles};
`;

const LinkButton = styled.button`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${linkStyles};
`;

const applyStyle = LinkWrapper => {
  return (
    LinkWrapper &&
    styled(({ // eslint-disable-next-line @typescript-eslint/no-unused-vars
      containsIcon, inverse, nochrome, secondary, tertiary, ...linkWrapperRest }) => (
      <LinkWrapper {...linkWrapperRest} />
    ))`
      ${linkStyles};
    `
  );
};

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export function Link<P = null>({ isButton, withArrow, LinkWrapper, children, ...rest }: LinkProps<P>) {
  const content = (
    <Fragment>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon="arrowright" />}
      </LinkInner>
    </Fragment>
  );

  const StyledLinkWrapper = applyStyle(LinkWrapper);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let SelectedLink: any = LinkA;
  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return <SelectedLink {...rest}>{content}</SelectedLink>;
}

Link.propTypes = {
  isButton: PropTypes.bool,
  children: PropTypes.node,
  withArrow: PropTypes.bool,
  containsIcon: PropTypes.bool,
  inverse: PropTypes.bool,
  nochrome: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false,
};