import Button from "./Button";

export default function Pagination(){

    return(

        <div className="flex justify-end gap-3 mt-6">

            <Button variant="secondary">

                Previous

            </Button>

            <Button>

                Next

            </Button>

        </div>

    );

}