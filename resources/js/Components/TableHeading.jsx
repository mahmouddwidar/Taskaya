import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
    name,
    sort_field = null,
    sort_direction = null,
    sortable = true,
    children,
    sortChanged = () => {},
}) {
    return (
        <th
            className="border border-slate-600"
            onClick={(e) => sortChanged(name)}
        >
            <div className={"py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap " + (sortable ? "cursor-pointer " : "")}>
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-4 text-slate-400 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "!text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 text-slate-400 " +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "!text-white"
                                    : "")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
}
