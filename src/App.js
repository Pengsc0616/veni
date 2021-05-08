
import './App.css';
import Header from './component/Header'
import CreatorSidebar from './component/CreatorSidebar'
import CreatorIntro from './component/CreatorIntro'
import CreatorWork from './component/CreatorWork'
import CreatorPayment from './component/CreatorPayment'
import CreatorChat from './component/CreatorChat'
import Login from './component/Login'
import { useStateValue } from "./component/StateProvider"

function App() {
  const [ {user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
      <Header/>
      <div className="app__body">
        app__body
        {/* <CreatorSidebar /> */}
        <CreatorIntro />
        <CreatorWork />
        <CreatorPayment />
        <CreatorChat />
      </div>
      {/* <CreatorChat /> */}
      </>
      )}
    </div>
  );
}

export default App;
