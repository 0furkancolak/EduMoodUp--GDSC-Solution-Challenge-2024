import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-screen h-[calc(100vh-80px)] flex items-center justify-center">
      <Spinner size="lg" label="Loading..." color="warning" />
    </div>
  );
}
