import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as PPLogo} from "../../assets/pride-palette.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <PPLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
              {
                currentUser ? (
                  <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                ) : (
                  <NavLink to="/auth">
                    SIGN IN
                  </NavLink>
                )
              }
          <CartIcon />
        </NavLinks>
            {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;