
import CustomCursor from "./components/CustomCursor"
import SidebarLeft from "./components/SidebarLeft"
import ServerInfo from "./components/ServerInfo"
import SidebarRight from "./components/SidebarRight"



const Home = () => {
  return (
    <div className="server-body">
      <CustomCursor/>
      <div className="server h-screen w-screen">
        <SidebarLeft/>
        <ServerInfo/>
        <SidebarRight/>
      </div>
    </div>
  )
}

export default Home
