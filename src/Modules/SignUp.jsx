import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("nurse");

    const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:4000/api/auth/register", {
    //             email,
    //             password,
    //             role
    //         });

    //         console.log("Login successful:", response.data);

    //         const { role } = response.data;

    //         // Redirect to the login page after successful signup
    //         //get role first and then accordingly navigate
    //         if(role === "Nurse"){
    //             navigate("/nurse-dashboard");
    //         } else {
    //             navigate("/patient-dashboard");
    //         }
    //     } catch (error) {
    //     // Handle login error
    //     console.error("Login error:", error.response.data.message);
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const roleId = role === "nurse" ? "nurse" : "patient";

            const response = await axios.post("http://localhost:4000/api/auth/register", {
                email,
                password,
                roleId 
            });
    
            console.log("Login successful:", response.data);
    
            if (response && response.data) {
                console.log("Login successful:", response.data);
    
                 
                switch (roleId) {
                    case "nurse":
                        navigate("/nurse-dashboard");
                        break;
                    case "patient":
                        navigate("/patient-dashboard");
                        break;
                    default:
                        console.error("Invalid role ID:", roleId);
                }
            } else {
                console.error("No response from server");
            }
        } catch (error) {
        // Handle login error
        console.error("Login error:", error.response ? error.response.data.message : error);
        }
    }
    
    
    return(

        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up for an account
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                </div>

                <div>
                <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                    Role
                </label>
                <div className="mt-2">
                    <select
                    id="roleId"
                    name="roleId"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={role}
                    onChange={(e) => setRole(e.target.value.toLowerCase())}
                    >
                        <option value="nurse">nurse</option>
                        <option value="patient">patient</option>
                    </select>
                </div>
                </div>

                <div>
                <button
                    type="submit" 
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign up
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in here
                </a>
            </p>
            </div>
        </div>
        </>
    )
}
