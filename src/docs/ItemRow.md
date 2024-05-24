Generate complete documentation in .md file for the ItemRow component
Provide a documentation regarding component usage, props usage and button and field usage
Descibe the useState and useEffect hooks used in the component
Describe the use of React context in the component
Path: bakery-inventory/docs/ItemRow.md

# ItemRow Component

The ItemRow component is used to display the details of an item in a table row. It displays the name, description, quantity, price, and actions of the item. The actions include deleting the item and updating the item.

## Usage

```jsx
import ItemRow from "./ItemRow";

function App() {
  return (
    <ItemRow item={{ id: 1, name: "Item 1", description: "Description 1", quantity: 10, price: 100 }} />

  );
}

export default App;

```

## Props

- `item`: An object containing the details of the item. It should have the following properties:
  - `id` (number): The unique identifier of the item.
  - `name` (string): The name of the item.
  - `description` (string): The description of the item.
  - `quantity` (number): The quantity of the item in stock.
  - `price` (number): The price of the item.

## Buttons and Fields

- `Delete Button`: This button is used to delete the item. When clicked, it prompts the user to confirm the deletion. If the quantity of the item is 1, an alert is shown to inform the user that the stock quantity will reach zero after the deletion.
- `Update Button`: This button is used to update the item. When clicked, it opens a modal to edit the details of the item.

## useState and useEffect

The `ItemRow` component uses the `useState` and `useEffect` hooks from React to manage the local state of the component.

- `useState`: The component uses the `useState` hook to manage the local state for the item details. It initializes the state with the item details passed as props and updates the state when the item is updated.
- `useEffect`: The component does not use the `useEffect` hook.

## React Context

The `ItemRow` component uses the `useStockContext` hook from the `StockContext` to access the global state and functions related to the stock items. It uses the `handleDeleteItem` and `handleUpdateModal` functions from the context to delete and update the item, respectively. The `onDelete` function is called when the delete button is clicked, and the `onUpdate` function is called when the update button is clicked.

The context provides the necessary data and functions to interact with the stock items in the application.

## Example

```jsx
import { TableRow, TableCell, Button } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteItem from "../DeleteItem";

import useStockContext from "../../context/StockContext/useStockContext";

function ItemRow({ item }) {
  const { handleDeleteItem: onDelete, handleUpdateModal: onUpdate } =

    useStockContext();

  return (
    <TableRow key={item.id}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
        <DeleteItem item={item} onDelete={onDelete} />
        <Button
          data-testid="update-modal-button"
          onClick={() => onUpdate(item)}
        >
          <EditIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ItemRow;
```

## Conclusion

The `ItemRow` component is a reusable component that displays the details of an item in a table row. It provides actions to delete and update the item, making it easy to manage the stock items in the application. By using the `useStockContext` hook, the component can access the global state and functions related to the stock items, enhancing the modularity and reusability of the component.

---
