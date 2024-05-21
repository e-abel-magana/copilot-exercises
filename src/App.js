// App.js
import styles from "./App.module.scss";
import ItemList from "./component/ItemList";

import Typography from "@mui/material/Typography";
import StockAlerts from "./component/StockAlerts";

function App() {
  return (
    <div className={styles.root}>
      <Typography variant="h2">Bakery Inventory Management System</Typography>
      <StockAlerts />

      <ItemList />
    </div>
  );
}

export default App;
