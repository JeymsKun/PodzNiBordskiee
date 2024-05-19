import Header from './components/Header';
import Welcome from './components/Welcome';
import Slideshow from './components/Slideshow';
import Latest from './components/Latest';
import LatestTitle from './components/LatestTitle';
import Search from './components/Search';
// import FoodDetails from './components/FoodDetails';
import Bottom from './components/Bottom';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Slideshow />
      <Latest />
      <LatestTitle />
      <Search />
      {/* <FoodDetails /> */}
      <Bottom />
    </>

  );
}

export default App;