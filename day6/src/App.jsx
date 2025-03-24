import Header from './components/header';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <Header title="My Fruit List" />
      <List items={fruits} />
      <Footer text="© 2025 Shmebulaks's Mini React App" />
    </div>
  );
}

export default App;
