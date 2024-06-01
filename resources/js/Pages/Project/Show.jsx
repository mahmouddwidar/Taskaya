import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PROJECT_STATUS_TEXT_MAP, STATUS_COLOR_MAP } from "../constants";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, tasks, project, queryParams = null }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {`Project - ${project.name}`}
                </h2>
            }
        >
            <Head title={`Project - ${project.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <img
                                src={project.img_path}
                                alt={project.name}
                                className="w-full object-cover h-64"
                            />
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-2 gap-1">
                                <div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Project ID
                                        </label>
                                        <p className="mt-1 text-gray-300">
                                            {project.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Project Name
                                        </label>
                                        <p className="mt-1 text-gray-300">
                                            {project.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Project Status
                                        </label>
                                        <p className="mt-1">
                                            <span
                                                className={`inline-flex items-center rounded-md ${
                                                    STATUS_COLOR_MAP[
                                                        project.status
                                                    ]
                                                } px-2 py-1 text-xs font-medium  ring-1 ring-inset`}
                                            >
                                                {
                                                    PROJECT_STATUS_TEXT_MAP[
                                                        project.status
                                                    ]
                                                }
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Created By
                                        </label>
                                        <p className="mt-1 text-gray-300">
                                            {project.createdBy.name}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">
                                                Due Date
                                            </label>
                                            <p className="mt-1 text-gray-300">
                                                {project.due_date}
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">
                                                Create Date
                                            </label>
                                            <p className="mt-1 text-gray-300">
                                                {project.created_at}
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">
                                                Updated By
                                            </label>
                                            <p className="mt-1 text-gray-300">
                                                {project.updatedBy.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">
                                    Project Description
                                </label>
                                <p className="text-gray-300 mt-1">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    {tasks.data.length > 0 ? (
                        <TasksTable
                            tasks={tasks}
                            queryParams={queryParams}
                            hideProjectNameColumn={true}
                            projectID={project.id}
                        />
                    ) : (
                        <p className="text-white rounded bg-gray-500 px-5 py-2.5 text-center my-8 text-lg">
                            There's no tasks to show
                        </p>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
