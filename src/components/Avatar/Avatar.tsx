import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ComponentProps } from 'react';
import { glow } from '../../shared/animation';
import { Icon } from '../Icon/Icon';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

export type AvatarSize = keyof typeof sizes;

const Image = styled.div<{ $loading?: boolean; size: AvatarSize; src: string }>`
  background: ${p => (!p.$loading ? 'transparent' : p.theme.palette.monochrome.light)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${p =>
    p.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${p =>
    p.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${p =>
    p.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}

  ${p =>
    !p.src &&
    css`
      background: ${!p.$loading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${p => (p.theme.palette ? p.theme.palette.monochrome.medium : '#DDDDDD')};
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

// prettier-ignore
const Initial = styled.div<{ size: AvatarSize }>`
  color: ${p => p.theme.palette.monochrome.lightest};
  text-align: center;

  font-size: ${p => p.theme.typography.size.s2}px;
  line-height: ${sizes.medium}px;

  ${p => p.size === 'tiny' && css`
    font-size: ${Number(p.theme.typography.size.s1) - 2}px;
    line-height: ${sizes.tiny}px;
  `}

  ${p => p.size === 'small' && css`
    font-size: ${p.theme.typography.size.s1}px;
    line-height: ${sizes.small}px;
  `}

  ${p => p.size === 'large' && css`
    font-size: ${p.theme.typography.size.s3}px;
    line-height: ${sizes.large}px;
  `}
`;

export type AvatarProps = {
  username?: string;
  loading?: boolean;
  src?: string;
  size?: AvatarSize;
} & ComponentProps<typeof Image>;

/**
 * Use an avatar for attributing actions or content to specific users.
 *   The user’s name should always be present when using Avatar – either printed beside
 *   the avatar or in a tooltip.
 **/
export function Avatar({ loading, username, src, size, ...props }: AvatarProps) {
  let avatarFigure = <Icon icon="useralt" />;
  const a11yProps = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden="true">
        {username.substring(0, 1)}
      </Initial>
    );
  }

  return (
    <Image size={size} $loading={loading} src={src} {...a11yProps} {...props}>
      {avatarFigure}
    </Image>
  );
}

Avatar.propTypes = {
  /**
   Use the loading state to indicate that the data Avatar needs is still loading. 
  */
  loading: PropTypes.bool,
  /**
   Avatar falls back to the user’s initial when no image is provided. Supply a `username` and omit `src` to see what this looks like.
  */
  username: PropTypes.string,
  /**
   The URL of the Avatar's image.
  */
  src: PropTypes.string,
  /**
   Avatar comes in four sizes. In most cases, you’ll be fine with `medium`. 
  */
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Avatar.defaultProps = {
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium',
};
