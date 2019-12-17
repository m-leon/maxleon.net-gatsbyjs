export default (theme) => ({
  root: {
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    marginTop: theme.spacing(4)
  },
  container: {
    display: 'flex',
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8)
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: 'flex'
  },
  icon: {
    alignItems: 'center',
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    marginRight: theme.spacing(1),
    width: 48
  },
  list: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0
  },
  listItem: {
    paddingBottom: theme.spacing(0.5),
    paddingTop: theme.spacing(0.5)
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  }
});
