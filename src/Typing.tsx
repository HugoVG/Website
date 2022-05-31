import Typewriter from 'typewriter-effect';

export default function Typing() {
  return (
    <div className="App" style={{display: "inline", fontSize: "x-large"}}>
      <Typewriter  options={{strings: ["Back-end", "Mobile", "Desktop", "Web"], autoStart: true, loop: true}} />
      <span> Developer</span>
    </div>
  );
};