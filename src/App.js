import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Moon Seong Ju",
    location: "대한민국",
    tagline: "Nice to meet you",
    email: "msj07197@naver.com",
    availability: "Javascript, React, Node.js, MongoDB",
    brand:
      "동명대학교 컴퓨터공학을 전공을 통해 Java, Javascirpt, DB등을 배웠습니다. 이후 React, Node.js도 습득하며 역량을 길렀으며 현재는 React의 역량을 더욱 키우기 위해 공부중입니다.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
