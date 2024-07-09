interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          createdAt: string;
          endDate: string | null;
          id: string;
          name: string;
          position: string | null;
          startDate: string | null;
          surname: string;
          team: string | null;
        };
        Insert: {
          createdAt?: string;
          endDate?: string | null;
          id?: string;
          name: string;
          position?: string | null;
          startDate?: string | null;
          surname: string;
          team?: string | null;
        };
        Update: {
          createdAt?: string;
          endDate?: string | null;
          id?: string;
          name?: string;
          position?: string | null;
          startDate?: string | null;
          surname?: string;
          team?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "employees_team_fkey";
            columns: ["team"];
            referencedRelation: "teams";
            referencedColumns: ["id"];
          }
        ];
      };
      teams: {
        Row: {
          createdAt: string | null;
          id: string;
          name: string | null;
          parentTeam: string | null;
        };
        Insert: {
          createdAt?: string | null;
          id?: string;
          name?: string | null;
          parentTeam?: string | null;
        };
        Update: {
          createdAt?: string | null;
          id?: string;
          name?: string | null;
          parentTeam?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export default Database;
