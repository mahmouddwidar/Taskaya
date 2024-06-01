import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        image: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("project.store"));
    }
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create New Project
                </h2>
            }
        >
            <Head title="Create Project" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={handleSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                            >
                                <div>
                                    <InputLabel
                                        value={"Project Image"}
                                        htmlFor={"project_img_path"}
                                    />
                                    <TextInput
                                        id="project_img_path"
                                        type="file"
                                        name="image"
                                        className="mt-1 block w-full"
                                        onChange={e => setData('image', e.target.files[0])}
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="name"
                                        value={"Project Name"}
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="project_desc"
                                        value={"Project Description"}
                                    />

                                    <TextAreaInput
                                        id="project_desc"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="status"
                                        value={"Status"}
                                    />
                                    <SelectInput
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="mt-1 block w-full"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">
                                            In Progress
                                        </option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                    </SelectInput>
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="due_date"
                                        value={"Due Date"}
                                    />
                                    <TextInput
                                        id="due_date"
                                        type="date"
                                        name="due_date"
                                        className="mt-2 block w-full"
                                        onChange={ e => setData('due_date', e.target.value)}
                                    />
                                    <InputError message={errors.due_date} className="mt-2" />
                                </div>

                                <div className="mt-4 text-right pt-3">
                                    <Link href={route('project.index')} className="px-5 py-2.5 mb-2 me-2 text-red-600 rounded-lg group hover:text-white hover:bg-red-600 focus:ring-4 focus:outline-none font-medium transition duration-300 ease-out">Cancel</Link>
                                    <button type="submit" className="shadow ms-2 text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 transition duration-300 ease-out hover:ease-in">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
