// App.js
import './App.scss';
import ItemList from './ItemList';
import AddItem from './AddItem';

import Typography from '@mui/material/Typography';
import StockAlerts from './StockAlerts';

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