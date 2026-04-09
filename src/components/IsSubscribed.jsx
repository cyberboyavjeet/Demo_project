function IsSubscribed(props){
    const isSubscribed=true
    const isLoggedIn=true
    return(
        <div className="min-h-screen bg-grey-100 p-6 flex
        item-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md
             text-center">
                <h2 className="text-xl font-bold mb-4 text-blue-600
                ">Subscription Status</h2>
                {
                    props.status ? <button className="px-4 py-2 bg-green-800
                    text-white rounded-xl">Subscribed</button>
                    : <button className="px-4 py-2 bg-red-500
                    text-white rounded-xl">Subscribe</button>
                }
                {
                    isLoggedIn && 
                    <p className="text-blue-600 font-semibold">Welcome to your deshboard</p>
                }

            </div>

        </div>
    
    )
}
export default IsSubscribed