import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import Image from "next/image";

interface CustomBreadCrumbItem {
  isIconOnly?: boolean;
  iconSrc?: string;
  isActive?: boolean;
  text?: string;
  href?: string;
}

interface CustomBreadCrumbsProps {
  items?: CustomBreadCrumbItem[];
}

export const CustomBreadCrumbs = ({ items }: CustomBreadCrumbsProps) => {
  return (
    <Breadcrumbs
      itemClasses={{
        separator: "px-4",
      }}
      separator="/"
    >
      {items &&
        items.length > 0 &&
        items.map(({ isIconOnly, iconSrc, isActive, text, href }, index) => {
          if (href) {
            return (
              <BreadcrumbItem key={index}>
                <a href={href}>
                  {(isIconOnly && iconSrc && (
                    <Image
                      alt="icon"
                      className="h-5 w-5 object-contain"
                      height={20}
                      src={iconSrc}
                      width={20}
                    />
                  )) || (
                    <span
                      className={`${isActive ? "text-secondary-500" : "text-primary-600"} text-sm font-medium leading-5`}
                    >
                      {`${text}`}
                    </span>
                  )}
                </a>
              </BreadcrumbItem>
            );
          }

          return (
            <BreadcrumbItem key={index}>
              {(isIconOnly && iconSrc && (
                <Image
                  alt="icon"
                  className="h-5 w-5 object-contain"
                  height={20}
                  src={iconSrc}
                  width={20}
                />
              )) || (
                <span
                  className={`${isActive ? "text-secondary-500" : "text-primary-600"} text-sm font-medium leading-5`}
                >
                  {`${text}`}
                </span>
              )}
            </BreadcrumbItem>
          );
        })}
    </Breadcrumbs>
  );
};
