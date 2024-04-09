import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
    className?: string
    value:string 
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
};

export default function SearchBox(props: Props) {
    return (
        <form onSubmit={props.onSubmit} className={cn("flex relative items-center justify-center h-10",props.className)}>
         
            <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full">
                <IoSearch />
            </button>
        </form>
    );
}
