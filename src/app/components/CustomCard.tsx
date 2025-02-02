import { Button } from "@src/app/components/ui/button";
import { ChevronRight } from "lucide-react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  btnText?: string;
}

const CustomCard = ({
  src,
  btnText,
  children,
  className
}: React.PropsWithChildren<IProps>) => (
  <div className={`p-6 md-p-12 flex flex-col md:flex-row gap-4 mt-8 bg-white mx-auto max-w-7xl group rounded-lg border-2 border-transparent transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer dark:bg-gray-800 ${className}`}>
    {/* Text & Button section - moves down on small screens */}
    <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      {children}
      <Button
        variant="primary"
        className="group-hover:text-white group-hover:bg-nightRider group-hover:border-nightRider group-hover:rounded-full group-hover:dark:bg-teaGreen group-hover:dark:text-nightRider"
      >
        {btnText}
        <ChevronRight
          size={22}
          strokeWidth={2.5}
          className="transition-transform group-hover:translate-x-2"
        />
      </Button>
    </div>
    {/* Image section - moves up on small screens */}
    <div className="w-full md:w-2/5 flex justify-center pl-8 md:justify-center">
      {src && (
        <img src={src} className={`w-[full] h-[135px] rounded-lg dark:invert`} />
      )}
    </div>
  </div>
);

export default CustomCard;
