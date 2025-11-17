import React from "react";

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const AppLink: React.FC<AppLinkProps> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default AppLink;
