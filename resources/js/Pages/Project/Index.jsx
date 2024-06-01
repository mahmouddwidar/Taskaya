import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import "../../../css/project.css";
import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_TEXT_MAP } from "../constants";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import { PlusIcon } from "@heroicons/react/16/solid";

const getStatusColorClass = (status) => {
    switch (status) {
        case "completed":
            return "bg-green-800 text-white ring-green-600/20";
        case "in_progress":
            return "bg-blue-800 text-white ring-blue-600/20";
        case "pending":
            return "bg-yellow-800 text-white ring-yellow-600/20";
        default:
            return "bg-gray-800 text-white ring-gray-600/20";
    }
};

export default function Index({
    auth,
    projects,
    project_success,
    queryParams = null,
}) {
    const [showSuccess, setShowSuccess] = useState(true);
    queryParams = queryParams || {};

    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChange(name, e.target.value);
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
        router.get(route("project.index"), queryParams);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between align-items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Projects
                    </h2>
                    <Link
                        href={route("project.create")}
                        className="text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 transition duration-300 ease-out hover:ease-in flex justify-between align-items-center"
                    >
                        <PlusIcon className="size-6 me-1" />
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {project_success && showSuccess && (
                            <div className="mt-8 bg-green-50 w-1/2 mx-auto border border-green-400 text-green-800 px-4 py-3 rounded relative">
                                <strong className="font-bold">Success! </strong>
                                <span className="block sm:inline">
                                    {project_success}
                                </span>
                                <button
                                    className="absolute top-0 right-0 px-4 py-3"
                                    onClick={() => setShowSuccess(false)}
                                >
                                    <svg
                                        className="fill-current h-6 w-6 text-green-500"
                                        role="button"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <title>Close</title>
                                        <path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.354 5.646a.5.5 0 1 0-.708.708L9.293 10l-3.647 3.646a.5.5 0 0 0 .708.708L10 10.707l3.646 3.647a.5.5 0 0 0 .708-.708L10.707 10l3.647-3.646a.5.5 0 0 0-.006-.702z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className=" overflow-auto">
                                <table class=" border-collapse border border-slate-500 w-full">
                                    <thead>
                                        <tr className="bg-slate-700 ">
                                            <TableHeading
                                                name={"id"}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortable={true}
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>

                                            <th className="border border-slate-600">
                                                Image
                                            </th>

                                            <TableHeading
                                                name={"name"}
                                                sortable={true}
                                                sortChanged={sortChanged}
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
                                                sortable={true}
                                                sortChanged={sortChanged}
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
                                                sortable={true}
                                                sortChanged={sortChanged}
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
                                                sortable={true}
                                                sortChanged={sortChanged}
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                Created at
                                            </TableHeading>

                                            <th className="border border-slate-600">
                                                Created by
                                            </th>

                                            <th className="border border-slate-600">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr className="bg-slate-700">
                                            <th className="border-none py-1.5"></th>
                                            <th className="border-none py-1.5"></th>
                                            <th className="border-none px-2 py-1">
                                                <TextInput
                                                    className="w-full"
                                                    placeholder="Project Name"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    onBlur={(e) =>
                                                        searchFieldChange(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress("name", e)
                                                    }
                                                />
                                            </th>
                                            <th className="border-none px-2">
                                                <SelectInput
                                                    className="w-ful"
                                                    defaultValue={
                                                        queryParams.status
                                                    }
                                                    onChange={(e) =>
                                                        searchFieldChange(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="in_progress">
                                                        In progress
                                                    </option>
                                                    <option value="completed">
                                                        Completed
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th className="border-none"></th>
                                            <th className="border-none"></th>
                                            <th className="border-none"></th>
                                            <th className="border-none"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project, index) => {
                                            return (
                                                <tr
                                                    className="text-center"
                                                    key={index}
                                                >
                                                    <td className="border border-slate-600 px-2 py-3">
                                                        {project.id}
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3 w-24">
                                                        <img
                                                            src={
                                                                project.img_path
                                                            }
                                                            alt={project.name}
                                                            className="max-w-24 mx-auto"
                                                        />
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3">
                                                        <Link
                                                            href={route(
                                                                "project.show",
                                                                project.id
                                                            )}
                                                            className="hover:underline"
                                                        >
                                                            {project.name}
                                                        </Link>
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3">
                                                        <span
                                                            className={`inline-flex items-center rounded-md ${getStatusColorClass(
                                                                project.status
                                                            )} px-2 py-1 text-xs font-medium  ring-1 ring-inset`}
                                                        >
                                                            {
                                                                PROJECT_STATUS_TEXT_MAP[
                                                                    project
                                                                        .status
                                                                ]
                                                            }
                                                        </span>
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                        {project.due_date}
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                        {project.created_at}
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3 text-nowrap text-md">
                                                        {project.createdBy.name}
                                                    </td>
                                                    <td className="border border-slate-600 px-2 py-3 text-nowrap">
                                                        <Link
                                                            href={route(
                                                                "project.edit",
                                                                project.id,
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
                                                                "project.destroy",
                                                                project.id,
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
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination
                                links={projects.meta.links}
                                queryParams={queryParams}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
