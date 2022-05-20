import {NavLink} from "react-router-dom";
import classes from "./Drawer.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import {menuCloseHandler} from "../../../store/quizSlice/quizSlice";
import {useDispatch} from "react-redux";

const links = [{
    to: '/', label: "Список тестов"
},
    {
        to: '/auth', label: "Авторизация"
    },
    {
        to: '/quiz-creator', label: "Создать тест"
    }];

const Drawer = ({isOpen}) => {
    const dispatch = useDispatch();
    const cls = [classes.Drawer, !isOpen && classes.close];

    const renderLinks = () => {
        return links.map((link, i) => {
            return (
              <li key={i} className={classes.item}>
                  <NavLink className={classes.link} to={link.to} onClick={() => dispatch(menuCloseHandler())}>
                      {link.label}
                  </NavLink>
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
