import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { Container, useMediaQuery, useTheme } from "@mui/material";

const drawerWidth = 240;

interface PageProps {
  title: string;
  titleIcon: React.ReactNode;
  mainActions?: Action[];
  secondaryActions?: Action[];
  children: ReactNode;
}
import { Roboto } from "next/font/google";
import Action from "@/types/Actions";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const PageContent = ({
  title,
  titleIcon,
  mainActions,
  secondaryActions,
  children,
}: PageProps): JSX.Element => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      className={roboto.className}
      sx={{
        display: "flex",
        backgroundColor: (theme) => theme.palette.grey[300],
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <TopBar
          title={title}
          titleIcon={titleIcon}
          mainActions={mainActions}
          secondaryActions={secondaryActions}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          paddingY={5}
          paddingX={isUpMd ? 4 : 1}
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
          }}
          width="920px"
          maxWidth="920px"
        >
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default PageContent;
