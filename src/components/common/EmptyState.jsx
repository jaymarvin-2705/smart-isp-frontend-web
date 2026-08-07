import { FaInbox } from "react-icons/fa";

export default function EmptyState({

    title,

    description,

}){

    return(

        <div
            className="
                bg-white
                rounded-xl
                shadow
                p-16
                text-center
            "
        >

            <FaInbox
                size={60}
                className="mx-auto text-gray-400"
            />

            <h2 className="text-xl font-semibold mt-5">

                {title}

            </h2>

            <p className="text-gray-500 mt-2">

                {description}

            </p>

        </div>

    );

}