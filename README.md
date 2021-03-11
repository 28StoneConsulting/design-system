# 28Stone Design System

28Stone Design System is a reusable component library that helps 28Stone employees to build internal application UIs faster. The goal is to make building durable UIs more productive and satisfying.

The latest version is published [here](https://28stoneconsulting.github.io/design-system).

## Install

28SDS components are written in React, and its stories are written in [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df).

Add 28SDS to your project.

`npm install --save @28stoneconsulting/design-system`
or
`yarn add @28stoneconsulting/design-system`

### **Use**

28SDS is using material-ui theming approach and emotion for syling. Add the following imports into the ts/js file:

```js
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@emotion/react';
import { Button, Badge } from '@28stoneconsulting/design-system';
```

and use them like so

```jsx
const example = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div>
          <Button appearance="primary" onClick={() => {}}>
            Do something
          </Button>
          <Badge onClick={() => {}}>Cool</Badge>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
```
The codesandbox example can be accessed [here](https://codesandbox.io/s/28stone-design-system-usage-expample-1qdbn?file=/public/index.html)

### **Run and develop 28SDS locally**

Clone the [28SDS GitHub project](https://github.com/28StoneConsulting/design-system) then start Storybook.

`yarn && yarn storybook`

### **Resources**

- [GitHub repository](https://github.com/28StoneConsulting/design-system)
