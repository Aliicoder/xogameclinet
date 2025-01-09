import { SignIn } from "@clerk/clerk-react";
import Grid from "../components/styled/Grid";

const LoginPage = () => {
  return ( 
    <>
      <Grid className="w-[100vw] h-[100vh] bg-black ">
        <div className="place-self-center">
          <SignIn/>
        </div>
      </Grid>
    </>
   );
}
 
export default LoginPage;