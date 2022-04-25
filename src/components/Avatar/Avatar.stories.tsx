import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

export const Standard = args => <Avatar {...args} />;
Standard.args = {
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};

export const Sizes = args => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};

export const Initials = args => (
  <div>
    <Avatar {...args} username="Tom Coleman" />
    <Avatar {...args} username="Dominic Nguyen" />
    <Avatar {...args} username="Kyle Suss" />
    <Avatar {...args} username="Michael Shilman" />
  </div>
);

export const Loading = args => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};

export const Large = args => (
  <div>
    <Avatar {...args} loading size="large" />
    <Avatar {...args} size="large" username="Tom Coleman" />
    <Avatar {...args} size="large" username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
  </div>
);
