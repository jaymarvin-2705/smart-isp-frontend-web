export default function Input({

    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,

}){

    return(

        <div className="space-y-2">

            <label className="font-medium">

                {label}

            </label>

            <input

                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}

                className="
                    w-full
                    border
                    rounded-lg
                    px-4
                    py-2
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "

            />

            {error && (

                <p className="text-red-500 text-sm">

                    {error}

                </p>

            )}

        </div>

    );

}