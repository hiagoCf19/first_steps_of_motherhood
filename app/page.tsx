import Header from "./header";
import Preview from "./preview";
import Welcome from "./welcome";


export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="sm:space-y-12 space-y-4">
        <Welcome />
        <Preview />
        <footer className=" mt-4 border-primary  border-t  w-full p-4">
          footer
        </footer>
      </main>

    </div>
  );
}
