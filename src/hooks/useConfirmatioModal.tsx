import { useState } from "react";

interface ModalConfig {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "warning" | "info";
}

interface ModalState extends ModalConfig {
  isOpen: boolean;
}

export const useConfirmationModal = () => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    message: "",
  });

  const openModal = (config: ModalConfig) => {
    setModal({
      isOpen: true,
      ...config,
    });
  };

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const confirm = (config: ModalConfig): Promise<boolean> => {
    return new Promise((resolve) => {
      setModal({
        isOpen: true,
        ...config,
      });

      // Store the resolve function to be called later
      (window as any).__modalResolve = resolve;
    });
  };

  const handleConfirm = () => {
    if ((window as any).__modalResolve) {
      (window as any).__modalResolve(true);
      delete (window as any).__modalResolve;
    }
    closeModal();
  };

  const handleCancel = () => {
    if ((window as any).__modalResolve) {
      (window as any).__modalResolve(false);
      delete (window as any).__modalResolve;
    }
    closeModal();
  };

  return {
    modal,
    openModal,
    closeModal,
    confirm,
    handleConfirm,
    handleCancel,
  };
};
