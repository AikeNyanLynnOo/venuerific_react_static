import { Spinner } from "@nextui-org/spinner";

interface LoadingProps {
  color?: any;
}

export const Loading = ({ color }: LoadingProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner color={color || "default"} size="md" />
    </div>
  );
};
