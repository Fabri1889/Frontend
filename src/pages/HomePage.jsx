import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-zinc-800 flex justify-center items-center min-h-screen">
      <header className="text-center p-10">
        <h1 className="text-5xl py-2 font-bold text-white">TaskMaster</h1>
        <p className="text-lg text-slate-400 mt-4">
          ¡Ya no hay excusas para olvidar!
        </p>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 inline-block transition duration-300"
          to="/register"
        >
          Comenzar
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
