import "./assets/style.scss";
import {useRoutes} from "./routes";
import {AuthContext} from "./context/authContext";
import {useContext} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {ToastContainer} from "react-toastify";


function App() {
  const context = useContext(AuthContext);
  const routes = useRoutes(context.user);


  return (
      <ThemeProvider
          theme={createTheme({
            breakpoints: {
              values: {
                  mobile: 420,
                  tablet: 768,
                  laptop: 1024,
                  desktop:1440
              },
            },
          })}
      >
          <div>
              {routes}
              <ToastContainer />
          </div>
      </ThemeProvider>
  );
}

export default App;
