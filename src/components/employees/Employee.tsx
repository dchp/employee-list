import { Avatar, Card, CardHeader, useTheme } from "@mui/material";
import EmployeeToggleButton from "./EmployeeToggleButton";

interface EmployeeProps {
  name: string;
  surname: string;
  position: string;
  isNotEmployed?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const Employee = ({
  name,
  surname,
  position,
  isNotEmployed,
  isSelected,
  onClick,
}: EmployeeProps) => {
  const theme = useTheme();

  return (
    <EmployeeToggleButton
      value="check"
      selected={isSelected}
      onChange={onClick}
    >
      <Card elevation={0} sx={{ backgroundColor: "transparent" }}>
        <CardHeader
          sx={{ padding: "3px" }}
          avatar={
            <Avatar
              sx={{
                bgcolor: isNotEmployed
                  ? theme.palette.grey[400]
                  : theme.palette.primary.main,
              }}
              content={name[0]}
            />
          }
          title={`${name} ${surname}`}
          subheader={position}
        />
      </Card>
    </EmployeeToggleButton>
  );
};

export default Employee;
