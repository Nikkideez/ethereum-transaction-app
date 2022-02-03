import { MainForm, Transactions, Footer } from "./components";
const App = () => {
  return (
      <div className="flex flex-col sm:h-screen justify-between bg-black text-white">
        <MainForm />
        <Transactions className="mb-auto" />
        <Footer />
      </div>
  );
};

export default App;
