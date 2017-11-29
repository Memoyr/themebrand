

```jsx
const { ThemeProvider } = require('styled-components');
const { marketTheme } = require('../../constants/theme.js');
const data =[
  {"item":"Settings"},
  {"item":"Something"},
  {"item":"Log out"}
];
<ThemeProvider theme={marketTheme}>
  <MenuList data={data} />
</ThemeProvider>
```
