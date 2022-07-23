import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './App.css';

function App() {
  return (
    <div className='main-box'>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div className='greetings-random-container'>
        <Greetings lang='de'>Ludwig</Greetings>
        <Greetings lang='fr'>François</Greetings>
      </div>

      <div className='greetings-random-container'>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

      </div>
    </div>
  );
}

export default App;
