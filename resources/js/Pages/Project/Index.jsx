import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import "../../../css/project.css";

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

export default function Index({ auth, projects }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />
            {console.log(projects)}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table class=" border-collapse border border-slate-500 w-full">
                                <thead>
                                    <tr className="bg-slate-700 ">
                                        <th className="border border-slate-600 py-1.5">
                                            ID
                                        </th>
                                        <th className="border border-slate-600 py-1.5">
                                            Name
                                        </th>
                                        <th className="border border-slate-600 py-1.5">
                                            Image
                                        </th>
                                        <th className="border border-slate-600">
                                            Status
                                        </th>
                                        <th className="border border-slate-600">
                                            Due Date
                                        </th>
                                        <th className="border border-slate-600">
                                            Created at
                                        </th>
                                        <th className="border border-slate-600">
                                            Created by
                                        </th>
                                        <th className="border border-slate-600">
                                            Actions
                                        </th>
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
                                                <td className="border border-slate-600 px-2 py-3">
                                                    {project.name}
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3">
                                                    <img
                                                        src={project.img_path}
                                                        alt={project.name}
                                                        className="max-w-24"
                                                    />
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3">
                                                    <span
                                                        className={`inline-flex items-center rounded-md ${getStatusColorClass(
                                                            project.status
                                                        )} px-2 py-1 text-xs font-medium  ring-1 ring-inset`}
                                                    >
                                                        {project.status}
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}