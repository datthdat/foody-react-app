import React from 'react'

const Review = ({ formData, setForm, navigation }) => {
    const data = Object.entries(formData)
    console.log("data", data);
    return (
        <div className="flex justify-center">
            <pre>
                {JSON.stringify(formData, null, " ")}
            </pre>


            {/* {formData.map((items, index) => {
                return (
                    <div key={index}>
                        ne
                    </div>
                )
            })} */}
        </div>
    )
}

export default Review
