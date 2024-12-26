"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const RefundBreadCrumbs = () => {
  const breadcrumb = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Help Center",
      link: "#",
    },
    {
      title: "Planning Enquiries",
      link: "",
    },
  ];

  return (
    <div className="hidden lg:block mt-[100px] w-full mx-auto p-4">
      <Breadcrumbs
        className="text-sm text-secondary-700"
        separator={<span className="text-secondary-500 mx-2">/</span>}
      >
        {breadcrumb.map(({ title, link }, index) => (
          <BreadcrumbItem key={index}>
            {index === 0 ? (
              <a
                href={link}
                className="flex items-center text-primary-600 hover:underline"
              >
                <img
                  src="/images/icons/home.svg"
                  alt="Home"
                  className="w-4 h-4 mr-1"
                />
                <span>{title}</span>
              </a>
            ) : link ? (
              <a href={link} className="text-primary-600 hover:underline">
                {title}
              </a>
            ) : (
              <span className="text-secondary-500 font-semibold">{title}</span>
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default RefundBreadCrumbs;
