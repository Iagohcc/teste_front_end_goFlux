import create from "zustand";

const searchStore = create((set) => ({
  search: [],

  addSearch: (search) => {
    set((state) => ({ search: [...state.search, search] }));
  },
}));

export default searchStore;
