import Image from "next/image";

interface ReviewCardProps {
  title?: string;
  text?: string;
  name?: string;
  rating: number;
  position?: string;
  brandImage?: string;
  [otherProp: string]: any;
}

export const ReviewCard = ({
  title,
  text,
  name,
  rating,
  position,
  brandImage,
  ...props
}: ReviewCardProps) => {
  return (
    <div className="p-4 min-w-full md:min-w-[500px] w-fit max-w-[380px] mx-auto bg-white rounded-lg border border-gray-200 h-fit">
      <div className="flex items-center mb-4">
        {/* Star Ratings */}
        <div className="flex text-yellow-500">
          {Array.from({ length: rating }, (_, i) => i + 1).map(
            (star, index) => (
              <svg
                key={index}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.502 4.632h4.867a.75.75 0 01.466 1.34l-3.937 2.869 1.503 4.632a.75.75 0 01-1.152.826l-3.938-2.87-3.937 2.87a.75.75 0 01-1.153-.826l1.503-4.632-3.937-2.87a.75.75 0 01.466-1.34h4.867l1.502-4.632z" />
              </svg>
            ),
          )}
        </div>
      </div>

      {/* Review Title */}
      <h2 className="text-xl font-semibold leading-8 text-secondary-900 mb-3 w-full">
        {title}
      </h2>

      {/* Review Content (Truncated to 3 lines) */}
      <p className="text-sm font-normal leading-5 text-secondary-900 mb-5">
        {text}
      </p>

      <div className="flex justify-between items-center">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Image
            alt={name || ""}
            className="w-10 h-10 rounded-full bg-gray-100"
            height={32}
            src={"/images/icons/user_position.webp"}
            width={32}
          />
          <div>
            <p className="text-secondary-900 text-lg font-semibold leading-7">
              {name}
            </p>
            <p className="text-secondary-600 text-base font-normal leading-6">
              {position}
            </p>
          </div>
        </div>

        {/* Logo */}
        <Image
          alt="Layers"
          className="h-10 w-auto"
          height={46}
          src={brandImage || "/images/icons/g2.png"}
          width={46}
        />
      </div>
    </div>
  );
};
