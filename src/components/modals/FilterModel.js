import React from "react";
import { useForm } from "react-hook-form";

const FilterModel = ({ visiblity, onClose }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        onClose();
    };

    if (!visiblity) return null;

    const inlineStyle = () => {
        return {
            backgroundColor: "yellow",
            backgroundImage: "linear-gradient(166deg, rgb(242, 40, 118) -30%, rgb(148, 45, 217) 100%)",
            padding: "5px 65px",
            borderRadius: "5px",
            color: "white",
            fontSize: "25px",
        };
    };

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white p-2 rounded w-2/5">
                    <div className="px-6 py-4">
                        <div className="flex justify-between">
                            <h1 className="text-3xl font-semibold">Filter Search</h1>
                            <button onClick={onClose} className="bg-gray-800 text-red-600 font-extrabold px-4 rounded-md">
                                X
                            </button>
                        </div>
                        <div className="py-6 px-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="bg-gray-500">
                                    <div>
                                        <label for="country">Choose Country</label>

                                        <select name="country" id="country">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-10">
                                    <button style={inlineStyle()} type="submit">Join preimium</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModel;

/* 
<input defaultValue="test" {...register("example")} />
                                <input {...register("exampleRequired", { required: true })} />
*/