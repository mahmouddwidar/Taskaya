import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import "../../../css/project.css";
import TasksTable from "./TasksTable";

export default function Index({ auth, tasks, queryParams = null }) {
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
                        <TasksTable
                            tasks={tasks}
                            queryParams={queryParams}
                        />
                </div>
            </div>
        </Authenticated>
    );
}
