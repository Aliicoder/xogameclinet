import { Route ,Routes } from "react-router-dom"
import MenuPage from "./pages/MenuPage"
import OfflineGameBoardPage from "./pages/OfflineGameBoardPage"
import LoginPage from "./pages/LoginPage"
import ErrorPage from "./pages/ErrorPage"
import OnlineGameBoardPage from "./pages/OnlineGameBoardPage"
import { SignedIn, SignedOut } from "@clerk/clerk-react"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage/>} />
      <Route path="/offline" element={<OfflineGameBoardPage/>} />
      <Route path="/login" element ={<LoginPage/>}/>
      <Route path="/online/:roomId" element={
        <>
          <SignedIn>
            <OnlineGameBoardPage/>
          </SignedIn> 
          <SignedOut>
            <LoginPage/>
          </SignedOut>
        </>
      } />
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
  )
}

export default App
