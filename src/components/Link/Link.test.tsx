import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom';
import { lightTheme } from '../../shared/theme';
import { ReactAnchorProps } from '../../types';
import { Link } from './Link';

// A straightforward link wrapper that renders an <a> with the passed props. What we are testing
// here is that the Link component passes the right props to the wrapper and itself.
const LinkWrapper = (props: ReactAnchorProps) => <a {...props} />;

it('has a href attribute when rendering with linkWrapper', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
      <Link href="https://learnstorybook.com" LinkWrapper={LinkWrapper}>
        Link Text
      </Link>
    </ThemeProvider>,
    div,
  );

  expect(div.querySelector('a[href="https://learnstorybook.com"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link Text');

  ReactDOM.unmountComponentAtNode(div);
});
