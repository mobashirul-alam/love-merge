import React from "react";
import { Input, Radio, Select, Slider, Space } from "antd";
import MartialInfoForm from "./MartialInfoForm";
export default function BasicInfoForm({ homeTowns, countries, basicInfo, setBasicInfo }) {

    return (
        <div className="w-full">
            <div className="mb-4 ">
                <h1>Basic information</h1>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Looking For</h1>
                <Select
                    defaultValue="bride"
                    className="w-full mb-4"
                    onChange={(value) => { setBasicInfo({ ...basicInfo, looking: value }) }}
                    showSearch
                    filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                    options={[
                        {
                            value: "bride",
                            label: "Bride",
                        },
                        {
                            value: "groom",
                            label: "Groom",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">For</h1>
                <Select
                    defaultValue="myself"
                    className="w-full mb-4"
                    onChange={(value) => { setBasicInfo({ ...basicInfo, forWhom: value }) }}
                    showSearch
                    filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                    options={[
                        {
                            value: "myself",
                            label: "Myself",
                        },
                        {
                            value: "brother",
                            label: "My Brother",
                        },
                        {
                            value: "sister",
                            label: "My Sister",
                        },
                        {
                            value: "cousin",
                            label: "My Cousin",
                        },
                        {
                            value: "friend",
                            label: "My Friend",
                        },
                        {
                            value: "relative",
                            label: "My Relative",
                        },
                    ]}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Age</h1>
                <p className="text-left text-base font-medium">
                    {" "}
                    {basicInfo?.age[0]} to {basicInfo?.age[1]}{" "}
                </p>
                <Slider
                    className="mb-4"
                    range={{ draggableTrack: true }}
                    defaultValue={[20, 50]}
                    onChange={value => setBasicInfo({ ...basicInfo, age: value })}
                />
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Religion</h1>
                <Radio.Group onChange={e => setBasicInfo({ ...basicInfo, religion: e?.target?.value })} value={basicInfo?.religion} className="mb-4">
                    <Space direction="vertical">
                        <Radio value="Islam">Islam</Radio>
                        <Radio value="Hinduism">Hinduism</Radio>
                        <Radio value="Christian">Christian</Radio>
                        <Radio value="Buddhist">Buddhist</Radio>
                        <Radio value="Atheist">Atheist</Radio>
                        <Radio value={6}>
                            Add New
                            {basicInfo?.religion === 6 ? (
                                <Input
                                    style={{
                                        width: 100,
                                        marginLeft: 10,
                                    }}
                                />
                            ) : null}
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div>
                <h1 className="text-base leading-6 font-medium mt-2 mb-2">Hometown</h1>
                <Select
                    className="w-full mb-4"
                    onChange={value => setBasicInfo({ ...basicInfo, homeTown: value })}
                    placeholder="Select Hometown"
                    showSearch
                    filterOption={(input, option) => (option?.children ?? "").toLowerCase().includes(input.toLowerCase())}
                >
                    {homeTowns.map(town => {
                        return (
                            <Select.Option key={town.id} value={town.value}>
                                {town.name}
                            </Select.Option>
                        );
                    })}
                </Select>
            </div>

            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Current Location</h1>
                <Select
                    className="w-full mb-4"
                    onChange={value => setBasicInfo({ ...basicInfo, currentLocation: value })}
                    placeholder="Select current location"
                    showSearch
                    filterOption={(input, option) => (option?.children ?? "").toLowerCase().includes(input.toLowerCase())}
                >
                    {homeTowns.map(town => {
                        return (
                            <Select.Option key={town.id} value={town.value}>
                                {town.name}
                            </Select.Option>
                        );
                    })}
                </Select>
            </div>

            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Citizenship</h1>
                <Select
                    className="w-full mb-4"
                    onChange={value => setBasicInfo({ ...basicInfo, citizenship: value })}
                    placeholder="Select Citizenship"
                    mode="multiple"
                    maxTagCount={2}
                    allowClear
                    showSearch
                    filterOption={(input, option) => (option?.children ?? "").toLowerCase().includes(input.toLowerCase())}
                >
                    {countries.map(country => (
                        <Select.Option key={country.id} value={country.value}>
                            {country.label}
                        </Select.Option>
                    ))}
                </Select>
            </div>

            <div>
                <h1 className="text-base leading-6 font-medium mb-2">Marital Status</h1>
                <Select
                    className="w-full mb-4"
                    onChange={value => setBasicInfo({ ...basicInfo, martialStatus: value })}
                    placeholder="Select Status"
                    showSearch
                    filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                    options={[
                        {
                            value: "single",
                            label: "Never Married",
                        },
                        {
                            value: "married",
                            label: "Married",
                        },
                        {
                            value: "divorced",
                            label: "Divorced",
                        },
                        {
                            value: "widowed",
                            label: "Widowed",
                        },
                    ]}
                />
            </div>
            <MartialInfoForm{...{ basicInfo, setBasicInfo }} />

        </div>
    )
}
