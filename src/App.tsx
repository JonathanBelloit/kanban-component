import DashBoard from "./components/DashBoard"
import TopBar from "./components/TopBar"
import Login from "./components/auth/Login"
import useAuth from "./hooks/useAuth"

function App() {
  const { user, loading } = useAuth();
  return (
    <>
      { loading && <div>Loading...</div> }
      { !user && <Login /> }
      { user && (
        <>
          <TopBar />
          <DashBoard />
        </>
      )}
    </>
  )
}

export default App
