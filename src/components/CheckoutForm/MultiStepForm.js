import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import Address from './Steps/Address'
import Contact from './Steps/Contact'
import Names from './Steps/Names'
import Review from './Steps/Review'
import Submit from './Steps/Submit'

const MultiStepForm = () => {
    const defaultData = {
        firstName: "Vo Ngoc",
        lastName: "Thanh Dat",
        age: "22",
        email: "example@gmail.com",
        street: "h09/14 k569 Tran Cao Van",
        city: "Da Nang",
        country: "Viet Nam",
        zipCode: "550000"
    }

    const steps = [
        { id: "names" },
        { id: "address" },
        { id: "contact" },
        { id: "review" },
        { id: "submit" },
    ]

    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case "names":
            return <Names {...props} />
        case "address":
            return <Address  {...props} />
        case "contact":
            return <Contact {...props} />
        case "review":
            return <Review {...props} />
        case "submit":
            return <Submit {...props} />
    }

    console.log("steps", step);

    return (
        <div className="flex justify-center py-10 px-10 bg-blue-500">

        </div>
    )
}

export default MultiStepForm
