const Contact = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold p-2 m-2 text-center">Contact US</h1>
            <form className="flex justify-center flex-col w-6/12 mx-auto">
                <input type="text" placeholder="Name" className="border border-black rounded-lg m-2 p-2"/>
                <input type="text" placeholder="Message" className="border border-black rounded-lg m-2 p-2"/>
                <button className="bg-gray-200 rounded-lg m-2 p-2 w-4/12 mx-auto">Submit</button>

            </form>
        </div>
    )
}

export default Contact;