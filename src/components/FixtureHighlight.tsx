import { useState } from "react";
import { arsernalIcon, calender, checkMark, chelseaIcon, clock, location, stadium } from "../constants/media";
import { Select } from "./Select";

const matches = [
  {
    id: 1,
    teams: [
      { name: "Chelsea", logo: chelseaIcon },
      { name: "Arsenal", logo: arsernalIcon },
    ],
    date: "Sat, July 27",
    time: "5:30PM",
    stadium: "Stamford Bridge",
    league: "EPL",
    image: stadium,
    votes: 10970,
    prediction: "Chelsea was voted to win by 97%",
  },
  {
    id: 2,
    teams: [
      { name: "Chelsea", logo: chelseaIcon },
      { name: "Arsenal", logo: arsernalIcon },
    ],
    date: "Sat, July 27",
    time: "5:30PM",
    stadium: "Stamford Bridge",
    league: "EPL",
    image: stadium,
    votes: 10970,
    prediction: "Chelsea was voted to win by 97%",
  },
  {
    id: 3,
    teams: [
      { name: "Chelsea", logo: chelseaIcon },
      { name: "Arsenal", logo: arsernalIcon },
    ],
    date: "Sat, July 27",
    time: "5:30PM",
    stadium: "Stamford Bridge",
    league: "EPL",
    image: stadium,
    votes: 10970,
    prediction: "Chelsea was voted to win by 97%",
  },
  {
    id: 4,
    teams: [
      { name: "Chelsea", logo: chelseaIcon },
      { name: "Arsenal", logo: arsernalIcon },
    ],
    date: "Sat, July 27",
    time: "5:30PM",
    stadium: "Stamford Bridge",
    league: "EPL",
    image: stadium,
    votes: 10970,
    prediction: "Chelsea was voted to win by 97%",
  },
];



const FixtureHighlight = () => {
  const [selected, setSelected] = useState('CHELSEA');
  const [status, setStatus] = useState<string | number | null>(null);
  const [league, setLeague] = useState<string | number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | number | null>(null);


  interface OptionType {
    label: string;
    value: string | number;
  }

  const SelectedOptionStatus = [
    { label: "Chelsea M", value: "1" },
    { label: "Chelsea W", value: "2" },
    { label: "Chelsea U21", value: "3" },
    { label: "Chelsea U18", value: "3" },
  ];

  const SelectedOptionLeguea = [
    { label: "EPL", value: "1" },
    { label: "EPL2", value: "2" },
    { label: "WEPL", value: "3" },
  ];
  const SelectedOptionDate = [
    { label: "Weekly", value: "1" },
    { label: "Monthtly", value: "2" },
    { label: "Yearly", value: "3" },
  ];
  const handleChangeStatus = (selectedOption: OptionType) => {
    setStatus(selectedOption.value);
    console.log(status)
  };

  const handleChangeLeague = (selectedOption: OptionType) => {
    setLeague(selectedOption.value);
    console.log(league)

  };

  const handleChangeDate = (selectedOption: OptionType) => {
    setSelectedDate(selectedOption.value);
    console.log(selectedDate)

  };


  return (
    <section id="fixtures" className="bg-[#E6EDF4] lg:rounded-2xl p-6 md:p-10 max-w-6xl mx-auto mt-16 py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-[#034694] font-semibold text-xs mb-1">
            <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
            FIXTURE
          </div>
          <div className="flex items-center gap-2 mt-3 mb-6">
            <div className="h-6 w-[1px] bg-gray-800 border-0"></div>
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Match Highlight</h2>
          </div>
          <div className="text-[#4B5563] text-sm">Chelsea male team have 4 matches this week</div>
        </div>
        <div className="flex gap-4 mt-4 lg:mt-0">
          <Select options={SelectedOptionStatus} onSelect={handleChangeStatus} />
          <Select options={SelectedOptionLeguea} onSelect={handleChangeLeague} />
          <Select options={SelectedOptionDate} onSelect={handleChangeDate} />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col md:flex-row gap-4 mb-8">
        <img src={stadium} alt="stadium" className="w-full md:w-64 h-auto object-cover rounded-tl-lg lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none" />
        <div className="flex flex-col lg:flex-row items-center p-3 gap-10">
          <div className="w-full lg:w-[70%]">
            <div className="flex items-center gap-2 text-lg font-semibold mb-4 mt-2">
              <img src={chelseaIcon} alt="Chelsea" className="w-6 h-6" />
              Chelsea <span className="text-gray-400 font-normal">vs</span>
              <img src={arsernalIcon} alt="Arsenal" className="w-6 h-6" />
              Arsenal
            </div>
            <div className="flex items-center gap-2 lg:gap-4 text-[9px] lg:text-[11px] lg:text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><img src={calender} alt="calender" className="w-4 h-4" /> {matches[0].date}</span>
              <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
              <span className="flex items-center gap-1.5"><img src={clock} alt="time" className="w-4 h-4" /> {matches[0].time}</span>
              <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
              <span className="flex items-center gap-1.5"><img src={location} alt="location" className="w-4 h-4" /> {matches[0].stadium}</span>
              <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
              <span className="flex items-center gap-1.5"><img src={location} alt="location" className="w-4 h-4" /> {matches[0].league}</span>
            </div>
            <div className="bg-[#FAFAFA] p-3 mt-8 rounded">
              <div className="flex items-center gap-2 font-medium">
                <span>🧠 Predict Who’s winning?</span>
                <span className="ml-auto text-xs bg-white p-2 rounded text-[#034694] font-normal">{matches[0].votes.toLocaleString()} votes</span>
              </div>
              <div className="flex gap-2 mt-4">
                {['CHELSEA', 'DRAW', 'ARSENAL'].map((option) => (
                  <button
                    key={option}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-md font-semibold text-xs transition-colors cursor-pointer ${selected === option ? 'bg-[#034694] text-white cursor-pointer' : 'bg-gray-white text-black hover:bg-[#034694]/10 bg-white'}`}
                    onClick={() => setSelected(option)}
                  >
                    {selected === option && (
                    <img src={checkMark} alt="Chelsea" className="w-4 h-4" />
                    )}
                    {option}
                  </button>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-3">{matches[0].prediction}</div>
              </div>
            </div>
          <div className="flex items-center justify-center lg:block gap-3 lg:gap-0 w-full my-4 lg:my-0 lg:w-[30%]">
            <button className="bg-[#034694] text-white text-xs rounded-full px-5 py-2 font-semibold shadow shadow-[#0038A840] cursor-pointer hover:bg-[#034694]/80">BUY MATCH TICKET</button>
            <button className="bg-[#F4F4F4] border text-xs border-[#D0D5DD] rounded-full px-5 py-2 font-semibold lg:mt-10 cursor-pointer hover:bg-[#F4F4F4]/10">View Match Details</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.slice(1).map((match) => (
          <div key={match.id} className="bg-white rounded-xl shadow flex flex-col">
            <img src={match.image} alt="stadium" className="w-full h-36 object-cover rounded-tr-lg rounded-tl-lg mb-3" />
            <div className="flex items-center gap-2 p-2.5 text-base font-semibold">
              <img src={match.teams[0].logo} alt="Chelsea" className="w-5 h-5" />
              Chelsea <span className="text-gray-400 font-normal">vs</span>
              <img src={match.teams[1].logo} alt="Arsenal" className="w-5 h-5" />
              Arsenal
            </div>
            <div className="flex items-center gap-2 p-2.5 text-[10px] lg:text-[9px] text-gray-500 mt-1">
              <span className="flex items-center gap-1"><img src={calender} alt="calender" className="w-4 h-4" /> {matches[0].date}</span>
              <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
              <span className="flex items-center gap-1.5"><img src={clock} alt="time" className="w-4 h-4" /> {matches[0].time}</span>
              <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
              <span className="flex items-center gap-1.5"><img src={location} alt="location" className="w-4 h-4" /> {matches[0].stadium}</span>
              <div className="h-4 w-[1px] bg-gray-400 border-0"></div>
              <span className="flex items-center gap-1.5"><img src={location} alt="location" className="w-4 h-4" /> {matches[0].league}</span>
            </div>
            <div className="h-[0.5px] bg-gray-200 w-full border-0 my-3"></div>
            <div className="bg-[#FAFAFA] p-2.5 mt-1 rounded mx-2">
              <div className="flex items-center gap-2 font-medium text-sm">
                <span>🧠 Predict Who’s winning?</span>
                <span className="ml-auto text-xs bg-white p-2 rounded text-[#034694] font-normal">{matches[0].votes.toLocaleString()} votes</span>
              </div>
              <div className="flex gap-2 mt-4">
                {['CHELSEA', 'DRAW', 'ARSENAL'].map((option) => (
                  <button
                    key={option}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-md font-semibold text-xs transition-colors cursor-pointer  ${selected === option ? 'bg-[#034694] text-white cursor-pointer' : 'bg-gray-white text-black hover:bg-[#034694]/10 bg-white'}`}
                    onClick={() => setSelected(option)}
                  >
                    {selected === option && (
                    <img src={checkMark} alt="Chelsea" className="w-4 h-4" />
                    )}
                    {option}
                  </button>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-3">{matches[0].prediction}</div>
            </div>
            <div className="flex items-center justify-center gap-3 my-6">
              <button className="text-[#034694] border border-[#034694] bg-white text-xs rounded-full px-3 py-2 font-semibold cursor-pointer hover:bg-[#034694]/10">BUY MATCH TICKET</button>
              <button className="bg-[#F4F4F4] border text-xs border-[#D0D5DD] rounded-full px-3 py-2 font-semibold cursor-pointe hover:bg-[#F4F4F4]/10">View Match Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FixtureHighlight;
