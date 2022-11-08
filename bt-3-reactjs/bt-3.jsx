

function PrevIcon(props) {
  return (
    <svg
      id="prev-icon_svg__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 20.9 12"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".prev-icon_svg__st0{fill:#fff;stroke:#000;stroke-width:.75;stroke-miterlimit:10}"
        }
      </style>
      <path
        className="prev-icon_svg__st0"
        d="M1 6l9.1 5.2V.8zM11.4 6l9.1 5.2V.8z"
      />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 22 22" {...props}>
      <circle cx={11} cy={11} r={10.6} fill="#fff" />
      <path d="M11 .8c5.7 0 10.3 4.6 10.3 10.3S16.7 21.3 11 21.3.8 16.7.8 11 5.3.8 11 .8m0-.8C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0z" />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth={0.75}
        strokeMiterlimit={10}
        d="M16.5 11L7.4 5.8v10.4z"
      />
    </svg>
  );
}

function PauseIcon(props) {
  return (
    <svg
      id="pause-icon_svg__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 14 22"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".pause-icon_svg__st0{fill:#fff}"}</style>
      <path className="pause-icon_svg__st0" d="M.4.4h5.3v21.3H.4z" />
      <path d="M5.3.8v20.5H.8V.8h4.5M6 0H0v22h6V0z" />
      <path className="pause-icon_svg__st0" d="M8.4.4h5.3v21.3H8.4z" />
      <path d="M13.3.8v20.5H8.8V.8h4.5M14 0H8v22h6V0z" />
    </svg>
  );
}

function NextIcon(props) {
  return (
    <svg
      id="next-icon_svg__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 20.9 12"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".next-icon_svg__st0{fill:#fff;stroke:#000;stroke-width:.75;stroke-miterlimit:10}"
        }
      </style>
      <path
        className="next-icon_svg__st0"
        d="M20 6L10.9.8v10.4zM9.6 6L.5.8v10.4z"
      />
    </svg>
  );
}

const audios = [
  {
    src: "./audios/XuanOiOLaiChoi",
    title: "Xuân Ơi Ở Lại Chơi",
    artist: "Tăng Nhật Tuệ - Hoàng Yến Chibi - Tino",
    img: "./images/xuan-oi-o-lai-choi.jpge",
  },
  {
    src: "./audios/NgayXuanLongPhungSumVay",
    title: "Ngày Xuân Long Phụng Sum Vầy",
    artist: "Bích Phương",
    img: "./images/ngay-xuan-long-phung.jpg",
  },
  {
    src: "./audios/DoanXuanCa",
    title: "Đoản Xuân Ca",
    artist: "Bích Phương",
    img: "./images/doan-xuan-ca.jpg",
  },
];

const App = () => {
  const audioRef = React.useRef();
  const [audioIndex, setAudioIndex] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isPlay, setPlay] = React.useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <img className="Song-Thumbnail" alt="tet" src={audios[audioIndex].img} />
      <h2 className="Song-Title">{audios[audioIndex].title}</h2>
      <p className="Singer">{audios[audioIndex].artist}</p>
      <div className="Control-Button-Group">
        <div
          className="Prev-Button"
          onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
        >
          <PrevIcon />
        </div>
        <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
        <div
          className="Next-Button"
          onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
        >
          <NextIcon />
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
