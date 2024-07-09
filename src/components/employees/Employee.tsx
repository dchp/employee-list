import { Avatar, Box, Card, CardHeader, useTheme } from "@mui/material";

interface EmployeeProps {
  name: string;
  surname: string;
  position: string;
  isNotEmployed?: boolean;
}

const Employee = ({
  name,
  surname,
  position,
  isNotEmployed,
}: EmployeeProps) => {
  const theme = useTheme();

  return (
    <Box m={"6px"} sx={{ minWidth: "205px" }}>
      <Card
        sx={{ backgroundColor: theme.palette.grey[100], borderRadius: 1 }}
        elevation={0}
      >
        <CardHeader
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
    </Box>
  );
};

export default Employee;
