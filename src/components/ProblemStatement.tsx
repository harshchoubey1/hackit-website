import Link from "next/link";

export default function ProblemStatement() {
    return (
        <Link href="/problem-statement" className="problem-statement-btn">
            <span> View Problem Statement</span>
        </Link>
    );
}