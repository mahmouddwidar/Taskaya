import { Link } from "@inertiajs/react";

export default function PaginationTwo({ links, queryParams }) {
    return (
        <nav className="text-center mx-auto mt-4">
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.url + queryParams}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={
                            "inline-block rounded-lg py-2 px-3 transition duration-300 text-gray-200 text-xs me-1 " +
                            (link.active ? "bg-gray-950 " : " ") +
                            (!link.url
                                ? "!text-gray-500 cursor-not-allowed "
                                : "hover:bg-gray-950")
                        }
                        preserveScroll
                    ></Link>
                );
            })}
        </nav>
    );
}
