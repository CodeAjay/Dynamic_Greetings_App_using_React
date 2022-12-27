import "./styles.css";

const time = new Date();
const tm = time.getHours();
var grt = "";
const styl = {};
const stl = {};
const day = time.toDateString();

if (tm >= 0 && tm < 12) {
  grt = "Good Morning";
  styl.color = "green";
  stl.backgroundImage =
    'url("https://source.unsplash.com/1080x720/?good-morning")';
} else if (tm >= 12 && tm < 16) {
  grt = "Good Afternoon";
  styl.color = "orange";
  stl.backgroundImage =
    'url("https://source.unsplash.com/1080x720/?good-aftrenoon")';
} else if (tm >= 16 && tm < 19) {
  grt = "Good Evening";
  styl.color = "Blue";
  stl.backgroundImage =
    'url("https://source.unsplash.com/1080x720/?good-evening")';
} else {
  grt = "Good Night";
  styl.color = "black";
  stl.backgroundImage =
    'url("https://source.unsplash.com/1080x720/?good-night")';
}

export default function App() {
  return (
    <div className="App" style={stl}>
      <div className="con">
        <h1>
          Hello There: <span style={styl}>{grt}</span>
        </h1>
        <h4 style={styl}>It's {day} today.</h4>
      </div>
    </div>
  );
}
