function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-center gap-8">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">About</li>
        <li className="hover:text-yellow-300 cursor-pointer">Services</li>
        <li className="hover:text-yellow-300 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;