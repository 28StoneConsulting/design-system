import styled from '@emotion/styled';
import { Icon } from '../Icon/Icon';
import { Badge } from './Badge';

export default {
  title: 'Design System/Badge',
  component: Badge,
};

export const AllBadges = () => (
  <AllBadgesWrapper>
    <Badge status="success">Success</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="info">Info</Badge>
    <Badge status="success">
      <Icon icon="facehappy" />
      with icon
    </Badge>
  </AllBadgesWrapper>
);

export const Success = () => <Badge status="success">Success</Badge>;
export const Warning = () => <Badge status="warning">Warning</Badge>;
export const Info = () => <Badge status="info">Info</Badge>;
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
    margin-right: ${p => p.theme.spacing(1)};
  }
`;
