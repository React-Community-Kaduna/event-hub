import Modal from "./Modal";

function RegModal ({confirmReg,closeRegModal,isRegLoading}){

    return (
        <Modal>
            <div className="bg-white px-4 w-4/5  md:max-w-[500px] font-openSans font-normal text-start  py-10 flex flex-col gap-6 rounded-lg">
            <h1 className="md:text-center text-xl md:text-[1.5rem] font-normal">Are you sure you want to register for this event</h1>
            <div className="flex justify-end gap-4">
                <button disabled={isRegLoading} onClick={()=>closeRegModal()} className="disabled:cursor-not-allowed bg-gray-800 text-white py-2 px-4 rounded-md capitalize border" >cancle</button>
                <button disabled={isRegLoading} onClick={()=>confirmReg()} className="disabled:cursor-not-allowed hover:bg-[#3557c2] bg-white text-[#3557c2] hover:text-white py-2 px-4 rounded-md capitalize hover:border-transparent border border-[#3557c2]" >{isRegLoading?"submitting....":"register"}</button>
            </div>               
            </div>
        </Modal>
    )
}

export default RegModal