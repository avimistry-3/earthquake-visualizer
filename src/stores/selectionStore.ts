import { create } from 'zustand'

interface SelectionStore {
    selectedId: string | null
    setSelectedId: (id: string | null) => void
  }
  
  export const useSelectionStore = create<SelectionStore>((set) => ({
    selectedId: null,
    setSelectedId: (id) => set({ selectedId: id }),
  }))


