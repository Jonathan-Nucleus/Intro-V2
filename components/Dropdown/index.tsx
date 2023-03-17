import { FC, useState } from "react";
import { Combobox } from "@headlessui/react";
import { CheckCircle, ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

const grad = [
  { id: 1, value: "" },
  { id: 2, value: "2023" },
  { id: 3, value: "2022" },
  { id: 4, value: "2021" },
  { id: 5, value: "2020" },
  { id: 6, value: "2019" },
  { id: 7, value: "2018" },
  { id: 8, value: "2017" },
  { id: 9, value: "2016" },
  { id: 10, value: "2015" },
  { id: 11, value: "2014" },
  { id: 12, value: "2013" },
  { id: 13, value: "2012" },
  { id: 14, value: "2011" },
  { id: 15, value: "2010" },
  { id: 16, value: "2009" },
  { id: 17, value: "2008" },
  { id: 18, value: "2007" },
  { id: 19, value: "2006" },
  { id: 20, value: "2005" },
  { id: 21, value: "2004" },
  { id: 22, value: "2003" },
  { id: 23, value: "2002" },
  { id: 24, value: "2001" },
  { id: 25, value: "2000" },
];

const sport = [
  { id: 1, value: "Men’s Archery" },
  { id: 2, value: "Baseball" },
  { id: 3, value: "Men’s Basketball" },
  { id: 4, value: "Men’s Bowling" },
  { id: 5, value: "Men’s Cross Country" },
  { id: 6, value: "Men’s Fencing" },
  { id: 7, value: "Men’s Golf" },
  { id: 8, value: "Men’s Gymnastics" },
  { id: 9, value: "Men’s Ice Hockey" },
  { id: 10, value: "Men’s Lacrosse" },
  { id: 11, value: "Men’s Rifle" },
  { id: 12, value: "Men’s Rowing" },
  { id: 13, value: "Men’s Sailing" },
  { id: 14, value: "Men’s Skiing" },
  { id: 15, value: "Men’s Soccer" },
  { id: 16, value: "Men’s Squash" },
  { id: 17, value: "Men’s Swimming & Diving" },
  { id: 18, value: "Men’s Tennis" },
  { id: 19, value: "Men’s Track" },
  { id: 20, value: "Men’s Triathlon" },
  { id: 21, value: "Men’s Volleyball" },
  { id: 22, value: "Men’s Waterpolo" },
  { id: 23, value: "Men’s Wrestling" },
  { id: 24, value: "Women’s Acrobatics & Tumbling" },
  { id: 25, value: "Women’s Archery" },
  { id: 26, value: "Women’s Badminton" },
  { id: 27, value: "Women’s Basketball" },
  { id: 28, value: "Women’s Beach Volleyball" },
  { id: 29, value: "Women’s Bowling" },
  { id: 30, value: "Women’s Cross Country" },
  { id: 31, value: "Women’s Equestrian" },
  { id: 32, value: "Women’s Fencing" },
  { id: 33, value: "Field Hockey" },
  { id: 34, value: "Women’s Golf" },
  { id: 35, value: "Women’s Gymnastics" },
  { id: 36, value: "Women’s Ice Hockey" },
  { id: 37, value: "Women’s Ice Skating" },
  { id: 38, value: "Women’s Lacrosse" },
  { id: 39, value: "Women’s Rifle" },
  { id: 40, value: "Women’s Rugby" },
  { id: 41, value: "Women’s Sailing" },
  { id: 42, value: "Women’s Skiing" },
  { id: 43, value: "Women’s Soccer" },
  { id: 44, value: "Softball" },
  { id: 45, value: "Women’s Swimming & Diving" },
  { id: 46, value: "Women’s Synchronized Swimming" },
  { id: 47, value: "Women’s Team Handball" },
  { id: 48, value: "Women’s Track" },
  { id: 49, value: "Women’s Triathlon" },
  { id: 50, value: "Women’s Volleyball" },
  { id: 51, value: "Women’s Water Polo" },
  { id: 52, value: "Women’s Wrestling" },
  { id: 53, value: "Mixed Lacrosse" },
  { id: 54, value: "Mixed Rifle" },
];

const height = [
  { id: 1, value: "" },
  { id: 2, value: "4" },
  { id: 3, value: "4.1" },
  { id: 4, value: "4.2" },
  { id: 5, value: "4.3" },
  { id: 6, value: "4.4" },
  { id: 7, value: "4.5" },
  { id: 8, value: "4.6" },
  { id: 9, value: "4.7" },
  { id: 10, value: "4.8" },
  { id: 11, value: "4.9" },
  { id: 12, value: "4.10" },
  { id: 13, value: "4.11" },
  { id: 14, value: "5" },
  { id: 3, value: "5.1" },
  { id: 4, value: "5.2" },
  { id: 5, value: "5.3" },
  { id: 6, value: "5.4" },
  { id: 7, value: "5.5" },
  { id: 8, value: "5.6" },
  { id: 9, value: "5.7" },
  { id: 10, value: "5.8" },
  { id: 11, value: "5.9" },
  { id: 12, value: "5.10" },
  { id: 13, value: "5.11" },
  { id: 14, value: "6" },
  { id: 3, value: "6.1" },
  { id: 4, value: "6.2" },
  { id: 5, value: "6.3" },
  { id: 6, value: "6.4" },
  { id: 7, value: "6.5" },
  { id: 8, value: "6.6" },
  { id: 9, value: "6.7" },
  { id: 10, value: "6.8" },
  { id: 11, value: "6.9" },
  { id: 12, value: "6.10" },
  { id: 13, value: "6.11" },
  { id: 14, value: "7" },
  { id: 3, value: "7.1" },
  { id: 4, value: "7.2" },
  { id: 5, value: "7.3" },
  { id: 6, value: "7.4" },
  { id: 7, value: "7.5" },
  { id: 8, value: "7.6" },
  { id: 9, value: "7.7" },
  { id: 10, value: "7.8" },
  { id: 11, value: "7.9" },
  { id: 12, value: "7.10" },
  { id: 13, value: "7.11" },
  { id: 14, value: "8" },
];

const weight = [
  { id: 1, value: "" },
  { id: 2, value: "150" },
  { id: 3, value: "155" },
  { id: 4, value: "160" },
  { id: 5, value: "165" },
  { id: 6, value: "170" },
  { id: 7, value: "175" },
  { id: 8, value: "180" },
  { id: 9, value: "185" },
  { id: 10, value: "190" },
  { id: 11, value: "195" },
  { id: 12, value: "200" },
  { id: 13, value: "205" },
  { id: 14, value: "210" },
  { id: 15, value: "215" },
  { id: 16, value: "220" },
  { id: 17, value: "225" },
  { id: 18, value: "230" },
  { id: 19, value: "235" },
  { id: 20, value: "240" },
];

type VF = () => void;

interface ValProps {
  width: string;
  list: any;
  hint?: string;
  value: string[];
  onChange: (value: string[]) => void;
}

const Dropdown: FC<ValProps> = ({ width, list, hint, value, onChange }) => {
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState(false);

  const filteredDate =
    query === ""
      ? grad
      : grad.filter((val) =>
          val.value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredSport =
    query === ""
      ? sport
      : sport.filter((item) =>
          item.value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredHeight =
    query === ""
      ? height
      : grad.filter((item) =>
          item.value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredWeight =
    query === ""
      ? weight
      : weight.filter((item) =>
          item.value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full relative ">
      <Combobox value={value} onChange={onChange}>
        <div className="mt-0 w-full">
          <div className="relative border w-full cursor-default overflow-hidden rounded-lg bg-white text-left sm:text-sm outline-none">
            <Combobox.Input
              className="relative h-12 w-full border border-gray-500 bg-white rounded-lg outline-none pl-3 pr-10 text-[16px] leading-5 text-gray-900 focus:ring-0 focus:outline-none focus:border-1
              focus:border-gray-400 focus-visible:outline-none placeholder-gray-600"
              displayValue={(val: any) => val.value}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={hint}
            />
            <Combobox.Button
              className="absolute inset-y-0 right-0 flex items-center pr-2"
              onClick={() => setBtn(!btn)}
            >
              {btn === true ? (
                <ArrowCircleUp size={25} color="#ef4444" aria-hidden="true" />
              ) : (
                <ArrowCircleDown size={25} color="#ef4444" aria-hidden="true" />
              )}
            </Combobox.Button>
          </div>
          <div className="w-full">
            {list === "grad" ? (
              <Combobox.Options
                className={`z-50 mt-2 h-[175px] overflow-scroll rounded-md bg-white py-1 text-base shadow-md ${width}`}
              >
                {filteredDate.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredDate.map((val) => (
                    <Combobox.Option
                      key={val.id}
                      onClick={() => setBtn(!btn)}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active ? "bg-red-500 text-white" : "text-gray-900"
                        }`
                      }
                      value={val}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {val.value}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "#ef4444"
                              }`}
                            >
                              <CheckCircle
                                size={22}
                                color={"#ef4444"}
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            ) : list === "sport" ? (
              <Combobox.Options
                className={`z-50 mt-2 h-[175px] overflow-scroll rounded-md bg-white py-1 text-base shadow-md ${width}`}
              >
                {filteredSport.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredSport.map((val) => (
                    <Combobox.Option
                      key={val.id}
                      onClick={() => setBtn(!btn)}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active ? "bg-red-500 text-white" : "text-gray-900"
                        }`
                      }
                      value={val}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {val.value}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "#ef4444"
                              }`}
                            >
                              <CheckCircle
                                size={22}
                                color={"#ef4444"}
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            ) : list === "height" ? (
              <Combobox.Options
                className={`z-50 mt-2 h-[175px] overflow-scroll rounded-md bg-white py-1 text-base shadow-md ${width}`}
              >
                {filteredHeight.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredHeight.map((val) => (
                    <Combobox.Option
                      key={val.id}
                      onClick={() => setBtn(!btn)}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active ? "bg-red-500 text-white" : "text-gray-900"
                        }`
                      }
                      value={val}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {val.value}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "#ef4444"
                              }`}
                            >
                              <CheckCircle
                                size={22}
                                color={"#ef4444"}
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            ) : (
              <Combobox.Options
                className={`z-50 mt-2 h-[175px] overflow-scroll rounded-md bg-white py-1 text-base shadow-md ${width}`}
              >
                {filteredWeight.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredWeight.map((val) => (
                    <Combobox.Option
                      key={val.id}
                      onClick={() => setBtn(!btn)}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 w-full ${
                          active ? "bg-red-500 text-white" : "text-gray-900"
                        }`
                      }
                      value={val}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {val.value}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "#ef4444"
                              }`}
                            >
                              <CheckCircle
                                size={22}
                                color={"#ef4444"}
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            )}
          </div>
        </div>
      </Combobox>
    </div>
  );
};

export default Dropdown;
