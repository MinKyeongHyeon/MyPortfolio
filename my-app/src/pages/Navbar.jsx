export default function Navbar() {
  return (
    <div className="flex flex-col">
      <nav className="w-[90vw] h-[4vh] flex items-center justify-between">
        <h1>MKH</h1>
        <div className="flex gap-5">
          <p>search</p>
          <p>🍔</p>
        </div>
      </nav>
      <div className="w-full bg-black h-[1px]"></div>
    </div>
  );
}
