import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import { Layout } from "./style"

const index = () => {
  return (
    <>
      <Layout>
        <Header/>
        <Outlet/>
      </Layout>
    </>  
  )
}

export default index