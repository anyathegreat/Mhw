import { Link, Outlet } from "react-router";

const navLinks = [
  { path: "/", title: "Главная" },
  { path: "/monsters", title: "Монстры" },
  { path: "/ailments", title: "Дебаффы" },
];

function Layout() {
  return (
    <>
      <nav>
        {navLinks.map(({ path, title }, index) => {
          return (
            <Link key={index} to={path}>
              {title}
            </Link>
          );
        })}
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
