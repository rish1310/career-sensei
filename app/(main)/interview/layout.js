import { Suspense } from "react";

export default function Layout({ children }) {
    return (
        <div className="px-5">
            <Suspense
                fallback={
                    <div className="w-full flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
                    </div>}
            >
                {children}
            </Suspense>
        </div>
    );
}