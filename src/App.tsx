import supaBase from "./api/supabaseClient";
import { Router } from "./router/Router";

const App = () => {
  console.log(supaBase);
  return <Router />;
};

export default App;
