import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      <img src={logo} alt="logo" className="w-44" />
      <form className="flex flex-col justify-center gap-4 w-full text-2xl">
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />

        <Button text="signin" type="submit" />
      </form>
      <p className="text-white text-2xl">
        Don't have an account? <Link to="/signup" className="text-sky-400 hover:text-sky-600">Register</Link>
      </p>
    </div>
  );
}
