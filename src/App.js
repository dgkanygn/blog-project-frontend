import "./App.css";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

import { Routes, Route } from "react-router-dom";
import NewPostPage from "./pages/NewPostPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DeleteProfile from "./pages/DeleteProfile";
import { useContext, useState } from "react";
import SignPopUp from "./components/SignPopUpModal";
import DataContext from "./Context/DataContext.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const { signPopUpCheck } = useContext(DataContext);

  const [contentEvent, setContentEvent] = useState();

  return (
    <div className="App">
      {signPopUpCheck && <SignPopUp />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              contentEvent={contentEvent}
              setContentEvent={setContentEvent}
            />
          }
        />
        <Route path="/content/:id" element={<PostPage />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/newPostPage"
          element={
            <PrivateRoute>
              <NewPostPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/deleteProfile"
          element={
            <PrivateRoute>
              <DeleteProfile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
