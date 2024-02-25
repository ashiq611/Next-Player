import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 border">
        <div className="p-4">

        <h2>Virux</h2>
        </div>

    <div className="flex gap-4">
      <Link className="p-4 bg-indigo-500 rounded-lg" href="/">
        Home
      </Link>
      <Link className="p-4 bg-indigo-500 rounded-lg" href="/about">
        About
      </Link>
    </div>
    </div>
  );
};

export default Navbar;
