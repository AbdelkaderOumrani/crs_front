import { AuthProvider } from "./contexts/AuthContext";
import MainRouter from "./routes/MainRouter";
import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";

const App = () => (
  <AuthProvider>
    <ConfigProvider locale={frFR}>
      <MainRouter />
    </ConfigProvider>
  </AuthProvider>
);

export default App;
