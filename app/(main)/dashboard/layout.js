import { Suspense } from "react";

export default function Layout({ children }) {
    return (
        <div className="px-5">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-6xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 custom-gradient font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2">Industry Insights</h1>
            </div>
            <Suspense
                fallback={
                    <div className="w-full flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
                    </div>
                }
            >
                {children}
            </Suspense>
        </div>
    );
}