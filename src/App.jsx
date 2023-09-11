import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
