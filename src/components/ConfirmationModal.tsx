import { X } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: "danger" | "warning" | "info";
}

const ConfirmationModal = ({
  isOpen,
  title = "Confirm Action",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  variant = "warning",
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  const getConfirmButtonClasses = () => {
    const baseClasses = "px-4 py-2 rounded-lg transition-colors font-medium";
    switch (variant) {
      case "danger":
        return `${baseClasses} bg-confirmButton hover:bg-confirmButtonHover text-confirmButtonText`;
      case "warning":
        return `${baseClasses} bg-warningButton hover:bg-warningButtonHover text-warningButtonText`;
      case "info":
        return `${baseClasses} bg-infoButton hover:bg-infoButtonHover text-infoButtonText`;
      default:
        return `${baseClasses} bg-confirmButton hover:bg-confirmButtonHover text-confirmButtonText`;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-modalBg border border-modalBorder rounded-lg p-6 max-w-sm mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-modalText">{title}</h3>
          <button
            onClick={onCancel}
            className="text-modalText hover:text-modalTextHover transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-modalText mb-6">{message}</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-cancelButton hover:bg-cancelButtonHover text-cancelButtonText rounded-lg transition-colors font-medium"
          >
            {cancelText}
          </button>
          <button onClick={onConfirm} className={getConfirmButtonClasses()}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
