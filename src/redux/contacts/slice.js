import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations"; // Імпортуй logOut action

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
    isLoading: false, // Консистентний прапорець завантаження
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.contacts.items = []; // Очищаємо контакти при logOut
        state.contacts.error = null;
        state.contacts.loading = false;
        state.isLoading = false; // Очищаємо додатковий прапорець завантаження
      });
  },
});

export const contactReducer = contactsSlice.reducer;
