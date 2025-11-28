import CountUp from "./CountUp";

const stats = [
  { value: "300+", label: "Happy Clients" },
  { value: "400+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "96.8%", label: "Uptime Guarantee" },
];
export default function Score() {
  //
  return (
    <div className="p-8 bg-[#F5F7F8] rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  text-center">
        {stats.map((stat, i) => {
          const parseStat = (val) => {
            const str = String(val);
            let suffix = "";
            let numStr = str;

            if (str.endsWith("+")) {
              suffix = "+";
              numStr = str.slice(0, -1);
            } else if (str.endsWith("%")) {
              suffix = "%";
              numStr = str.slice(0, -1);
            }

            const to = parseFloat(numStr.replace(/,/g, "")) || 0;

            return { to, suffix };
          };

          const { to, suffix } = parseStat(stat.value);

          return (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 inline-flex items-baseline justify-center gap-1">
                <CountUp to={to} className="leading-none" separator="," />
                {suffix && <span className="font-bold text-3xl">{suffix}</span>}
              </div>
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
