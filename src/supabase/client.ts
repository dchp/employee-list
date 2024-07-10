import { createClient } from "@supabase/supabase-js";
import Database from "./types/Database";

const API_URL = "https://nktebdhspzvpwguqcksn.supabase.co/";
const API_KEY = "";

export const supabaseClient = createClient<Database>(API_URL, API_KEY);
