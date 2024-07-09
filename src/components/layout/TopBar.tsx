import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ActionButton, { ActionButtonProps } from "../controls/ActionButton";

export interface TopBarProps {
  title: string;
  titleIcon: React.ReactNode;
  actions?: ActionButtonProps[];
  handleDrawerToggle: () => void;
}

export const TopBar = ({
  title,
  titleIcon,
  actions,
  handleDrawerToggle,
}: TopBarProps) => {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar
      position="sticky"
      sx={{
        background: theme.palette.background.topBar,
        alignContent: "center",
        width: "100%",
        top: "0",
        right: "0",
        paddingX: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"} maxWidth={"935px"} my={2.7}>
        <Box>
          <Box display={"flex"} alignItems="center" mb={0.5}>
            {!isUpMd && (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <Box mr={1} mt={0.5} color={"white"}>
                  <MenuIcon fontSize="large" />
                </Box>
              </IconButton>
            )}
            {isUpMd && (
              <Box mr={1} mt={0.5}>
                {titleIcon}
              </Box>
            )}
            <Typography variant="h4" component="h1" ml={2}>
              {title}
            </Typography>
          </Box>

          <Stack direction="row" spacing={"9px"}>
            {actions?.map((action) => (
              <ActionButton key={action.text} {...action} />
            ))}
          </Stack>
        </Box>
      </Box>
    </AppBar>
  );
};
