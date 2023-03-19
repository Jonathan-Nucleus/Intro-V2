import { FC, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  HouseLine,
  IdentificationCard,
  User,
  Lock,
  CreditCard,
  Sliders,
  Heart,
  CheckCircle,
  SignOut,
} from "phosphor-react";

import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  { route: "/id", icon: IdentificationCard, label: "ID Details" },
  { route: "/additional", icon: User, label: "Additional Details" },
  { route: "/socials", icon: Heart, label: "Socials" },
  { route: "/password", icon: Lock, label: "Password" },
  { route: "/billing", icon: CreditCard, label: "Billing Details" },
  { route: "", icon: Sliders, label: "Analytics" },
  { route: "", icon: CheckCircle, label: "Verify Me" },
  { route: "/", icon: SignOut, label: "Sign Out" },
];

const NavMenu: FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const router = useRouter();
  return (
    <div>
      <div className="h-screen w-60 bg-transparent mr-10">
        {MENU_ITEMS.slice(0, MENU_ITEMS.length).map(
          ({ icon: Icon, label, route }, index) => {
            return (
              <MenuItem
                key={route}
                disabled={index === 5 || index === 6 ? true : false}
                icon={
                  <Icon
                    color={
                      activeMenuItem === index
                        ? "#F54543"
                        : index === 5 || index === 6
                        ? "#9CA3AF"
                        : "#333"
                    }
                    size={25}
                  />
                }
                menuTitle={label}
                active={activeMenuItem === index ? true : false}
                onPressed={()=> {}}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default NavMenu;
