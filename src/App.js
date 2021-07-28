import './App.css';
import Banner2 from './banner2/Banner-2';
import Midbar from './midbar/Midbar';
import Navbar from './navbar/navbar';
import Banner from './banner/Banner'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Midbar />
      <Banner2 />
    </div>
  );
}

export default App;
