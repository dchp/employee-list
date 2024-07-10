import EmployeeType from "@/types/Employee";
import TeamType from "@/types/Team";
import {
  Typography,
  Box,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Employee from "../employees/Employee";

interface TeamProps {
  name: string;
  employees: EmployeeType[];
  subteams: TeamType[];
}

const Team = ({ name, employees, subteams }: TeamProps): JSX.Element => {
  return (
    <Box my={2}>
      <Accordion defaultExpanded={false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="team-header"
          aria-controls="team-content"
        >
          <Typography variant="h6" align="center">
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="team-content">
          <Box display="flex" flexWrap="wrap" px={1}>
            {employees.map((e) => (
              <Employee
                key={e.id}
                name={e.name}
                surname={e.surname}
                position={e.position ?? ""}
                isNotEmployed={e.ended}
              />
            ))}
          </Box>
          {subteams.map((team) => (
            <Box mx={1} key={team.id}>
              <Team
                name={team.name ?? ""}
                employees={team.employees}
                subteams={team.subteams}
              />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Team;
