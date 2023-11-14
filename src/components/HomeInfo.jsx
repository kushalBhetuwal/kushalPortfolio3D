const renderContent = {
  1: (
    <h1 className="sm:text-sm sm:leading-snug text-center neo-brutalism-blue text-white">
      <div className="container">
        <div className="text">
          <span style={{ "--i": 1 }}>👋 </span>
          <span style={{ "--i": 2 }}>H</span>
          <span style={{ "--i": 3 }}>i</span>
          <span style={{ "--i": 4 }}>....</span>
          <span style={{ "--i": 5 }}>I</span>
          <span style={{ "--i": 6 }}>a</span>
          <span style={{ "--i": 7 }}>m</span>
          <span style={{ "--i": 8 }}>:::</span>
        </div>
      </div>

      <div className="stage" style={{ animationPlayState: "running" }}>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </h1>
  ),
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};
const InfoBox = ({ text, link, btnText }) => <div className="in">{text}</div>;

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};

export default HomeInfo;
