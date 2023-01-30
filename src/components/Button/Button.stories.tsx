import styled from '@emotion/styled';
import { StoryLinkWrapper } from '../Link/StoryLinkWrapper';
import { Button } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const AllButtons = () => (
  <ButtonsWrapper>
    <Button appearance="primary">PRIMARY</Button>
    <Button appearance="secondary">SECONDARY</Button>
    <Button appearance="primaryOutline">OUTLINE PRIMARY</Button>
    <Button appearance="secondaryOutline">OUTLINE SECONDARY</Button>
    <Button appearance="primary" isDisabled>
      DISABLED
    </Button>
    <br />
    <Button appearance="primary" isLoading>
      PRIMARY
    </Button>
    <Button appearance="secondary" isLoading>
      SECONDARY
    </Button>
    <Button appearance="primaryOutline" isLoading>
      OUTLINE PRIMARY
    </Button>
    <Button appearance="secondaryOutline" isLoading>
      OUTLINE SECONDARY
    </Button>
    <br />
    <Button appearance="primary" size="small">
      PRIMARY
    </Button>
    <Button appearance="secondary" size="small">
      SECONDARY
    </Button>
    <Button appearance="primaryOutline" size="small">
      OUTLINE PRIMARY
    </Button>
    <Button appearance="secondaryOutline" size="small">
      OUTLINE SECONDARY
    </Button>
    <Button appearance="primary" isDisabled size="small">
      DISABLED
    </Button>
  </ButtonsWrapper>
);

AllButtons.storyName = 'All Buttons';

export const AnchorWrapper = () => (
  <ButtonsWrapper>
    <StoryLinkWrapper to="http://28stone.com">Original Link Wrapper</StoryLinkWrapper>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" to="" href="http://storybook.js.org">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" to="" href="http://storybook.js.org">
      Secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primaryOutline" to="" href="http://storybook.js.org">
      Outline primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondaryOutline" to="" href="http://storybook.js.org">
      Outline secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" to="" isDisabled href="http://storybook.js.org">
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" to="" isLoading href="http://storybook.js.org">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" to="" isLoading href="http://storybook.js.org">
      Secondary
    </Button>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" size="small" to="" href="http://storybook.js.org">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" size="small" to="" href="http://storybook.js.org">
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      size="small"
      to=""
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
  </ButtonsWrapper>
);

AnchorWrapper.storyName = 'Anchor Wrapper';

const ButtonsWrapper = styled.div`
  & > * {
    margin-right: ${p => p.theme.spacing(1)};
    margin-bottom: ${p => p.theme.spacing(1)};
  }
`;
