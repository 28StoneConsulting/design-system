import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            // This is where the magic happens.
            theme: dark ? themes.dark : themes.light,
          },
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
