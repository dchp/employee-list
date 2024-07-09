import EmployeeType from "@/types/Employee";
import TeamType from "@/types/Team";
import {
  Typography,
  Box,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Employee from "../employees/Employee";
import dynamic from "next/dynamic";

const Accordion = dynamic(() => import("@mui/material/Accordion"), {
  ssr: false,
});

interface TeamProps {
  name: string;
  employees: EmployeeType[];
  subteams: TeamType[];
}

const Team = ({ name, employees, subteams }: TeamProps): JSX.Element => {
  return (
    <Box my={2}>
      <Accordion
        defaultExpanded={false}
        sx={{
          "&.MuiAccordion-root": {
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, .125)",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" align="center">
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
