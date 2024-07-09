import theme from "@/theme/theme";
import { Button, useMediaQuery } from "@mui/material";

export interface ActionButtonProps {
  icon: React.ReactNode;
  text: string;
  shortText?: string;
  isSecondary?: boolean;
}

const ActionButton = ({
  icon,
  text,
  shortText,
  isSecondary,
}: ActionButtonProps) => {
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Button
      variant="contained"
      color={isSecondary ? "secondary" : "primary"}
      startIcon={icon}
    >
      {isUpMd ? text : shortText ?? text}
    </Button>
  );
};

export default ActionButton;
