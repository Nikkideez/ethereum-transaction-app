import {
  MainForm,
  Transactions,
  ViewTransactions,
  ViewAbout,
  About,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col h-screen justify-evenly">
        <MainForm />
        <div>
          <ViewTransactions />
          <ViewAbout />
        </div>
      </div>
      <div className="p-1">
        <Transactions />
        <About/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
