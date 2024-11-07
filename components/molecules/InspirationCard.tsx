import { Chip } from "@nextui-org/chip";

import { ImageWithErrorHandle } from "./ImageWithErrorHandle";

interface InspirationCardProps {
  // src?: string;
  // title?: string;
  // text?: string;
  // name?: string;
  // date?: string;
  // tags?: any[];

  // backend props
  localization_country?: any;
  localization_location?: any;
  image_title?: string;
  image_alt?: string;
  title?: string;
  by_author_name?: string;
  image?: string;
  image_webp?: string;
  category_name?: string;
  category_link?: string;
  post_link?: string;
  created_at?: string;
  [otherProp: string]: any;
}

export const InspirationCard = ({
  localization_country,
  localization_location,
  image_title,
  image_alt,
  title,
  by_author_name,
  image,
  image_webp,
  category_name,
  category_link,
  post_link,
  created_at,
}: InspirationCardProps) => {
  return (
    // <Link
    //   href={post_link || "#"}
    //   className="group w-full min-w-full sm:min-w-[350px] sm:w-[350px] max-w-[380px] bg-primary-50 hover:bg-white rounded-lg border lg:border-none lg:hover:shadow-lg p-4"
    // >
    <a
      className="group w-full min-w-full sm:min-w-[350px] sm:w-[350px] max-w-[380px] bg-primary-50 hover:bg-white rounded-lg border lg:border-none lg:hover:shadow-lg p-4"
      href={post_link || "#"}
    >
      <div className="rounded-lg w-full">
        <ImageWithErrorHandle
          alt={title || ""}
          className="w-full sm:min-w-full object-cover h-[200px] z-0 rounded-xl"
          fallbackSrc="/images/inspirations/inspiration1.svg"
          height={300}
          loading="lazy"
          src={image_webp || ""}
          width={350}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 w-full">
        <div className="flex gap-x-1 items-center w-full trunate">
          <span className="text-sm font-semibold leading-5 text-primary-700">
            {by_author_name || ""}
          </span>

          <span className="text-primary-700">{"•"}</span>

          <span className="text-sm font-semibold leading-5 text-primary-700">
            {created_at || ""}
          </span>
        </div>
        <span className="text-lg font-semibold leading-7 block w-full truncate">
          {title || ""}
        </span>

        {/* <span className="text-sm font-normal leading-5 block w-full text-neutral">
          {text || ""}
        </span> */}
        {category_link && category_name && (
          <div className="flex mt-3 gap-2 w-full flex-wrap items-center min-h-[30px] p-0">
            <Chip
              // as={Link}
              // href={category_link || "#"}
              className="bg-inherit group-hover:bg-primary-50 py-4 group-hover:text-primary-700"
              radius="sm"
              variant="light"
            >
              <span className="text-sm font-semibold leading-5 text-primary-700">
                {category_name}
              </span>
            </Chip>
          </div>
        )}
      </div>
    </a>
    // </Link>
  );
};
