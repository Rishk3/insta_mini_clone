import React, { useContext } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { useDataLayerValue } from "../context_api/DataLayer";

export default function Profile() {
  const [{ allPostCount }, dispatch] = useDataLayerValue();
  return (
    <div className="myProf">
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAAGBgb///8ICAj8/PyhoaGVlZXz8/MxMTG2trbS0tLPz8+qqqqmpqY7OzvV1dXGxsa+vr7s7Ozg4ODm5uaWlpYUFBSwsLA5OTnw8PAeHh5wcHCFhYXJyclbW1ssLCxmZmZ2dnaAgIBYWFhMTEyNjY1CQkIZGRlQUFB7e3slJSVaWlr8M3F2AAAE9klEQVR4nO2aa2OiOhCGxxBELMpV8dJabbXbev7//9tMLoK2+2VDV+h5ny8WBJyHxJkJlggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAHRj8dGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGA4fGPYBvweCAzCkzcYnyv4bEmXlyiPMLg2/5fEyUS3Evh+G9OsbDAPaChH3YpYGIyoeu1ekvRAPXpOju5goFGXQtSJtClH5BekfUmAvpG62OPHd5h1B0D4gCG733Z7d+uM6vFrIN78YO7jp9keseZKWxXby6UctsxVcjmu/+9WvYNc/jf16evEM0duQ6DVJ4nyW7FU8+0g+xdvXhWJurhzQMgzDZEcjOieOcG98aBQmySyczZI63D2rfXwfFmGL2X/ePwD6GtLqSVhSFfdjWchVyFsZmVlJOW8tlOFENJQ7/mCi1i451i4UiTZj/yHwPH0fCWkCVC8zoqdoT9rQ1jA6ukDbhurYLbGhbO9LuXfpmSE9KjMbJf+RURiTNpSiMIZp29AJqUMj9dFseHFU+0prKPtiGNA8Yq9ifHx9SXWMY9qQHUMdHN+C9hiWq+PxuMv40L0xFMVJMa7XfKBKm3oM47Hj/b5jSA8c6slkvfeIN1RE1lAKlVePzVBow9QcqxTVlDaGpdm14XtVW8Nth/9n4NUtLPm+1yYHjujEW2HL8InMHJXXhurQWPCNcYbmYrwvtYYHm4hHf6qT/8pwpoIplpdCttYxmlla8MaH6illVH0aw3mp3lw2Y6jPDvXbt2Po6+dpyIUgt1cIAhWjmmgrY5jxiEqeeUnWyjRRnmVZyl/N0OVSO0upkqaocKapckP2fOdZyoa1u0JAO56Pc2P4QKXJMQVNv8qlJbc5ylCKavU2n78/pnw/JnSTS30Whl0YZteGzzxsz85wZ2J8bRu26mGs+7hItqtF4qqF7JNh1jSgW4584gxV6tBvXxnKSsNlMCZtqHX0dFZ7XMUvp5o0ve8sDXj1LSpy2U7NS/OtsoakUsyUrg0rWxo4+3yQrviuYVi/Nl3bvi+ZRle70IZBc9462WrxQHo99U7BjaE5lsf30RrGccxFZW1zqsml3mJNlH9/akBUGCmzzqnsF8caqkSS85f0qzHUxa8m09OolzNP26wZw75U/BEd9ASLVf6kj0Lo3nt0GUPVEehO4LNhcIiE6YWMoe4WpHi5GL5MVqu55ky+Jd/PUNd8LglFoTNgpmuAMzT9yFW1kGVVlpXu71QT2hjq73B0vnTe0sKz/p6GtiReknup+hRd+f9geFmHuEbOGY7ozdwgt3qSwibY033HkEfxtLYBiaheNv3XtCkiU5uA2itgUS5cT1M0J3GG+bQ+vLMhP1XZTlUPGqUL96CNDqrfatZ1tMjjnEM/5456YR5OUBDn+Uw/vaJlHcc5rzfUa0Pu8yzYfr7vBbTk5NnkPX2/A/foyXDZvH7E5E61f5qjPh9G3ouLDrLxotZ+h/Tcyx9BvIMKKI+iw36rinYHLdY30MEYxnJt0t8PHUM2jOJxqFLgjzVcZNxkzfNs+UMNRyYbdrMQ+Ab6GVWXwHD4wHD4wHD4wHD4wHD4wHD4wHD4wHD4wHD4/A8MAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0zm/vDmxKAL+QRAAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name" style={{ fontWeight: "500" }}>
                livewithombre
              </h1>

              <button className="btn profile-edit-btn">Edit Profile</button>
              <IconButton>
                <SettingsIcon />
              </IconButton>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">{allPostCount}</span>{" "}
                  posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div className="profile-bio" style={{ fontSize: "18px" }}>
              <p>
                <span className="profile-real-name">
                  Ombre | Hub for Live Music
                </span>{" "}
              </p>
              <p style={{ width: "80%" }}>
                Sharing <span className="profile-real-name">LIVE</span>{" "}
                streaming music around the 🌍
                <br />
                Running round the clock for you
                <br />
                DM for collaboration for events
                <br />
                Check out our app!
                <br />
                <a href="https://liveombre.com/" target="_blank">
                  linktr.ee/Livewithombre
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
