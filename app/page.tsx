import Header from "./header";
import Preview from "./preview";
import Videos from "./videos";
import Welcome from "./welcome";


export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="sm:space-y-12 space-y-4">
        <Welcome />
        <Preview />
        <Videos />
        <footer className="w-full p-4 bg-backgroundSecondary">
          footer
        </footer>
      </main>

    </div>
  );
}
