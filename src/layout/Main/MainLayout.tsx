import { FC } from "react";
import { Box, styled } from "@mui/material";
import { Fragment, useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "components/Navbar/DashboardNavbar";

// styled components
const BodyWrapper = styled(Box)<{ compact: number }>(({ theme, compact }) => ({
  transition: "margin-left 0.3s",
  marginLeft: compact ? "86px" : "280px",
  [theme.breakpoints.down("lg")]: { marginLeft: 0 },
}));

const InnerWrapper = styled(Box)(({ theme }) => ({
  transition: "all 0.3s",
  [theme.breakpoints.up("lg")]: { maxWidth: 1200, margin: "auto" },
  [theme.breakpoints.down(1550)]: { paddingLeft: "2rem", paddingRight: "2rem" },
}));

const MainLayout: FC = () => {
  const [sidebarCompact, setSidebarCompact] = useState(0);
  const [showMobileSideBar, setShowMobileSideBar] = useState(0);

  // handle sidebar toggle for desktop device
  const handleCompactToggle = () =>
    setSidebarCompact((state) => (state ? 0 : 1));
  // handle sidebar toggle in mobile device
  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => (state ? 0 : 1));

  return (
    <Fragment>
      <Sidebar
        sidebarCompact={sidebarCompact}
        showMobileSideBar={showMobileSideBar}
        setSidebarCompact={handleCompactToggle}
        setShowMobileSideBar={handleMobileDrawerToggle}
      />
      <BodyWrapper compact={sidebarCompact ? 1 : 0}>
        <DashboardNavbar handleDrawerToggle={handleMobileDrawerToggle} />
        <InnerWrapper>
          <Outlet />
        </InnerWrapper>
      </BodyWrapper>
    </Fragment>
  );
};

export default MainLayout;
