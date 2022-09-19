import create from 'zustand'


export interface IUIStore {
  isDarkMode: boolean;
  isNotificationModalOpen: boolean;

  toggleDarkMode: () => void;
  closeNotificationModal: () => void;
  openNotificationModal: () => void;
}


const useUIStore = create<IUIStore>((set) => ({
  isDarkMode: true,
  isNotificationModalOpen: false,

  toggleDarkMode: () => set((state) => ({ ...state, isDarkMode: !state.isDarkMode })),
  closeNotificationModal: () => set((state) => ({ ...state, isNotificationModalOpen: false })),
  openNotificationModal: () => set((state) => ({ ...state, isNotificationModalOpen: true })),
}));

export default useUIStore;