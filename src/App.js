import Information from "./components/info";
import About from "./components/about";
import Interest from "./components/interest";
import Footer from "./components/footer";



export default function App() {
  return (
    <div className="main">
        <div className="card text-center">
          <Information />
          <About />
          <Interest />
          <Footer />
        </div>
    </div>
  )
}

