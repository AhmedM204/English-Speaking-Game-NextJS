import { AppleButton } from "./appleButton";

interface AppleCustomTimeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  onChange: (val: string) => void;
  onSave: () => void;
}

export const AppleCustomTimeDialog = ({
  isOpen,
  onClose,
  value,
  onChange,
  onSave,
}: AppleCustomTimeDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-[2rem] p-6 w-full max-w-xs shadow-2xl flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="text-center space-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-black">
            Custom Time
          </h3>
          <p className="text-xs font-medium text-gray-500">
            Enter duration in seconds
          </p>
        </div>

        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="120"
          autoFocus
          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-center text-3xl font-medium tabular-nums text-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-gray-300"
        />

        <div className="flex gap-3 mt-2">
          <AppleButton
            label="Cancel"
            variant="secondary"
            onClick={onClose}
            className="py-3 text-sm"
          />
          <AppleButton
            label="Save"
            variant="primary"
            onClick={onSave}
            className="py-3 text-sm"
          />
        </div>
      </div>
    </div>
  );
};
