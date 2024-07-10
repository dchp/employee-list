import theme from "@/theme/theme";
import { Button, useMediaQuery } from "@mui/material";

export interface ActionButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  shortText?: string;
  isSecondary?: boolean;
}

const ActionButton = ({
  icon,
  text,
  onClick,
  shortText,
  isSecondary,
}: ActionButtonProps) => {
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Button
      variant="contained"
      color={isSecondary ? "secondary" : "primary"}
      startIcon={icon}
      onClick={onClick}
    >
      {isUpMd ? text : shortText ?? text}
    </Button>
  );
};

export default ActionButton;
