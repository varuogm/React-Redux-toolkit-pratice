import './App.scss';
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';
import Theme from './features/theme/Theme';
import { useSelector } from "react-redux"

function App() {
  const themeTextColor = useSelector((state) => state.theme.color)

  return (
    <div className="App" style={{ background: themeTextColor }}>
      <div> 🐾Gourav redux-toolkit practice 🐾</div>
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
