import Employee from "./Employee";

type Team = {
  id: string;
  name: string | null;
  employees: Employee[];
  subteams: Team[];
};

export default Team;
