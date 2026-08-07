import { FaSearch } from "react-icons/fa";

export default function SearchBar({

    value,
    onChange,

}){

    return(

        <div className="relative">

            <FaSearch
                className="
                absolute
                left-4
                top-3
                text-gray-400
                "
            />

            <input

                value={value}

                onChange={onChange}

                placeholder="Search..."

                className="
                    border
                    rounded-lg
                    pl-10
                    pr-4
                    py-2
                    w-72
                "

            />

        </div>

    );

}