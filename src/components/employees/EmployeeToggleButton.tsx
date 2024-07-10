import theme from "@/theme/theme";
import styled from "@emotion/styled";
import { ToggleButton } from "@mui/material";

const EmployeeToggleButton = styled(ToggleButton)(({ theme: Theme }) => ({
  textTransform: "none",
  justifyContent: "flex-start",
  textAlign: "left",
  minWidth: "200px",
  margin: "6px",
  backgroundColor: theme.palette.grey[50],
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#aee7f9",
  },
}));

export default EmployeeToggleButton;
