Generate complete documentation in .md file for the DeleteItem component
Provide a documentation regarding component usage, props usage and button and field usage

# DeleteItem Component

The DeleteItem component is used to delete an item from the inventory.

## Usage

```jsx
import DeleteItem from "./DeleteItem";

function App() {
  return <DeleteItem />;
}
```

## Props

- `item` (object): The item to be deleted.
- `onDelete` (function): The function to be called when the item is deleted.

## Button Usage

- Click the delete button to delete the item.
- A confirmation dialog will be shown before deleting the item.

## Field Usage

- No fields are used in this component
