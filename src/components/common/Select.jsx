export default function Select({

    label,

    children,

    value,

    onChange,

}){

    return(

        <div>

            <label className="font-medium">

                {label}

            </label>

            <select

                value={value}

                onChange={onChange}

                className="
                    w-full
                    border
                    rounded-lg
                    p-2
                    mt-2
                "

            >

                {children}

            </select>

        </div>

    );

}