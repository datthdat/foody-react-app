import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import Address from './Steps/Address'
import Contact from './Steps/Contact'
import Names from './Steps/Names'
import Review from './Steps/Review'
import Submit from './Steps/Submit'

const MultiStepForm = () => {
    const defaultData = {
        firstName: "",
        lastName: "",
        age: "",
        set: "",


        country: "",
        city: "",
        address: "",
        zip: "",

        email: "",
        phone: "",
        subject: "",
        message: ""
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
