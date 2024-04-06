import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-center flex-col my-12 items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 px-4 sm:px-6 lg:px-8 gap-8 p-4 grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
        <section className="">
          <h3 className="text-2xl font-medium">About Us</h3>
          <p className="mt-8 text-slate-400">
            Music School is premier institution dedicate tho teach the art of
            music .We nurture art talent from ground up, fostering a vibrant
            community.
          </p>
        </section>
        <section className="">
          <h3 className="text-2xl font-medium">Quick Links</h3>
          <nav className="mt-8 flex flex-col gap-2 text-slate-400">
            <Link className="hover:text-white" href={"/courses"}>
              Home
            </Link>
            <Link className="hover:text-white" href={"/courses"}>
              About
            </Link>
            <Link className="hover:text-white" href={"/courses"}>
              Courses
            </Link>
            <Link className="hover:text-white" href={"/courses"}>
              Contact Us
            </Link>
          </nav>
        </section>
        <section className="">
          <h3 className="text-2xl font-medium">Follow Us</h3>
          <ul className="mt-8 list-none flex gap-2 text-slate-400">
            <li>
              <Link className="hover:text-white" href={"/"}>
                FaceBook
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={"/"}>
                Twitter
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={"/"}>
                Instagram
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="text-2xl font-medium">Contact Us</h3>
          <address className="mt-8 text-slate-400 ">
            <p>Kalyan India</p>
            <p>Kalyan 421306</p>
            <p>Email: ganeshdoitnowh100@gmail.com</p>
            <p>Phone: 91-7174443232</p>
          </address>
        </section>
      </div>
      <p className="text-slate-400">
        &copy; 2024 Music School All rights reserved
      </p>
    </footer>
  );
}
export default Footer;
