export default function TextArea({

    label,

    value,

    onChange,

}){

    return(

        <div>

            <label className="font-medium">

                {label}

            </label>

            <textarea

                rows="5"

                value={value}

                onChange={onChange}

                className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    mt-2
                "

            />

        </div>

    );

}