import styled from '@emotion/styled';
import { Icon } from '../Icon/Icon';
import { Badge } from './Badge';

export default {
  title: 'Design System/Badge',
  component: Badge,
};

export const AllBadges = () => (
  <AllBadgesWrapper>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="positive">
      <Icon icon="facehappy" inline />
      with icon
    </Badge>
  </AllBadgesWrapper>
);

export const Positive = () => <Badge status="positive">Positive</Badge>;
export const Negative = () => <Badge status="negative">Negative</Badge>;
export const Warning = () => <Badge status="warning">Warning</Badge>;
export const Neutral = () => <Badge status="neutral">Neutral</Badge>;
export const Error = () => <Badge status="error">Error</Badge>;

export const WithIcon = args => (
  <Badge {...args}>
    <Icon {...args} />
    with icon
  </Badge>
);

WithIcon.args = {
  status: 'warning',
  icon: 'check',
  inline: true,
};

const AllBadgesWrapper = styled.div`
  & > * {
    margin-right: ${p => p.theme.spacing(1)}px;
  }
`;
