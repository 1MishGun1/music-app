import { createClient } from "@supabase/supabase-js";

export const BASE_URL = "https://sceatxqiiglepxdhbcaj.supabase.co";
export const BASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZWF0eHFpaWdsZXB4ZGhiY2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwOTc1OTIsImV4cCI6MjA0NzY3MzU5Mn0.a-7pY2EU4RelA15pl4sR4wfMbqUKLbX4yQBLjixTBbM";

const supaBase = createClient(BASE_URL, BASE_KEY);

export default supaBase;
