import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import styles from "./AddItem.module.scss";

import useStockContext from "../../context/StockContext/useStockContext";

function AddItem() {
  const { handleAddItem: onAdd, handleCloseAddModal: onClose } =
    useStockContext();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name || !description || !quantity || !price) {
      alert("All fields are required");
      return;
    }

    onAdd({ name, description, quantity, price });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <div className={styles.body}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            required
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            required
            InputProps={{ inputProps: { min: 0 } }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button data-testid="modal-cancel-button" onClick={onClose}>
          Cancel
        </Button>
        <Button data-testid="modal-add-button" onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItem;
