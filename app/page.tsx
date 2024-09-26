import Header from "./header";
import Welcome from "./welcome";


export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Welcome />
      </main>
      <footer className=" fixed bottom-0 border-primary  border-t  w-full p-4">
        footer
      </footer>
    </div>
  );
}
