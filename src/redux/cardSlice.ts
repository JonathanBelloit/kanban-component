import { CardActionArea } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUserEmail } from "../hooks/useCurrentUserEmail";

export interface CardType {
  title: string;
  description: string;
  status: string;
}
export const addCard = createAsyncThunk("cards/addCard", async (card: CardType) => {
  console.log("addCard", card);
  const currentUser = getCurrentUserEmail();
  return {card}
})

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [] as CardType[],
    loading: "idle" as "idle" | "pending" | "succeeded" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.cards.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Failed to add card";
      })
  }
})

export default cardSlice.reducer;
