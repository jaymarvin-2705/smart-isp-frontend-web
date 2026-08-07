import AuthLayout from "@/layouts/AuthLayout";

export default function Login() {
    return (
        <AuthLayout>

            <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Smart ISP
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg p-3 mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg p-3 mb-6"
                />

                <button
                    className="w-full bg-blue-700 text-white p-3 rounded-lg"
                >
                    Login
                </button>

            </div>

        </AuthLayout>
    );
}