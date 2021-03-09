import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken, rgba } from 'polished';
import PropTypes from 'prop-types';
import React, { ComponentProps, ComponentType, Fragment } from 'react';
import { easing } from '../../shared/animation';
import { color, typography } from '../../shared/styles';

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

export type ButtonAppearance = 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline';
export type ButtonSize = 'small' | 'medium';

export type StyledButtonProps = {
  size?: ButtonSize;
  isLoading?: boolean;
  isUnclickable?: boolean;
  containsIcon?: boolean;
  appearance?: ButtonAppearance;
};

const StyledButton = styled.button<StyledButtonProps>`
  border: 0;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${props => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  background: transparent;

  font-size: ${p => (p.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;
  font-weight: ${typography.weight.bold};
  line-height: 1;

  ${p =>
    !p.isLoading &&
    css`
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: ${rgba(p.theme.palette.primary.main, 0.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: ${rgba(p.theme.palette.primary.main, 0.2)} 0 8px 18px 0px;
      }
    `}

  ${Text} {
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
    width: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
    vertical-align: top;
    margin-right: ${props => (props.size === SIZES.SMALL ? '4' : '6')}px;
    margin-top: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
    margin-bottom: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${props =>
    props.isUnclickable &&
    css`
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${props =>
    props.isLoading &&
    css`
      cursor: progress !important;
      opacity: 0.7;

      ${Loading} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${p =>
    p.containsIcon &&
    css`
      svg {
        display: block;
        margin: 0;
      }
      padding: ${p.size === SIZES.SMALL ? '7' : '12'}px;
    `}

  ${p =>
    p.appearance === APPEARANCES.PRIMARY &&
    css`
      background: ${p.theme.palette.primary.main};
      color: ${color.lightest};

      ${!p.isLoading &&
      css`
        &:hover {
          background: ${darken(0.05, p.theme.palette.primary.main)};
        }
        &:active {
          box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
        }
        &:focus {
          box-shadow: ${rgba(p.theme.palette.primary.main, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${rgba(p.theme.palette.primary.main, 0.2)} 0 8px 18px 0px;
        }
      `}
    `}

  ${p =>
    p.appearance === APPEARANCES.SECONDARY &&
    css`
      background: ${p.theme.palette.secondary.main};
      color: ${color.lightest};

      ${!p.isLoading &&
      css`
        &:hover {
          background: ${darken(0.05, p.theme.palette.secondary.main)};
        }
        &:active {
          box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
        }
        &:focus {
          box-shadow: ${rgba(p.theme.palette.secondary.main, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${rgba(p.theme.palette.secondary.main, 0.2)} 0 8px 18px 0px;
        }
      `}
    `}

  ${p =>
    p.appearance === APPEARANCES.PRIMARY_OUTLINE &&
    css`
      box-shadow: ${p.theme.palette.primary.main} 0 0 0 1px inset;
      color: ${p.theme.palette.primary.main};

      &:hover {
        box-shadow: ${p.theme.palette.primary.main} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${p.theme.palette.primary.main};
        box-shadow: ${p.theme.palette.primary.main} 0 0 0 1px inset;
        color: ${color.lightest};
      }
      &:focus {
        box-shadow: ${p.theme.palette.primary.main} 0 0 0 1px inset,
          ${rgba(p.theme.palette.primary.main, 0.4)} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${p.theme.palette.primary.main} 0 0 0 1px inset,
          ${rgba(p.theme.palette.primary.main, 0.2)} 0 8px 18px 0px;
      }
    `};

  ${p =>
    p.appearance === APPEARANCES.SECONDARY_OUTLINE &&
    css`
      box-shadow: ${p.theme.palette.secondary.main} 0 0 0 1px inset;
      color: ${p.theme.palette.secondary.main};

      &:hover {
        box-shadow: ${p.theme.palette.secondary.main} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${p.theme.palette.secondary.main};
        box-shadow: ${p.theme.palette.secondary.main} 0 0 0 1px inset;
        color: ${color.lightest};
      }
      &:focus {
        box-shadow: ${p.theme.palette.secondary.main} 0 0 0 1px inset,
          ${rgba(p.theme.palette.secondary.main, 0.4)} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${p.theme.palette.secondary.main} 0 0 0 1px inset,
          ${rgba(p.theme.palette.secondary.main, 0.2)} 0 8px 18px 0px;
      }
    `};
`;

const ButtonLink = StyledButton.withComponent('a');

const applyStyle = ButtonWrapper => {
  return (
    ButtonWrapper &&
    StyledButton.withComponent(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ containsIcon, isLoading, isUnclickable, ...rest }) => <ButtonWrapper {...rest} />,
    )
  );
};

export type ButtonProps<P = null> = StyledButtonProps &
  ComponentProps<typeof StyledButton> &
  P & {
    isDisabled?: boolean;
    loadingText?: string;
    isLink?: boolean;
    ButtonWrapper?: ComponentType<P>;
  };

export function Button<P = null>({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  ...props
}: ButtonProps<P>) {
  const buttonInner = (
    <Fragment>
      <Text>{children}</Text>
      {isLoading && <Loading>{loadingText || 'LOADING...'}</Loading>}
    </Fragment>
  );

  const StyledButtonWrapper = (React.useMemo(() => applyStyle(ButtonWrapper), [
    ButtonWrapper,
  ]) as unknown) as ComponentType<ButtonProps<P>>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let SelectedButton: any = (StyledButton as unknown) as ComponentType<ButtonProps<P>>;
  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = (ButtonLink as unknown) as ComponentType<ButtonProps<P>>;
  }

  return (
    <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </SelectedButton>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  /**
   When a button is in the loading state you can supply custom text
  */
  loadingText: PropTypes.node,
  /**
   Buttons that have hrefs should use <a> instead of <button>
  */
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,
  /**
   Buttons with icons by themselves have a circular shape
  */
  containsIcon: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.PRIMARY,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
};
