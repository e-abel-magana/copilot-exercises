import Alert from "../Alert";
import styles from "./StockAlerts.module.scss";
import { Button } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import useStockContext from "../../context/StockContext/useStockContext";

const StockAlerts = () => {
  const { stock, alerts, handleUpdateModal: onUpdate } = useStockContext();

  const outOfStockItems = stock.filter((item) => +item.quantity === 0);

  return (
    <div>
      {alerts.map((alert) => (
        <Alert key={alert.id} message={alert.message} type={alert.type} />
      ))}
      <div className={styles.outOfStock}>
        <div>
          {outOfStockItems.length > 0 && (
            <Alert
              message={
                "Some items is out of stock! Please replenish the item(s) below"
              }
              type={"warning"}
              clear={false}
            />
          )}
        </div>
        {outOfStockItems.map((item) => (
          <div key={item.id}>
            {+item.quantity === 0 && (
              <>
                <div className={styles.outOfStockItems}>
                  <p className={styles.column1} key={item.id}>
                    {item.name} is out of stock!
                  </p>
                  <Button
                    data-testid="update-modal-stock-button"
                    className={styles.column2}
                    onClick={() => onUpdate(item, "showOnlyQuantity")}
                  >
                    <EditIcon />
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Integrate alert system to notify users when stock quantities of items reach zero, allowing for timely replenishment.
// Display a message for each item that has a quantity of zero.

export default StockAlerts;
