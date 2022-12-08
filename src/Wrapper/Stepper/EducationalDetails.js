import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { firebaseStorage } from "../../firebase.init";
import { useSetEducationalDetailsMutation } from "../../Redux/features/userInfo/userApi";

export const EducationalDetails = ({ setPage }) => {
    const [photoURL, setPhotoUrl] = useState("");
    const [setEducationalDetails, { data, isLoading }] = useSetEducationalDetailsMutation();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async data => {
        data.caseCompleted = parseInt(data.caseCompleted);
        data.photoCertificate = photoURL;
        await setEducationalDetails(data);
    };

    useEffect(() => {
        if (data) {
            setPage(3);
        }
    }, [data, setPage]);

    const photoHandler = async e => {
        const photo = e.target.files[0];
        const storageRef = ref(firebaseStorage, `certificate/${photo.name + uuidv4()}`);
        uploadBytes(storageRef, photo).then(async snapshot => {
            await getDownloadURL(snapshot.ref).then(url => {
                setPhotoUrl(url.toString());
            });
        });
    };

    return (
        <div className="w-full h-auto">
            <section className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl text-[#2F3659] mb-8">
                <p>Educational Information Form</p>
                <hr className="w-1/2 mt-2 mx-auto" />
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="md:w-full w-64 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {/* ---------- Degree ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("degree", {
                                    required: {
                                        value: true,
                                        message: "Degree is required",
                                    },
                                })}
                                type="text"
                                placeholder="Degree"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="degree"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.degree?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.degree.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Institute ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("institute", {
                                    required: {
                                        value: true,
                                        message: "Institute is required",
                                    },
                                })}
                                type="text"
                                placeholder="Institute"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="institute"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.institute?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.institute.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Department Name ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("department", {
                                    required: {
                                        value: true,
                                        message: "Department is required",
                                    },
                                })}
                                type="text"
                                placeholder="Department"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="department"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.department?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.department.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Field of Study ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("feildOfStudy", {
                                    required: {
                                        value: true,
                                        message: "Field of study is required",
                                    },
                                })}
                                type="text"
                                placeholder="Field of study"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="feildOfStudy"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.feildOfStudy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.feildOfStudy.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- GPA or CGPA  ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("gpaOrCgpa", {
                                    required: {
                                        value: true,
                                        message: "GPA Or CGPA is required",
                                    },
                                })}
                                type="number"
                                placeholder="GPA Or CGPA"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="gpaOrCgpa"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.gpaOrCgpa?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.gpaOrCgpa.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Year of Study ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("yearOfStudy", {
                                    required: {
                                        value: true,
                                        message: "Year of Study is required",
                                    },
                                })}
                                type="date"
                                placeholder="Year of Study"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="yearOfStudy"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.yearOfStudy?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.yearOfStudy.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Special Achievement ---------- */}
                    <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <input
                                {...register("specialAchievement", {
                                    required: {
                                        value: true,
                                        message: "Special Achievement is required",
                                    },
                                })}
                                type="number"
                                placeholder="Special Achievement"
                                className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                                id="specialAchievement"
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.specialAchievement?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.specialAchievement.message}</span>
                            )}
                        </h1>
                    </section>
                    {/* ---------- Photo of Certificate ---------- */}
                    {/* <section>
                        <div className="flex items-center bg-gray-100 p-3 w-full rounded-lg mt-3 lg:mt-0">
                            <AiOutlineCloudUpload className=" mr-2 text-gray-400" />
                            <label htmlFor="photoCertificate" className="outline-none h-full text-sm text-gray-400 bg-gray-100">
                                {photoURL ? (
                                    <>
                                        <span className="text-green-400">Photo added</span>
                                    </>
                                ) : (
                                    "Upload Certificate Photo"
                                )}
                            </label>
                            <input
                                {...register("photoCertificate", {
                                    required: {
                                        value: true,
                                        message: "Certificate Photo is Required",
                                    },
                                })}
                                type="file"
                                id="photoCertificate"
                                className="hidden"
                                onChange={photoHandler}
                            />
                        </div>
                        <h1 className="text-left ml-2">
                            {errors.photoCertificate?.type === "required" && (
                                <span className="w-full text-left text-red-400 text-sm">{errors?.photoCertificate.message}</span>
                            )}
                        </h1>
                    </section> */}
                </section>
                <div className="flex items-center w-full justify-center gap-x-[20px] mt-[20px]">
                    <button
                        className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                        onClick={() => setPage(1)}
                    >
                        Previous
                    </button>
                    <input
                        type="submit"
                        value={isLoading ? "Saving..." : "Next"}
                        className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                    />
                </div>
            </form>
        </div>
    );
};
