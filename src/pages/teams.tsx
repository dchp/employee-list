import { Dialog, DialogContent } from "@mui/material";
import TeamType from "../types/Team";
import Team from "@/components/teams/Team";
import TeamWithEmployeesDb, {
  getTeamsFromTeamsDb,
} from "@/supabase/types/TeamWithEmployeesDb";
import PageContent from "@/components/layout/PageContent";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";
import { TeamAdd } from "@/components/teams/TeamAdd";
import { EmployeeAdd } from "@/components/employees/EmployeeAdd";
import { supabaseClient } from "@/supabase/client";

const loadTeams = async (): Promise<TeamType[]> => {
  try {
    const { data } = await supabaseClient
      .from("teams")
      .select("*,employees(*)")
      .returns<TeamWithEmployeesDb[]>();

    return getTeamsFromTeamsDb(data ?? []);
  } catch (error) {
    console.error("Error loading teams.", error);
    return [];
  }
};

const Teams = (): JSX.Element => {
  const [showFormNewTeam, setShowFormNewTeam] = useState(false);
  const [showFormNewEmployee, setShowFormNewEmployee] = useState(false);
  const [reloadTeams, setReloadTeams] = useState(true);
  const [teams, setTeams] = useState<TeamType[]>([]);
  useEffect(() => {
    if (!reloadTeams) {
      return;
    }
    async function fetchData() {
      const teams = await loadTeams();
      setTeams(teams);
    }
    fetchData();
    setReloadTeams(false);
  }, [reloadTeams]);

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
          <TeamAdd
            teams={teams}
            onSuccess={() => {
              setReloadTeams(true);
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={showFormNewEmployee}
        onClose={() => setShowFormNewEmployee(false)}
      >
        <DialogContent>
          <EmployeeAdd
            teams={teams}
            onSuccess={() => {
              setReloadTeams(true);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Teams;
