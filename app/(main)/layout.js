import React, { Suspense } from "react";

const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-600 mb-3"></div>
            <p className="text-gray-600 font-medium">Loading...</p>
        </div>
    </div>
);

const MainLayout = async ({ children }) => {
    return (
        <div className="container mx-auto mt-24 mb-20">
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </div>
    );
};

export default MainLayout;