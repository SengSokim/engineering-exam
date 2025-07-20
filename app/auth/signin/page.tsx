import Header from "@/app/components/Header";
export default function signIn() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 mt-10">
        <div className="p-10">
          <h2 className="text-4xl font-bold">Sign In</h2>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            vitae dolore est eveniet beatae deserunt error neque delectus eum,
            labore magnam maiores porro recusandae voluptates officia provident
            rerum quis nostrum velit! Molestiae dolor ipsa accusantium facilis
            quis distinctio id tenetur!
          </p>
        </div>
        <div className="p-10">
          <p>
            Please Enter the following information to sign in
          </p>
          <form className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  BEC ID Number
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Enter your BEC ID"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Confirm BEC ID"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="*****"
                />
              </div>
            </div>
            <a href="/auth/signin" className="text-indigo-500">
              Already have an account? Sign in
            </a>
            <button
              type="submit"
              className="float-right rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
