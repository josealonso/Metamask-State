import Link from "next/link";

export default function Posts() {
    return (
        <div>
            <h2>Posts Page</h2>
            <h3>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h3>
        </div>
    )
}
