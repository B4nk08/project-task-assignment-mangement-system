import DropdownListMenu from "./DropdownListMenu";
import Logos from "./Logos";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-8 sm:flex-row sm:items-center gap-4">
        <Logos />
        <Search/>
        <div className="flex gap-2">
          <DropdownListMenu/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
