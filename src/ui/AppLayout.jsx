import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <div>
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
