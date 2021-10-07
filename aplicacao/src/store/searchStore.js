import create from "zustand";

const searchStore = create((set) => ({
  search: '',

  addSearch: (search) => {
    console.log(search)
    set({ search: search });
  },
}));

export default searchStore;
