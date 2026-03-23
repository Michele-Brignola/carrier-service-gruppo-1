import { Outlet } from "react-router";
import Header from "../components/Header";

export default function DefaultTemplate() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
