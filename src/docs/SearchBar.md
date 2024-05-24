Generate complete documentation in .md file for the SearchBar component
Provide a documentation regarding component usage, props usage and button and field usage
Descibe the useState and useEffect hooks used in the component
Describe the use of React context in the component
Path:  bakery-inventory/docs/SearchBar.md

# SearchBar Component

The SearchBar component is a reusable component that provides a search input field to search for items in the inventory list.

## Usage

The SearchBar component is used in the ItemList component to filter the items based on the search input.

```jsx
import SearchBar from "./SearchBar";

function ItemList() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );

}
```
## Props

The SearchBar component accepts the following props:

- `value`: The value of the search input field.
- `onChange`: The event handler function to handle the change event of the search input field.

## Button and Field Usage

The SearchBar component uses the TextField component from the Material-UI library to render the search input field. The TextField component is styled with the SearchIcon component from the Material-UI library to display a search icon in the input field.

## useState and useEffect Hooks

The SearchBar component uses the `useState` hook to manage the state of the search input field. The `value` prop is used to set the initial value of the search input field, and the `onChange` prop is used to update the state of the search input field when the user types in the input field.

## React Context

The SearchBar component does not directly use React context. It receives the `value` and `onChange` props from the parent component (ItemList) via props drilling. The `value` prop is used to set the value of the search input field, and the `onChange` prop is used to handle the change event of the search input field in the parent component.

## Example

The following example demonstrates the usage of the SearchBar component in the ItemList component:

```jsx
import SearchBar from "./SearchBar";

function ItemList() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );

}
```
