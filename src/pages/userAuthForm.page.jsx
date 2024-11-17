import "../index.css";

const UserAuthForm = ({type}) =>{
    return(
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "Login" ? "Welcome back" : "Join us today"}
                    {/*1:06:00*/}
                </h1>

            
            </form>
        </section>
    )
}

export default UserAuthForm;