import { FC } from "react";
import { Tab } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";

interface TabsComponentProps {
  tabTitles: string[];
  content: React.ReactNode[];
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const HeadlessTab: FC<TabsComponentProps> = ({ tabTitles, content }) => {
  if (tabTitles.length !== content.length) {
    throw new Error(
      "The length of tabTitles and content arrays must be equal."
    );
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div className={`px-2 py-16 sm:px-0 ${ isMobile ? "w-11/12" : "w-8/12"}`}>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabTitles.map((title, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white focus:outline-none",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {content.map((item, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {item}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default HeadlessTab;
