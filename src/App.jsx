import './App.css';
import MyFooter from './components/Footer/MyFooter';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  return (
    <div className="App">

      <Navigation />

      <AppRoutes />

      <MyFooter />

    </div>
  );
}

export default App;
