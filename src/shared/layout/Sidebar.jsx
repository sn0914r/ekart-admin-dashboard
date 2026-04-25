import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useLogoutMutation } from "../../modules/auth/auth.query";
import {
  BarChart2,
  ShoppingCart,
  Users,
  Package,
  Settings,
  Monitor,
  LogOut,
  LogIn
} from "lucide-react";
import {
  SidebarContainer,
  SidebarLogoBlock,
  SidebarLogoIcon,
  SidebarLogoText,
  SidebarLogoName,
  SidebarLogoSub,
  NavList,
  NavSectionLabel,
  StyledNavLink,
  LogoutSection,
  LogoutButton,
  LoginButton
} from "./Sidebar.styles";

const Sidebar = ({ isOpen }) => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const { mutate: mutateLogout } = useLogoutMutation();
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogoBlock>
        <SidebarLogoIcon>
          <ShoppingCart size={16} color="white" />
        </SidebarLogoIcon>
        <SidebarLogoText>
          <SidebarLogoName>eKart Admin</SidebarLogoName>
          <SidebarLogoSub>Dashboard Panel</SidebarLogoSub>
        </SidebarLogoText>
      </SidebarLogoBlock>

      <NavList>
        <NavSectionLabel>MAIN</NavSectionLabel>
        {/* <StyledNavLink to="/analytics">
          <BarChart2 />
          <span>Analytics</span>
        </StyledNavLink> */}
        <StyledNavLink to="/orders">
          <ShoppingCart />
          <span>Orders</span>
        </StyledNavLink>
        {/* <StyledNavLink to="/users">
          <Users />
          <span>Users</span>
        </StyledNavLink> */}
        <StyledNavLink to="/">
          <Package />
          <span>Products</span>
        </StyledNavLink>
{/* 
        <NavSectionLabel style={{ marginTop: "16px" }}>SYSTEM</NavSectionLabel>
        <StyledNavLink to="/settings">
          <Settings />
          <span>Settings</span>
        </StyledNavLink> */}
      </NavList>

      <LogoutSection>
        {user ? (
          <LogoutButton onClick={() => mutateLogout()}>
            <LogOut size={20} />
            <span>Logout</span>
          </LogoutButton>
        ) : (
          <LoginButton onClick={() => navigate("/auth/login")}>
            <LogIn size={20} />
            <span>Login</span>
          </LoginButton>
        )}
      </LogoutSection>
    </SidebarContainer>
  );
};

export default Sidebar;
