import AllTasksSVG from "components/shared/icons/AllTasksSVG";
import CompletedTasksSVG from "components/shared/icons/CompletedTasksSVG";
import DailySVG from "components/shared/icons/DailySVG";
import FavoriteTasksSVG from "components/shared/icons/FavoriteTasksSVG";
import LogoutSVG from "components/shared/icons/LogoutSVG";
import UncompletedTasksSVG from "components/shared/icons/UncompletedTasksSVG";
import { logout } from "features/authentication/domain/services/AuthenticationApiService";
import { TaskOverview } from "pages/tasks/TaskOverview";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "store/Store";

export const SidenavBar = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("authToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex ">
      <div className="flex flex-col h-screen p-3 bg-light shadow w-60">
        <div className="space-y-8">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-3 text-sm">
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <DailySVG width={24} height={24} color="#6c757d" />
                  <span>Daily Tasks</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AllTasksSVG
                    width={24}
                    height={24}
                    color="#6c757d"
                  ></AllTasksSVG>
                  <span>All tasks</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FavoriteTasksSVG
                    width={24}
                    height={24}
                    color="#6c757d"
                  ></FavoriteTasksSVG>
                  <span>Favourite tasks</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <CompletedTasksSVG
                    width={24}
                    height={24}
                    color="#6c757d"
                  ></CompletedTasksSVG>
                  <span>Completed tasks</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <UncompletedTasksSVG
                    width={24}
                    height={24}
                    color="#6c757d"
                  ></UncompletedTasksSVG>
                  <span>Uncompleted tasks</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-gray-200 ">
        <Provider store={store}>
          <TaskOverview />
        </Provider>
      </div>
      <div className="p-2 flex flex-col">
        <div className="flex-1">Welcome User</div>
        <div className="flex">
          <div className="self-center">
            <button
              className="bg-primary p-2 w-24 ml-6 flex items-center "
              onClick={onLogout}
            >
              <LogoutSVG width={24} height={24} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
