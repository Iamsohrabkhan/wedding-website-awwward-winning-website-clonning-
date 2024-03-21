import Link from "next/link"
import { twMerge } from "tailwind-merge"

const Button = ({children,href,className="",...rest}) => {
  return (
    <button className={twMerge("relative min-w-12 min-h-12  bg-white text-primary  rounded-2xl  cursor-pointer active:scale-90", className)}
    {...rest}
    >
      {href ? (
        <Link className="min-w-12 min-h-12" href={href}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  )
}

export default Button