import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import AccountInfo from "./pages/AccountInfo";
import ChangeEmail from "./pages/ChangeEmail";
import Password from "./pages/Password";

const MainProfile = () => {
  const [active, setActive] = useState("profile")
  return (
    <main className="flex lg:flex-nowrap md:flex-nowrap flex-wrap gap-4 min-h-[400px]">
      <Sidebar activePath={(e) => {
        setActive(e.path);
      }} />
      <div className="w-full md:px-20">
        {active == "profile" && <Profile activePath={(e) => {
          setActive(e.path);
        }} />}
        {active == "account info" && <AccountInfo />}
        {active == "change email" && <ChangeEmail currentEmail={"johnnie.vehe@gmail.com"} />}
        {active == "password" && <Password />}
      </div>
    </main>
  )
}

export default MainProfile;