import classes from "./Drawer.module.scss";
import Backdrop from "../Backdrop/Backdrop";

const links = [1, 2, 3];

const Drawer = ({isOpen}) => {
    const cls = [classes.Drawer, !isOpen && classes.close];

    const renderLinks = () => {
        return links.map((link, i) => {
            return (
              <li key={i} className={classes.item}>
                  <a className={classes.link} href={link}>
                      Страница-{link}
                  </a>
              </li>
            );
        });
    };

    return (
      <>
          <nav className={cls.join(" ")}>
              <ul>{renderLinks()}</ul>
          </nav>
          {isOpen ? <Backdrop/> : null}
      </>
    );
};

export default Drawer;
