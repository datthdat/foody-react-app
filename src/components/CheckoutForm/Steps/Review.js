import React from 'react'
import { Button, Collapse } from 'antd';
import { useEffect, useState } from 'react/cjs/react.development';
const Review = ({ formData, navigation }) => {
    const { go } = navigation
    const { Panel } = Collapse;
    const {
        firstName,
        lastName,
        age,
        set,

        country,
        city,
        address,
        zip,

        email,
        phone,
        subject,
        message
    } = formData

    const RenderAction = ({ sumary, detail, go }) => {
        return (
            <div>
                <div className="text-xl">
                    {sumary}
                </div>
                <div>
                    {detail.map((data, index) => {
                        const objKey = Object.keys(data)[0];
                        const objValues = data[Object.keys(data)[0]]
                        return (
                            <div key={index}>
                                {objKey} : {objValues}
                            </div>
                        )
                    })}

                </div>
                <div className="flex justify-end">
                    <Button onClick={() => { go(`${sumary.toLowerCase()}`) }} type="primary" icon={
                        <i className="fas fa-edit text-2xl"></i>
                    } />
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="py-5 w-screen px-20 ">
                    <div className="flex justify-center">
                        <p className="text-2xl">
                            Your Information
                        </p>
                    </div>
                    <Collapse defaultActiveKey={["1", "2", "3"]} >
                        <Panel header={"Names"} key="1">
                            <RenderAction
                                go={go}
                                detail={[
                                    { 'First Name': firstName },
                                    { 'Last Name': lastName },
                                    { 'Age': age },
                                    { 'Set': set }
                                ]} />
                        </Panel>
                        <Panel header={"Address"} key="2">
                            <RenderAction
                                go={go}
                                detail={[
                                    { 'Country': country },
                                    { 'City': city },
                                    { 'Address': address },
                                    { 'Zip': zip }
                                ]} />

                        </Panel>
                        <Panel header={"Contact"} key="3">
                            <RenderAction
                                go={go}
                                detail={[
                                    { 'Email': email },
                                    { 'Phone': phone },
                                    { 'Subject': subject },
                                    { 'Message': message }
                                ]} />
                        </Panel>
                    </Collapse>
                </div>

            </div>
            <div className="flex justify-center mb-5">
                <Button type="default" onClick={() => navigation.next()} > Submit </Button>
            </div>
        </div>
    )
}

export default Review
