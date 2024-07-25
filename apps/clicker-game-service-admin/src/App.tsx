import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClickList } from "./click/ClickList";
import { ClickCreate } from "./click/ClickCreate";
import { ClickEdit } from "./click/ClickEdit";
import { ClickShow } from "./click/ClickShow";
import { GameSessionList } from "./gameSession/GameSessionList";
import { GameSessionCreate } from "./gameSession/GameSessionCreate";
import { GameSessionEdit } from "./gameSession/GameSessionEdit";
import { GameSessionShow } from "./gameSession/GameSessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ClickerGameService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Click"
          list={ClickList}
          edit={ClickEdit}
          create={ClickCreate}
          show={ClickShow}
        />
        <Resource
          name="GameSession"
          list={GameSessionList}
          edit={GameSessionEdit}
          create={GameSessionCreate}
          show={GameSessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
