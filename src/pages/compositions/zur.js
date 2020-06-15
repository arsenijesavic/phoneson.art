import React, { useEffect, useRef, useState } from "react";
import { get } from "lib/api";
import Konva from "konva";
import { Stage, Layer, Group, Circle } from "react-konva";
import { Howl, Howler } from "howler";
import * as Tone from "tone";

// import useDeviceMotion from "hooks/useDeviceMotion";

const _sounds = [
  {
    title: "1",
    background: "#ED247B",
    color: "white",
    src: "/assets/7-menuer4phones/A/0.mp3",
  },

  {
    title: "4",
    background: "white",
    color: "#ED247B",
    src: "/assets/7-menuer4phones/A/3.mp3",
  },

  {
    title: "2",
    background: "#FB932D",
    color: "white",
    src: "/assets/7-menuer4phones/A/1.mp3",
  },
  {
    title: "5",
    background: "white",
    color: "#FB932D",
    src: "/assets/7-menuer4phones/A/4.mp3",
  },

  {
    title: "3",
    color: "white",
    background: "#B153E9",
    src: "/assets/7-menuer4phones/A/2.mp3",
  },

  {
    title: "6",
    color: "#B153E9",
    background: "white",
    src: "/assets/7-menuer4phones/A/5.mp3",
  },

  // {
  //   title: "7",
  //   color: "red",
  //   background: "black",
  //   src: "/assets/7-menuer4phones/A/Sound5.mp3",
  // },
];

function intersections(a, b) {
  //this.x, this.y, other.x, other.y
  // const d = hypot(args[2] - args[0], args[3] - args[1]);
  const d = Math.hypot(b.x - a.x, b.y - a.y);

  return d < a.radius + b.radius;
  // return Math.sqrt((a.x - b.x)(a.x - b.x) + (a.y - b.y)(a.y - b.y) < a.radius);
  // var R = a.radius,
  //   r = b.radius,
  //   dx = b.x - a.x,
  //   dy = b.y - a.y,
  //   d = Math.sqrt(dx * dx + dy * dy),
  //   x = (d * d - r * r + R * R) / (2 * d),
  //   y = Math.sqrt(R * R - x * x);
  // dx /= d;
  // dy /= d;
  // return [
  //   [a.x + dx * x - dy * y, a.y + dy * x + dx * y],
  //   [a.x + dx * x + dy * y, a.y + dy * x - dx * y],
  // ];
}

const Sketch = () => {
  const [effects, setEffects] = useState();

  useEffect(() => {
    // const filter = new Tone.AutoFilter({
    //   frequency: 2,
    //   depth: 0.9,
    // })
    //   .toMaster()
    //   .start();
    // const filter = new Tone.Filter(200, "highpass");

    var lowPassFreq = new Tone.Signal(300, Tone.Frequency);

    var lowPassFilter = new Tone.Filter({
      type: "highpass",
      frequency: lowPassFreq.value,
    }).toMaster();

    const osc0 = new Tone.Oscillator({
      volume: 0.4,
      type: "square6",
      frequency: "C4",
    });

    // osc0.connect(lowPassFilter).start();

    setEffects({ lowPassFreq, lowPassFilter, osc0 });
  }, []);

  const onMove = (e) => {
    const { lowPassFreq, lowPassFilter } = effects;
    // lowPassFreq.rampTo(e.target.value, 0.05);
    // lowPassFilter.frequency.value = lowPassFreq.value;
    // lowPassFilter.frequency.value = e.target.value;
    const { value } = e.target;
    console.log(value);
    lowPassFilter.frequency.linearRampToValueAtTime(value, 0.5);
    // filter.frequency = e.target.value;
    // console.log(filter.frequency);
    // frequency
    // console.log(e.target.value);
  };

  const [sounds, setSounds] = useState(
    _sounds.map((sound) => new Howl({ src: [sound.src] }))
  );

  const [notes, setNotes] = useState([]);
  const requestRef = React.useRef();

  const updateNotes = (prevNotes) => {
    const notes = prevNotes.map((note) => ({
      ...note,
      y: note.y + 1,
      radius: 30,
    }));
    // .filter((note) => {
    //   console.log(!note.y < 500);
    //   return true;
    // });

    const r = Math.random();
    const prob = 0.01;

    if (r < prob) {
      const newNote = {
        x: Math.floor(Math.random() * 1000 - 50) + 50,
        y: 0,
        radius: 50,
      };

      // notes.forEach((note) => {
      //   const isOverlaping = intersections(note, newNote);
      //   console.log(isOverlaping);
      // });
      // notes.push(newNote);
    }

    return notes;
  };

  const animate = (time) => {
    setNotes(updateNotes);

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleOnNoteClick = (e, index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    const indexToPlay = Math.floor(Math.random() * _sounds.length);
    sounds[indexToPlay].play();
  };

  return (
    <div>
      <input type="range" onChange={onMove} min="0" max="1000" />

      <Stage width={1000} height={1000}>
        <Layer>
          {notes.map((note, index) => (
            <Circle
              key={index}
              {...note}
              radius={50}
              fill="red"
              onClick={(e) => handleOnNoteClick(e, index)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ({ composition }) => {
  return (
    <div className="text-gray-100 max-w-screen-lg mx-auto min-h-screen pb-48">
      <header className="py-4">
        <div className="flex items-center px-4">
          <div onClick={() => router.back()} className="mr-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-teal-500"
            >
              <path d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-gray-100 text-2xl leading-none">
              {/* {composition.name} */}
              Zur
            </h1>
            {/* <ul>
              {composition.compositors.map((composer, index) => (
                <li key={index}>
                  <p className="font-regular text-xs leading-none text-gray-300 uppercase">
                    {composer.name}
                  </p>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </header>

      <Sketch />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const [composition] = await get(
    `*[_type == 'composition' && slug == '/compositions/one-bit-flow']|order(date desc) [0..10]{
      ...,
      "compositors": *[_type == 'composers' && name in ^.compositors[]]
    }`
  );

  return {
    props: { composition },
  };
}
