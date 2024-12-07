import { useState, useEffect } from "react"
// eslint-disable-next-line react/prop-types, no-unused-vars
function CountDown({ duration }) {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    const getFormatedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
        let total_minutes = parseInt(Math.floor(total_seconds / 60))
        let total_hours = parseInt(Math.floor(total_minutes / 60))
        let days = parseInt(Math.floor(total_hours / 24))

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)
        let hours = parseInt(total_hours % 24)

        return (
            <>
                <div className="flex flex-row gap-4 justify-center items-center text-center">
                    <div  className="bg-gray-100 p-3bg-gray-100 p-3 shadow-md">
                        <div className="font-bold text-[20px]">{days}</div>
                        <span>Days</span>
                    </div>
                    <div  className="bg-gray-100 p-3bg-gray-100 p-3 shadow-md">
                        <div className="font-bold text-[20px]">{hours}</div>
                        <span>Hours</span>
                    </div>
                    <div  className="bg-gray-100 p-3bg-gray-100 p-3 shadow-md">
                        <div className="font-bold text-[20px]">{minutes}</div>
                        <span >Mins</span>
                    </div>
                    <div className="bg-gray-100 p-3bg-gray-100 p-3 shadow-md">
                        <div className="font-bold text-[20px]">{seconds}</div>
                        <span>Secs</span>
                    </div>

                </div>
            </>
        )
    }
    return (
        <div className="w-full flex justify-center">
            {getFormatedTime(time)}
        </div>
    )
}

export default CountDown
