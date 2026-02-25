import { Outlet } from "react-router-dom";
import HomePageHeader from "../../HomePageHeader/HomePageHeader";


function HomeLayout() {
  return (
    <>
      <HomePageHeader />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default HomeLayout;