import { create } from 'zustand';

const useModalStore = create((set) => ({
  // Confirm
  confirmVisible: false,
  confirmMessage: "",
  onConfirm: null,
  showConfirm: (message, callback) =>
    set({ confirmVisible: true, confirmMessage: message, onConfirm: () => { callback(); set({ confirmVisible: false }); } }),
  hideConfirm: () => set({ confirmVisible: false }),

  // Alert
  alertVisible: false,
  alertMessage: "",
  showAlert: (message) => set({ alertVisible: true, alertMessage: message }),
  hideAlert: () => set({ alertVisible: false }),
}));
export const usePasswordModalStore = create((set) => ({
  visible: false,             // 모달 표시 여부
  message: "",                // 필요시 메시지
  onConfirm: null,            // 확인 콜백
  onCancel: null,             // 취소 콜백

  showModal: (message, onConfirm, onCancel) =>
    set({ visible: true, message, onConfirm, onCancel }),

  hideModal: () => set({ visible: false, message: "", onConfirm: null, onCancel: null }),
}));
export const useAttendanceModalStore = create((set) => ({
  visible: false,       // 모달 보이기 여부
  message: "",          // 모달 메시지
  onCancel: null,       // 취소 시 실행할 함수
  viewModal: (message = "", onCancel = null) =>
    set({ visible: true, message, onCancel }),
  hideModal: () =>
    set({ visible: false, message: "", onCancel: null }),
}));
export default useModalStore;
