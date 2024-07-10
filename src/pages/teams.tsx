import { Container, Dialog, DialogContent } from "@mui/material";
import TeamType from "@/types/Team";
import Team from "@/components/teams/Team";
import { GetServerSideProps } from "next";
import TeamWithEmployeesDb, {
  getTeamsFromTeamsDb,
} from "@/types/supabase/TeamWithEmployeesDb";
import PageContent from "@/components/layout/PageContent";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import { TeamAdd } from "@/components/teams/TeamAdd";
import { EmployeeAdd } from "@/components/employees/EmployeeAdd";

type TeamsProps = {
  teams: TeamType[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const api = process.env.API_URL ?? "";
  const apiKey = process.env.API_KEY ?? "";
  let data: TeamWithEmployeesDb[];

  if (api === "" || apiKey === "") {
    throw new Error("API is not provided.");
  }

  try {
    const response = await fetch(`${api}teams?select=*,employees(*)`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API.");
    }

    data = await response.json();
  } catch (error) {
    throw new Error("Failed to fetch data from API.");
  }

  return {
    props: {
      teams: getTeamsFromTeamsDb(data),
    },
  };
};

const Teams = ({ teams }: TeamsProps): JSX.Element => {
  const [showFormNewTeam, setShowFormNewTeam] = useState(false);
  const [showFormNewEmployee, setShowFormNewEmployee] = useState(false);

  return (
    <>
      <PageContent
        title="Týmy"
        titleIcon={<GroupIcon fontSize="large" />}
        actions={[
          {
            icon: <AddCircleOutlineIcon />,
            text: "Nový tým",
            onClick: () => {
              setShowFormNewTeam(true);
            },
          },
          {
            icon: <AddCircleOutlineIcon />,
            text: "Nový pracovník",
            shortText: "Pracovník",
            onClick: () => {
              setShowFormNewEmployee(true);
            },
          },
          {
            icon: <DeleteOutlineIcon />,
            text: "Smazat zaměstnance",
            shortText: "Smazat",
            isSecondary: true,
            onClick: () => {},
          },
        ]}
      >
        {teams &&
          teams.map((team) => (
            <Team
              key={team.id}
              name={team.name ?? ""}
              employees={team.employees}
              subteams={team.subteams}
            />
          ))}
      </PageContent>
      <Dialog open={showFormNewTeam} onClose={() => setShowFormNewTeam(false)}>
        <DialogContent>
          <TeamAdd teams={teams} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={showFormNewEmployee}
        onClose={() => setShowFormNewEmployee(false)}
      >
        <DialogContent>
          <EmployeeAdd teams={teams} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Teams;
