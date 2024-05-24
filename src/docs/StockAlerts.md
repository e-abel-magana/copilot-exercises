Generate complete documentation in .md file for the StockAlerts component
Provide a documentation regarding component usage, props usage and button and field usage
Descibe the useState and useEffect hooks used in the component
Describe the use of React context in the component
Path: bakery-inventory/docs/StockAlerts.md

# StockAlerts Component

The StockAlerts component is used to display alerts for items that are out of stock. It also provides a button to acknowledge the alert and update the stock quantity.

## Usage

```jsx
import StockAlerts from "./StockAlerts";

function App() {
  return (
    <StockAlerts />
  );
}

export default App;
```
## Props

The StockAlerts component does not accept any props.

## Button and Field Usage

The StockAlerts component does not contain any buttons or fields.

## useState and useEffect Hooks

The StockAlerts component uses the following state variables:

- `stock`: An array of stock items.
- `alerts`: An array of alert messages.
- `showOnlyQuantity`: A boolean value to show only the quantity of an item.

The StockAlerts component uses the following effect hooks:

- `useEffect`: To update the stock items and alerts.

## React Context

The StockAlerts component uses the StockContext to access the stock items and alerts.

The StockContext provides the following values:

- `stock`: An array of stock items.
- `alerts`: An array of alert messages.
- `handleUpdateModal`: A function to update the stock quantity.

The StockAlerts component uses the `handleUpdateModal` function to acknowledge the alert and update the stock quantity.

The StockAlerts component displays an alert message for each item that has a quantity of zero. It also provides a button to acknowledge the alert and update the stock quantity.

The StockAlerts component is used to notify users when stock quantities of items reach zero, allowing for timely replenishment. It displays a message for each item that has a quantity of zero.

The StockAlerts component integrates an alert system to notify users when stock quantities of items reach zero, allowing for timely replenishment. It displays a message for each item that has a quantity of zero. It also provides a button to acknowledge the alert and update the stock quantity.
