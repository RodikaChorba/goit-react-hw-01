import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friend from "./friend.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;