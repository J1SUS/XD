import './App.css';
import Midbar from './midbar/Midbar';
import Navbar from './navbar/navbar';
import Banner from './banner/Banner'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Midbar />
    </div>
  );
}

export default App;
