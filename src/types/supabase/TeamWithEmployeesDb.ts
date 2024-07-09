import Team from "../Team";
import Database from "./Database";
import TeamDb from "./TeamDb";

interface TeamWithEmployeesDb extends TeamDb {
  employees: Database["public"]["Tables"]["employees"]["Row"][];
}

export function getTeamsFromTeamsDb(teamsDb: TeamWithEmployeesDb[]): Team[] {
  const teamMap: { [key: string]: Team } = {};
  const rootTeams: Team[] = [];

  teamsDb.forEach((teamDb) => {
    if (!teamMap[teamDb.id]) {
      teamMap[teamDb.id] = {
        id: teamDb.id,
        name: teamDb.name,
        employees: teamDb.employees.map((e) => ({
          id: e.id,
          name: e.name,
          surname: e.surname,
          position: e.position,
          ended: e.endDate !== null,
        })),
        subteams: [],
      };
    }

    if (teamDb.parentTeam) {
      if (!teamMap[teamDb.parentTeam]) {
        teamMap[teamDb.parentTeam] = {
          id: teamDb.parentTeam,
          name: "",
          employees: [],
          subteams: [],
        };
      }
      teamMap[teamDb.parentTeam].subteams.push(teamMap[teamDb.id]);
    } else {
      rootTeams.push(teamMap[teamDb.id]);
    }
  });

  return rootTeams;
}

export default TeamWithEmployeesDb;
