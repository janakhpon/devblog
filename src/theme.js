import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#44d62c',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      primary: "#fff",
      secondary: "#44d62c"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#111111',
    },
  },

});

export default theme;
