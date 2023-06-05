import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Title from './Components/Title/Title';
import SubTitle from './Components/SubTitle/SubTitle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <Main/>
      <SubTitle/>
      <Footer/>
    </div>
  );
}

export default App;
