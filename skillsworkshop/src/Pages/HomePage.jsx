import "../App.css";
import HeroSection from "../Components/HeroSection";

function Home() {
  const [workshopList, setWorkshopList] = useState([]);

  const { id } = useParams;

  const authToken = window.localStorage.getItem("token");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events`) // making network request to url
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setWorkshopList(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}users/1/`) // making network request to url
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setWorkshopList(data);
  //     });
  // }, []);

  return (
    // <div>

    // </div>
    <HeroSection />
  );
}
