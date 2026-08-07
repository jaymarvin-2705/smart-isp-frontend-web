export default function Modal({

    isOpen,

    title,

    children,

    onClose,

}){

    if(!isOpen) return null;

    return(

        <div
            className="
                fixed
                inset-0
                bg-black/40
                flex
                justify-center
                items-center
                z-50
            "
        >

            <div
                className="
                    bg-white
                    rounded-xl
                    w-[550px]
                    p-6
                "
            >

                <div className="flex justify-between mb-5">

                    <h2 className="text-xl font-bold">

                        {title}

                    </h2>

                    <button onClick={onClose}>

                        ✕

                    </button>

                </div>

                {children}

            </div>

        </div>

    );

}