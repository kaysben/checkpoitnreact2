import './App.css';
import Profile from'./component/profile/FullName.js';
import Photos from'./component/profile/ProfilePhoto.js';
import Address from'./component/profile/Address.js';
function App() {
  return (
    <div className="App">
     <Photos/>
     <Profile/>
     <Address/>
    </div>
  );
}

export default App;
