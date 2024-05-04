import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <Link
                key={index}
                href={ link.url || "" }
                className={
                    "inline-block rounded-lg py-2 px-3 transition duration-300 text-gray-200 text-xs me-1 " +
                    (link.active ? "bg-gray-950 " : " ") +
                    (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950")
                }
                dangerouslySetInnerHTML={{ __html: link.label }}
                preserveScroll
                >
                </Link>
            ))}
        </nav>
    );
}