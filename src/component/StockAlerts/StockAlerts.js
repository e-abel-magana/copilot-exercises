import { useContext } from 'react';
import { StockContext } from '../../context/StockContext';
import Alert from '../Alert';

const StockAlerts = () => {
  const { stock, alerts } = useContext(StockContext);
  return (
    <div>
        {alerts.map(alert => <Alert key={alert.id} message={alert.message} type={alert.type} />)}
        {stock.map(item => (
            +item.quantity === 0 && <p key={item.id}>{item.name} is out of stock!</p>
        ))}
    </div>
  );
};

export default StockAlerts;