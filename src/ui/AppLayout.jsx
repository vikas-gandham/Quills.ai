import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <div className="w-full fixed mx-auto top-[0%] right-0 left-0 z-[100] border-[#eaeaea] border-b bg-white">
        {isLoading && <Loader />}
        <Header />
      </div>

      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
