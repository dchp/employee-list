import { Container } from "@mui/material";
import TeamType from "@/types/Team";
import Team from "@/components/teams/Team";
import { GetServerSideProps } from "next";
import TeamWithEmployeesDb, {
  getTeamsFromTeamsDb,
} from "@/types/supabase/TeamWithEmployeesDb";

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
  return (
    <>
    </>
  );
};

export default Teams;
