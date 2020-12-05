// import React from "react";
// import Link from "next/link";
// import { Button } from "@material-ui/core";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuIcon from "@material-ui/icons/Menu";

// export default function NavMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MenuIcon />
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <Link href="/">
//           <MenuItem onClick={handleClose}>HOME</MenuItem>
//         </Link>
//         <Link href="/">
//           <MenuItem onClick={handleClose}>REDDIT</MenuItem>
//         </Link>
//         <Link href="/">
//           <MenuItem onClick={handleClose}>ABOUT</MenuItem>
//         </Link>
//         <Link href="/">
//           <MenuItem onClick={handleClose}>TEAM</MenuItem>
//         </Link>
//       </Menu>
//     </div>
//   );
// }

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import RedditIcon from "@material-ui/icons/Reddit";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function NavMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ margin: "5em 0" }}
    >
      <List>
        {[
          [<HomeIcon />, "HOME", "/"],
          [<RedditIcon />, "REDDIT", "/reddit"],
          [<InfoIcon />, "ABOUT", "/about"],
          [<GroupIcon />, "TEAM", "/team"],
        ].map((item, index) => (
          <Link href={item[2]} key={index}>
            <ListItem button>
              <div style={{ margin: "0 1em" }}>{item[0]}</div>
              <ListItemText primary={item[1]} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
