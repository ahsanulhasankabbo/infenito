import './App.css';
import ClientReview from './Components/ClientReview/ClientReview';
import Contract from './Components/Contract/Contract';
import Doubt from './Components/Doubt/Doubt';
import Footer from './Components/Footer/Footer';
import Infenito from './Components/Infenito/Infenito';
import Navbar from './Components/Navbar/Navbar';
import PopularTags from './Components/PopularTags/PopularTags';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Infenito></Infenito>
      <PopularTags></PopularTags>
      <Services></Services>
      <Doubt></Doubt>
      <ClientReview></ClientReview>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
}

export default App;
