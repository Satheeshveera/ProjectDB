import React from "react";
import PropTypes from "prop-types";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AdjustIcon from "@material-ui/icons/Adjust";
import MenuIcon from "@material-ui/icons/Menu";
// import { FcGoogleIcon } from "react-icons/Fc/fc";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Icon, Box, Button } from "@material-ui/core";
import G from "./G.png";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,

      flexShrink: 0,
    },
  },
  //   appBar: {
  //     [theme.breakpoints.up("sm")]: {
  //       width: `calc(100% - ${drawerWidth}px)`,
  //       marginLeft: drawerWidth,
  //     },
  //   },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Drawer1(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div style={{ backgroundColor: "#ede9e8" }}>
        <img
          src={G}
          alt="Logo"
          style={{
            width: "59px",
            marginLeft: "90px",
          }}
          // style={{ width: "59px" }}
        />
      </div>
      {/* <FcGoogleIcon /> */}
      <Divider />
      <Button
        variant="contained"
        size="small"
        color="primary"
        style={{ marginLeft: "10px", marginTop: "20px", width: "90%" }}
        onClick={() => {
          this.Open();
          console.log("clicked");
        }}
      >
        Compose
      </Button>
      <List>
        {["Inbox", "Starred", "Impartent", "Send email", "Drafts", "Bin"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Icon /> : <Icon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Friends", "Family", "Working"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <AdjustIcon color="primary" />
              ) : (
                <FiberManualRecordTwoToneIcon style={{ color: "red" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} style={{ backgroundColor: "#ede9e8" }}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>hiii</Typography>
      </main> */}
    </div>
  );
}

Drawer1.propTypes = {
  window: PropTypes.func,
};

export default Drawer1;
