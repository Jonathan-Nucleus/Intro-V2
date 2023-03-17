import { FC, ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  menuTitle: string;
  active: boolean;
  onPressed: VoidFunction;
  disabled: boolean;
}

const MenuItem: FC<MenuItemProps> = ({
  icon,
  menuTitle,
  active,
  onPressed,
  disabled
}: MenuItemProps) => {
  const activeStyle = "text-base font-light text-red-500 pt-1";
  const inactiveStyle = "text-base font-light text-gray-400 pt-1";
  const neutralStyle = "text-base font-light text-gray-900 pt-1";
  return (
    <button
      type="button"
      className="flex w-full items-center px-6 py-4 bg-transparent hover:bg-transparent text-white font-medium"
      onClick={onPressed}
    >
      <div className="mr-4">{icon}</div>
      <h4 className={active === true ? activeStyle : disabled === true ? inactiveStyle : neutralStyle }>{menuTitle}</h4>
    </button>
  );
};

export default MenuItem;
