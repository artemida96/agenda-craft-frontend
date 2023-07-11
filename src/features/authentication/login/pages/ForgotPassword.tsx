const ForgotPassword = ()=> {
return (<div className="min-h-screen grid place-content-center bg-gradient-to-r from-red-500">
        <form className="bg-red-100 px-8 py-6 pb-6 flex flex-col">
            <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Your email
                </label>
                <input className="w-full py-2 px-6" id="email" type="email" placeholder="email"/>
            </div>
             <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                New Password
                </label>
                <input className="border border-red-500 w-full py-2 px-6 " id="password" type="password"/>

             </div>
             <div className="mt-4 ">
             <label className="block text-gray-700 text-sm font-bold mb-2" >
                Confirm Password
                </label>
                <input className="border border-red-500 w-full py-2 px-6 " id="password" type="password"  placeholder="******************"/>
             </div>
            
             <div className="flex flex-col mt-4 self-center"> 
                
                <button className="btn-primary text-white py-2 px-4 mb-2 "type="button" >
                    Reset password
                </button>
                <a className="text-center mt-4 " href="/login">
                    Go to Login
                </a>
            </div>
        </form>
    </div>)
}
export default ForgotPassword;