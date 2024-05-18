// App.js
import './App.scss';
import ItemList from './component/ItemList';
import AddItem from './component/AddItem';

import Typography from '@mui/material/Typography';
import StockAlerts from './component/StockAlerts';

function App() {
  return (
    <div className="App">
      <Typography variant="h2">Bakery Inventory Management System</Typography>
    
      <StockAlerts />
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;