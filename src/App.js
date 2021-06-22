//倒入header
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      {/* 调用header 也可以在此给title赋值*/}
      <Header />
    </div>
  );
}

export default App;
