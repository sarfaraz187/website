interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  openInNewTab?: boolean;
}

const UnderLineLink = ({
  children,
  href,
  openInNewTab,
  className,
}: React.PropsWithChildren<IProps>) => {
  const targetProps = openInNewTab ? { target: "_blank", rel: "" } : {};

  return (
    <a
      href={href}
      {...targetProps}
      className={`text-lg font-medium pb-2 relative text-gray hover:text-black dark:text-slate dark:hover:text-seaShell after:bg-nightRider after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:dark:bg-teaGreen after:transition-all after:duration-300 hover:after:w-full inline-block ${className}`}>
      {children}
    </a>
  );
};

export default UnderLineLink;
