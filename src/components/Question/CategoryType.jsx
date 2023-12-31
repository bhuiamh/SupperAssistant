import React, { useEffect, useState } from "react";
import { FaGripHorizontal, FaRegListAlt } from "react-icons/fa";
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";

const CategoryType = ({ category, getCategoryQuestion }) => {
  const [addOption, setAddOption] = useState(false);
  const [countries, setCountries] = useState([]);
  const [capitals, setCapitals] = useState([]);
  const [zones, setZones] = useState([]);

  const categoryData = [
    { AllCountries: countries },
    { AllCapitals: capitals },
    { AllZones: zones },
  ];

  const categoryQuestion = JSON.stringify(categoryData);

  console.log("categoryQuestion", categoryQuestion);

  const handleAddOption = () => {
    setAddOption(true);
  };

  const onSortEndCountries = (oldIndex, newIndex) => {
    setCountries((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };
  const onSortEndCapitals = (oldIndex, newIndex) => {
    setCapitals((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };
  const onSortEndZones = (oldIndex, newIndex) => {
    setZones((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  useEffect(() => {
    if (category?.countries && category?.capitals && category?.zones) {
      const countries =
        Array.isArray(category?.countries) &&
        category?.countries?.map((i) => i?.name);
      const capitals =
        Array.isArray(category?.capitals) &&
        category?.capitals?.map((i) => i?.name);
      const zones =
        Array.isArray(category?.zones) && category?.zones?.map((i) => i?.name);
      setCountries(countries);
      setCapitals(capitals);
      setZones(zones);
      getCategoryQuestion(countries, capitals, zones);
    }
  }, [category]);

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-2 border-[#008060] group hover:border-orange-500">
      {category?.countries?.length ? (
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060] group-hover:text-orange-500">
              <FaRegListAlt /> Question Type 1
            </h1>

            <button
              onClick={handleAddOption}
              className="hidden group-hover:block text-xl font-bold text-orange-500 hover:text-orange-700"
            >
              <span className="text-[#008060] text-2xl font-bold">+</span> Add a
              Question
            </button>
          </div>

          <div className="flex">
            <div className="m-3">
              <div>
                <h1 className="text-xl font-semibold">Select your Country</h1>
                <div className="m-2">
                  <SortableList onSortEnd={onSortEndCountries}>
                    {countries.map((country, i) => (
                      <SortableItem key={i}>
                        <button className="font-semibold flex items-center gap-1 mb-1">
                          <FaGripHorizontal />
                          <span className="btn w-[320px] btn-outlined">
                            {country}
                          </span>
                        </button>
                      </SortableItem>
                    ))}
                  </SortableList>

                  {addOption ? (
                    <input
                      type="text"
                      placeholder="Add a Country"
                      className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="m-3">
              <div>
                <h1 className="text-xl font-semibold">Select your Capital</h1>
                <div className="m-2">
                  <SortableList onSortEnd={onSortEndCapitals}>
                    {capitals?.map((capital, i) => (
                      <SortableItem key={i}>
                        <button className="font-semibold flex items-center gap-1 mb-1">
                          <FaGripHorizontal />
                          <span className="btn w-[320px] btn-outlined">
                            {capital}
                          </span>
                        </button>
                      </SortableItem>
                    ))}
                  </SortableList>
                  {addOption ? (
                    <input
                      type="text"
                      placeholder="Add a Capital"
                      className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="m-3">
              <div>
                <h1 className="text-xl font-semibold">Select your Zone</h1>
                <div className="m-2">
                  <SortableList onSortEnd={onSortEndZones}>
                    {zones?.map((zone, i) => (
                      <SortableItem key={i}>
                        <button className="font-semibold flex items-center gap-1 mb-1">
                          <FaGripHorizontal />
                          <span className="btn w-[320px] btn-outlined">
                            {zone}
                          </span>
                        </button>
                      </SortableItem>
                    ))}
                  </SortableList>

                  {addOption ? (
                    <input
                      type="text"
                      placeholder="Add a Zone"
                      className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading.......</h1>
        </div>
      )}
    </div>
  );
};

export default CategoryType;
