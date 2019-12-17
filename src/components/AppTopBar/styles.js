import { styles as toolbarStyles } from '../modules/Toolbar';

export default (theme) => ({
  root: {
    backgroundColor: '#333'
  },
  title: {
    fontSize: 24
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1
  },
  placeholder: toolbarStyles(theme).root
});
