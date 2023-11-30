import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-full">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" fill src="/logo.png" />
      </div>
      <div className="text-sm text-muted-foregoround">
        Fusion AI is thinking ...
      </div>
    </div>
  );
};
