import Nav from "../../../components/Nav";

export default function PublicLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
