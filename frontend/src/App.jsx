import React from "react";
import AppRouter from "./routes/AppRoutes";
import { UserProvider } from "./context/user.context";

const App = () => {
  return (
    <div>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
};

export default App;
