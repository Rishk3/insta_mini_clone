import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import "../css/header_search.css";

const headersData = [
  {
    label: "HomeIcon",
    href: "/listings",
  },
  {
    label: "HomeIcon",
    href: "/mentors",
  },
  {
    label: "HomeIcon",
    href: "/account",
  },
  {
    label: "HomeIcon",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",

    paddingLeft: "0px",
    color: "#000",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "20px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {},
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className="header__search">
          <div className="header__search__items">
            <SearchIcon />
            <input placeholder="Search " />
          </div>
        </div>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button>
            <HomeIcon style={{ fontSize: "2.5rem" }} />
          </Button>
          <Button>
            <ChatIcon style={{ fontSize: "2.5rem" }} />
          </Button>
          <Button>
            <ExploreIcon style={{ fontSize: "2.5rem" }} />
          </Button>
          <Button>
            <FavoriteBorderIcon style={{ fontSize: "2.5rem" }} />
          </Button>
        </div>

        <Button>
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAAGBgb///8ICAj8/PyhoaGVlZXz8/MxMTG2trbS0tLPz8+qqqqmpqY7OzvV1dXGxsa+vr7s7Ozg4ODm5uaWlpYUFBSwsLA5OTnw8PAeHh5wcHCFhYXJyclbW1ssLCxmZmZ2dnaAgIBYWFhMTEyNjY1CQkIZGRlQUFB7e3slJSVaWlr8M3F2AAAE9klEQVR4nO2aa2OiOhCGxxBELMpV8dJabbXbev7//9tMLoK2+2VDV+h5ny8WBJyHxJkJlggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAHRj8dGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGPYBvweCAzCkzcYnyv4bEmXlyiPMLg2/5fEyUS3Evh+G9OsbDAPaChH3YpYGIyoeu1ekvRAPXpOju5goFGXQtSJtClH5BekfUmAvpG62OPHd5h1B0D4gCG733Z7d+uM6vFrIN78YO7jp9keseZKWxXby6UctsxVcjmu/+9WvYNc/jf16evEM0duQ6DVJ4nyW7FU8+0g+xdvXhWJurhzQMgzDZEcjOieOcG98aBQmySyczZI63D2rfXwfFmGL2X/ePwD6GtLqSVhSFfdjWchVyFsZmVlJOW8tlOFENJQ7/mCi1i451i4UiTZj/yHwPH0fCWkCVC8zoqdoT9rQ1jA6ukDbhurYLbGhbO9LuXfpmSE9KjMbJf+RURiTNpSiMIZp29AJqUMj9dFseHFU+0prKPtiGNA8Yq9ifHx9SXWMY9qQHUMdHN+C9hiWq+PxuMv40L0xFMVJMa7XfKBKm3oM47Hj/b5jSA8c6slkvfeIN1RE1lAKlVePzVBow9QcqxTVlDaGpdm14XtVW8Nth/9n4NUtLPm+1yYHjujEW2HL8InMHJXXhurQWPCNcYbmYrwvtYYHm4hHf6qT/8pwpoIplpdCttYxmlla8MaH6illVH0aw3mp3lw2Y6jPDvXbt2Po6+dpyIUgt1cIAhWjmmgrY5jxiEqeeUnWyjRRnmVZyl/N0OVSO0upkqaocKapckP2fOdZyoa1u0JAO56Pc2P4QKXJMQVNv8qlJbc5ylCKavU2n78/pnw/JnSTS30Whl0YZteGzzxsz85wZ2J8bRu26mGs+7hItqtF4qqF7JNh1jSgW4584gxV6tBvXxnKSsNlMCZtqHX0dFZ7XMUvp5o0ve8sDXj1LSpy2U7NS/OtsoakUsyUrg0rWxo4+3yQrviuYVi/Nl3bvi+ZRle70IZBc9462WrxQHo99U7BjaE5lsf30RrGccxFZW1zqsml3mJNlH9/akBUGCmzzqnsF8caqkSS85f0qzHUxa8m09OolzNP26wZw75U/BEd9ASLVf6kj0Lo3nt0GUPVEehO4LNhcIiE6YWMoe4WpHi5GL5MVqu55ky+Jd/PUNd8LglFoTNgpmuAMzT9yFW1kGVVlpXu71QT2hjq73B0vnTe0sKz/p6GtiReknup+hRd+f9geFmHuEbOGY7ozdwgt3qSwibY033HkEfxtLYBiaheNv3XtCkiU5uA2itgUS5cT1M0J3GG+bQ+vLMhP1XZTlUPGqUL96CNDqrfatZ1tMjjnEM/5456YR5OUBDn+Uw/vaJlHcc5rzfUa0Pu8yzYfr7vBbTk5NnkPX2/A/foyXDZvH7E5E61f5qjPh9G3ouLDrLxotZ+h/Tcyx9BvIMKKI+iw36rinYHLdY30MEYxnJt0t8PHUM2jOJxqFLgjzVcZNxkzfNs+UMNRyYbdrMQ+Ab6GVWXwHD4wHD4wHD4wHD4wHD4wHD4wHD4wHD4wHD4/A8MAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0zm/vDmxKAL+QRAAAAABJRU5ErkJggg==" />
        </Button>
      </div>
    );
  };

  const femmecubatorLogo = (
    <img
      style={{ width: "90px" }}
      src="data:image/png;base64,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"
      alt=""
    />
  );

  const getMenuButtons = () => {
    return (
      <div>
        <Button>
          <HomeIcon />
        </Button>
        <Button>
          <ChatIcon />
        </Button>
        <Button>
          <ExploreIcon />
        </Button>
        <Button>
          <FavoriteBorderIcon />
        </Button>
        <Button>
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAAGBgb///8ICAj8/PyhoaGVlZXz8/MxMTG2trbS0tLPz8+qqqqmpqY7OzvV1dXGxsa+vr7s7Ozg4ODm5uaWlpYUFBSwsLA5OTnw8PAeHh5wcHCFhYXJyclbW1ssLCxmZmZ2dnaAgIBYWFhMTEyNjY1CQkIZGRlQUFB7e3slJSVaWlr8M3F2AAAE9klEQVR4nO2aa2OiOhCGxxBELMpV8dJabbXbev7//9tMLoK2+2VDV+h5ny8WBJyHxJkJlggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAHRj8dGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGPYBvweCAzCkzcYnyv4bEmXlyiPMLg2/5fEyUS3Evh+G9OsbDAPaChH3YpYGIyoeu1ekvRAPXpOju5goFGXQtSJtClH5BekfUmAvpG62OPHd5h1B0D4gCG733Z7d+uM6vFrIN78YO7jp9keseZKWxXby6UctsxVcjmu/+9WvYNc/jf16evEM0duQ6DVJ4nyW7FU8+0g+xdvXhWJurhzQMgzDZEcjOieOcG98aBQmySyczZI63D2rfXwfFmGL2X/ePwD6GtLqSVhSFfdjWchVyFsZmVlJOW8tlOFENJQ7/mCi1i451i4UiTZj/yHwPH0fCWkCVC8zoqdoT9rQ1jA6ukDbhurYLbGhbO9LuXfpmSE9KjMbJf+RURiTNpSiMIZp29AJqUMj9dFseHFU+0prKPtiGNA8Yq9ifHx9SXWMY9qQHUMdHN+C9hiWq+PxuMv40L0xFMVJMa7XfKBKm3oM47Hj/b5jSA8c6slkvfeIN1RE1lAKlVePzVBow9QcqxTVlDaGpdm14XtVW8Nth/9n4NUtLPm+1yYHjujEW2HL8InMHJXXhurQWPCNcYbmYrwvtYYHm4hHf6qT/8pwpoIplpdCttYxmlla8MaH6illVH0aw3mp3lw2Y6jPDvXbt2Po6+dpyIUgt1cIAhWjmmgrY5jxiEqeeUnWyjRRnmVZyl/N0OVSO0upkqaocKapckP2fOdZyoa1u0JAO56Pc2P4QKXJMQVNv8qlJbc5ylCKavU2n78/pnw/JnSTS30Whl0YZteGzzxsz85wZ2J8bRu26mGs+7hItqtF4qqF7JNh1jSgW4584gxV6tBvXxnKSsNlMCZtqHX0dFZ7XMUvp5o0ve8sDXj1LSpy2U7NS/OtsoakUsyUrg0rWxo4+3yQrviuYVi/Nl3bvi+ZRle70IZBc9462WrxQHo99U7BjaE5lsf30RrGccxFZW1zqsml3mJNlH9/akBUGCmzzqnsF8caqkSS85f0qzHUxa8m09OolzNP26wZw75U/BEd9ASLVf6kj0Lo3nt0GUPVEehO4LNhcIiE6YWMoe4WpHi5GL5MVqu55ky+Jd/PUNd8LglFoTNgpmuAMzT9yFW1kGVVlpXu71QT2hjq73B0vnTe0sKz/p6GtiReknup+hRd+f9geFmHuEbOGY7ozdwgt3qSwibY033HkEfxtLYBiaheNv3XtCkiU5uA2itgUS5cT1M0J3GG+bQ+vLMhP1XZTlUPGqUL96CNDqrfatZ1tMjjnEM/5456YR5OUBDn+Uw/vaJlHcc5rzfUa0Pu8yzYfr7vBbTk5NnkPX2/A/foyXDZvH7E5E61f5qjPh9G3ouLDrLxotZ+h/Tcyx9BvIMKKI+iw36rinYHLdY30MEYxnJt0t8PHUM2jOJxqFLgjzVcZNxkzfNs+UMNRyYbdrMQ+Ab6GVWXwHD4wHD4wHD4wHD4wHD4wHD4wHD4wHD4wHD4/A8MAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0zm/vDmxKAL+QRAAAAABJRU5ErkJggg==" />
        </Button>
      </div>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
