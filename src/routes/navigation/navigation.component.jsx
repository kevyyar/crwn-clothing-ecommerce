import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;