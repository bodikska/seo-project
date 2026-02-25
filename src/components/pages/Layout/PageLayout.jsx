import { Outlet } from "react-router-dom";

function PageLayout() {
    return(
        <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
        </>
    )
}

export default PageLayout;