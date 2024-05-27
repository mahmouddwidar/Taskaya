import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React from "react";
import { STATUS_COLOR_MAP, STATUS_TEXT_MAP } from "../constants";
import "../../../css/project.css";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, tasks, queryParams = null }) {
    queryParams = queryParams || {};

    const SearchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };
    console.log(queryParams);
    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        SearchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name == queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("task.index"), queryParams);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tasks
                </h2>
            }
        >
            <Head title="Tasks"></Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className=" overflow-auto">
                                <table class=" border-collapse border border-slate-500 w-full">
                                    <thead>
                                        <tr className="bg-slate-700 border border-slate-600">
                                            <TableHeading
                                                name={"id"}
                                                sortChanged={sortChanged}
                                                sortable={true}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                ID
                                            </TableHeading>

                                            <th className="border-e border-slate-600">
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Image
                                                </div>
                                            </th>

                                            <TableHeading
                                                name={"name"}
                                                sortChanged={sortChanged}
                                                sortable={true}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                Name
                                            </TableHeading>

                                            <TableHeading
                                                name={"status"}
                                                sortChanged={sortChanged}
                                                sortable={true}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                Status
                                            </TableHeading>

                                            <TableHeading
                                                name={"due_date"}
                                                sortChanged={sortChanged}
                                                sortable={true}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                Due Date
                                            </TableHeading>

                                            <TableHeading
                                                name={"created_at"}
                                                sortChanged={sortChanged}
                                                sortable={true}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                Created at
                                            </TableHeading>

                                            <th className="border-e border-slate-600">
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Created by
                                                </div>
                                            </th>
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Actions
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr className="bg-slate-700">
                                            <th></th>

                                            <th></th>

                                            <th className="border-x border-slate-600">
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    <TextInput
                                                        placeholder="Project Name"
                                                        className="w-full"
                                                        onBlur={(e) => {
                                                            SearchFieldChanged(
                                                                "name",
                                                                e.target.value
                                                            );
                                                        }}
                                                        onKeyPress={(e) => {
                                                            onKeyPress(
                                                                "name",
                                                                e
                                                            );
                                                        }}
                                                        defaultValue={
                                                            queryParams["name"]
                                                        }
                                                    />
                                                </div>
                                            </th>
                                            <th className="border-e border-slate-600 px-2">
                                                <SelectInput
                                                    className="w-full"
                                                    onChange={(e) => {
                                                        SearchFieldChanged(
                                                            "status",
                                                            e.target.value
                                                        );
                                                    }}
                                                    defaultValue={
                                                        queryParams["status"]
                                                    }
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        pending
                                                    </option>
                                                    <option value="in_progress">
                                                        In progress
                                                    </option>
                                                    <option value="completed">
                                                        Completed
                                                    </option>
                                                </SelectInput>
                                            </th>

                                            <th></th>

                                            <th></th>

                                            <th></th>

                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {console.log(tasks)} */}
                                        {tasks.data.map((task, index) => (
                                            <tr
                                                key={index}
                                                className="text-center"
                                            >
                                                <td className="border border-slate-600 px-2 py-3">
                                                    {task.id}
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3 w-24">
                                                    <img
                                                        src={task.img_path}
                                                        alt={task.name}
                                                        className="max-w-24 mx-auto"
                                                    />
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3">
                                                    {task.name}
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3">
                                                    <span
                                                        className={`inline-flex items-center rounded-md ${
                                                            STATUS_COLOR_MAP[
                                                                task.status
                                                            ]
                                                        } px-2 py-1 text-xs font-medium  ring-1 ring-inset`}
                                                    >
                                                        {
                                                            STATUS_TEXT_MAP[
                                                                task.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                    {task.due_date}
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                    {task.created_at}
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                    {task.created_by.name}
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                    <Link
                                                        href={route(
                                                            "task.edit",
                                                            task.id,
                                                            true
                                                        )}
                                                        className=" inline-block me-2"
                                                    >
                                                        <div
                                                            className="edit-btn"
                                                            title="edit"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="h-6 w-6"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Link>

                                                    <Link
                                                        href={route(
                                                            "task.destroy",
                                                            task.id,
                                                            true
                                                        )}
                                                        className=" inline-block"
                                                    >
                                                        <div
                                                            className="delete-btn"
                                                            title="delete"
                                                        >
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                stroke="#ffffff"
                                                            >
                                                                <g
                                                                    id="SVGRepo_bgCarrier"
                                                                    stroke-width="0"
                                                                ></g>
                                                                <g
                                                                    id="SVGRepo_tracerCarrier"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                ></g>
                                                                <g id="SVGRepo_iconCarrier">
                                                                    {" "}
                                                                    <path
                                                                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                                        stroke="#ffffff"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    ></path>{" "}
                                                                    <path
                                                                        d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H10M15 5H17C18.1046 5 19 5.89543 19 7V12"
                                                                        stroke="#ffffff"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    ></path>{" "}
                                                                    <path
                                                                        d="M14 16L16.5 18.5M19 21L16.5 18.5M16.5 18.5L19 16M16.5 18.5L14 21"
                                                                        stroke="#ffffff"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    ></path>{" "}
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination
                                    links={tasks.meta.links}
                                    queryParams={queryParams}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
