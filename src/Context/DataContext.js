import { createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  const [signPopUpCheck, setSignPopUpCheck] = useState(false);
  const [warning, setWarning] = useState("");
  const [userInformation, setUserInformation] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  const [contentEvent, setContentEvent] = useState();

  const [userID, setUserID] = useState();

  const [thisContentComments, setThisContentComments] = useState([]);

  const [likeCount, setLikeCount] = useState();

  const [currentContent, setCurrentContent] = useState();

  const [editCheck, setEditCheck] = useState(false);
  const [contentEditInfo, setContentEditInfo] = useState({
    title: "",
    description: "",
    newContent: "",
    contentID: "",
  });

  const [buttonWaitAnimation, setButtonWaitAnimation] = useState(false);

  const data = {
    signPopUpCheck,
    setSignPopUpCheck,
    warning,
    setWarning,
    userInformation,
    setUserInformation,
    userToken,
    setUserToken,
    isLogin,
    setIsLogin,
    contentEvent,
    setContentEvent,
    thisContentComments,
    setThisContentComments,
    likeCount,
    setLikeCount,
    currentContent,
    setCurrentContent,
    contentEditInfo,
    setContentEditInfo,
    editCheck,
    setEditCheck,
    buttonWaitAnimation,
    setButtonWaitAnimation,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
