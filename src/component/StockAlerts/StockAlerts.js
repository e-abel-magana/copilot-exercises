import { useContext } from 'react';
import { StockContext } from '../../context/StockContext';
import Alert from '../Alert';
import styles from './StockAlerts.module.scss';

const StockAlerts = () => {
  const { stock, alerts } = useContext(StockContext);
  return (
    <div>
        {alerts.map(alert => <Alert key={alert.id} message={alert.message} type={alert.type} />)}
        <div className={styles.outOfStock}>
          {stock.map(item => (
              +item.quantity === 0 && <p key={item.id}>{item.name} is out of stock!</p>
          ))}
        </div>
    
    </div>
  );
};

// Integrate alert system to notify users when stock quantities of items reach zero, allowing for timely replenishment.
// Display a message for each item that has a quantity of zero.



export default StockAlerts;