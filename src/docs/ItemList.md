Generate complete documentation in .md file for the ItemList component
Provide a documentation regarding component usage, props usage and button and field usage
Descibe the useState and useEffect hooks used in the component
Describe the use of React context in the component
Path: bakery-inventory/src/component/ItemList/ItemList.md

# ItemList Component

The ItemList component displays a list of items in a table format. It also provides a search bar to filter the items by name. The component also includes buttons to add a new item and update an existing item.

## Usage

```jsx
import ItemList from "./ItemList";

function App() {
  return (
    <div>
      <ItemList />
    </div>
  );
}
```
## Props

The ItemList component does not accept any props.

## Button Usage

- **Add Item**: Clicking this button opens a modal to add a new item.
- **Search**: Enter text in the search bar to filter items by name.

## Field Usage

- **Search**: Enter text in the search bar to filter items by name.

## useState and useEffect Hooks

- **useState**: The component uses the `useState` hook to manage the search text entered by the user.
- **useEffect**: The component does not use the `useEffect` hook.

## React Context

The ItemList component uses the `useStockContext` hook to access the stock items, item to update, and modal visibility state from the context.

## Example

```jsx
import React from "react";
import ItemList from "./ItemList";

function App() {
  return (
    <div>
      <ItemList />
    </div>
  );
}

export default App;
```