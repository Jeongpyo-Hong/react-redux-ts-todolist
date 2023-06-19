import "./layout.scss";

interface childrenProp {
  children: React.ReactNode;
}

const Layout = ({ children }: childrenProp) => {
  return (
    <div className="container">
      <div className="innerContainer">{children}</div>
    </div>
  );
};

export default Layout;
