import RoutesConfig from "../routes/RouteConfig";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {RoutesConfig.map((route) => (
          <li key={route.path}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
