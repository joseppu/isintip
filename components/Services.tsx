import React from "react";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

function Services() {
  return (
    <div className="flex-col items-center justify-center py-10">
      <p className="text-center uppercase text-violet-500">Services</p>
      <h2 className="text-5xl text-center">
        Our Best<span className="font-bold"> Services</span>
      </h2>
      <div className="flex items-center justify-center text-center">
        <div className="grid grid-cols-2 gap-5 mx-10 my-20 md:mx-0 md:grid-cols-3">
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <CloudUploadIcon className="w-16 h-16 mx-auto text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Antibodies
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <CogIcon className="w-16 h-16 mx-auto text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Chemicals
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <LockClosedIcon className="w-16 h-16 mx-auto text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Lab Supplies
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <RefreshIcon className="w-16 h-16 mx-auto text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Gene Silencers
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <ServerIcon className="w-16 h-16 mx-auto text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
            Proteins & Amino Acids
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <ShieldCheckIcon className="w-16 h-16 mx-auto text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Cell Culture
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
