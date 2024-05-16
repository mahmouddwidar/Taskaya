import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { STATUS_COLOR_MAP, STATUS_TEXT_MAP } from "../constants";

export default function Index({ auth, tasks }) {
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
                                        <tr className="bg-slate-700">
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    ID
                                                </div>
                                            </th>
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Image
                                                </div>
                                            </th>
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Name
                                                </div>
                                            </th>
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Status
                                                </div>
                                            </th>
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Due Date
                                                </div>
                                            </th>
                                            <th>
                                                <div className="py-1.5 px-2 flex justify-center items-center gap-1 text-nowrap ">
                                                    Created at
                                                </div>
                                            </th>
                                            <th>
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
                                                        className={`inline-flex items-center rounded-md ${STATUS_COLOR_MAP[task.status]} px-2 py-1 text-xs font-medium  ring-1 ring-inset`}
                                                    >
                                                        {
                                                            STATUS_TEXT_MAP[
                                                                task.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">{task.due_date}</td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">{task.created_at}</td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">{task.project_id}</td>
                                                <td className="border border-slate-600 px-2 py-3 text-nowrap">actions</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
