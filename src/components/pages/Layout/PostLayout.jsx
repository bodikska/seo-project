import { Outlet } from "react-router-dom";


function PostLayout(){
    return(
            <>
              {/* <PostHeader /> */}
              <main>
                <Outlet />
              </main>
              {/* <Footer /> */}
                </>
    )
}

export default PostLayout;