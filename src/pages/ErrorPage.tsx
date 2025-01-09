import { useNavigate } from "react-router-dom";
import Grid from "../components/styled/Grid";

const ErrorPage = () => {
  const navigate = useNavigate()
  return ( 
    <Grid className="w-[100svw] h-[100svh]">
      <h1>NOT FOUND 404</h1>
      <h2 onClick={()=>navigate("/")}>go back</h2>
    </Grid>
   );
}
 
export default ErrorPage;