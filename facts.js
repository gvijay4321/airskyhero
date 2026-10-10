// AirSkyHero: fun facts about planes and flying, shown on airskyhero.com/fun-facts/ grouped by topic.
// Each fact needs at least three independent reliable sources (copies of the same wire story count once).
// topic: the page section (topics appear in the order they first appear here). when: optional date line.
// home: true lists the fact's title on the home page. summary: in our own words, never copied from the sources.
// After editing, run "npm run build".
const FACTS = [
  { id: "airliner-lounges-and-dance-floors", topic: "Life on board", when: "1949 to the 1980s", home: true,
    title: "Jumbo jets once had piano bars and a dance floor",
    summary: "In the early days of big airliners, flying was a social event. The Boeing 377 Stratocruiser of the late 1940s had a cocktail lounge for 14 people, reached by a spiral staircase to its lower deck. When the 747 arrived, American Airlines took out dozens of economy seats in 1971 to fit a lounge with a Wurlitzer electric piano, which a steward would sometimes play. Around the same time Air Canada put a small dance floor, a mirrored wall and 8-track music upstairs on its 747s flying between Toronto and Europe. The dance floor lasted only about a year, and by the 1980s most lounges had become rows of paying seats.",
    sources: [
      "https://historyfacts.com/arts-culture/fact/airplanes-used-to-have-dance-floors/",
      "https://travelupdate.com/air-canada-747-dance-floor/",
      "https://www.airwaysmag.com/legacy-posts/american-airlines-jumbo-years",
      "https://migflug.com/afterburner/boeing-377-stratocruiser-double-deck-lounge/"
    ] },
  { id: "ashtrays-on-non-smoking-planes", topic: "Life on board", home: true,
    title: "Brand-new planes still come with ashtrays",
    summary: "Smoking has been banned on nearly every flight for decades, yet airliners still leave the factory with ashtrays next to the toilet doors. US safety rules require them whether or not smoking is allowed. The reasoning is simple: sooner or later someone will light up in secret, and it is far safer for them to put the cigarette out in a metal ashtray than in a bin full of paper towels.",
    sources: [
      "https://www.law.cornell.edu/cfr/text/14/25.853",
      "https://www.abc15.com/news/national/why-airplanes-still-have-ashtrays",
      "https://www.scienceabc.com/eyeopeners/why-do-airplanes-have-ashtrays-if-smoking-is-banned.html",
      "https://migflug.com/afterburner/why-airliners-still-have-ashtrays-far-25-853/"
    ] },
  { id: "first-stewardesses-were-nurses", topic: "Life on board", when: "15 May 1930",
    title: "The first air hostesses had to be nurses",
    summary: "Ellen Church was a registered nurse with a pilot's licence. Boeing Air Transport, which later became United, would not hire her to fly, so she talked the airline into putting nurses on board to calm nervous passengers. On 15 May 1930 she worked a 20-hour trip from Oakland to Chicago with 13 stops, becoming the first woman flight attendant. She and her seven colleagues had to be single nurses no older than 25, no taller than 5 ft 4 in and no heavier than 115 lb, and their jobs included carrying bags and helping to refuel the plane.",
    sources: [
      "https://viewfromthewing.com/90-years-ago-today-a-woman-flew-as-a-flight-attendant-for-the-first-time/",
      "https://www.thisdayinaviation.com/tag/stewardess/",
      "https://stuckattheairport.com/2024/05/15/airlines-once-had-stewardess-nurses-so-did-trains/"
    ] },
  { id: "pilots-eat-different-meals", topic: "Food and drink", home: true,
    title: "The two pilots usually eat different meals",
    summary: "Many airlines make sure the pilots at the controls eat different dishes, often at different times. If one meal turns out to be bad, only one of them gets sick and the other can still land the plane. It is airline policy rather than law: at Virgin Atlantic, for instance, the captain has to agree if both pilots want the same thing.",
    sources: [
      "https://sg.style.yahoo.com/why-pilots-eat-different-meals-133510292.html",
      "https://www.islands.com/1810326/real-safety-reason-airline-pilots-avoid-eating-same-meal-flight/",
      "https://aeroxplorer.com/articles/why-pilots-never-eat-the-same-meal"
    ] },
  { id: "tomato-juice-tastes-better-in-the-air", topic: "Food and drink", when: "2010",
    title: "Tomato juice really does taste better in the air",
    summary: "Lufthansa noticed that its passengers drank nearly as much tomato juice as beer, so it asked Germany's Fraunhofer Institute to find out why. In a mock cabin at low air pressure, testers found salt and sugar tasted up to about 30% weaker, and tomato juice that seemed earthy on the ground came across as fruity and refreshing. A later Cornell University study found that loud engine noise dulls sweetness but strengthens umami, the savoury taste that tomatoes are full of.",
    sources: [
      "https://www.thelocal.de/20111111/38811",
      "https://gulfnews.com/uae/science/currying-flavour-at-10000-metres-1.68075705",
      "https://www.news.cornell.edu/stories/2015/05/planes-savory-tomato-becomes-favored-flavor",
      "https://improbable.com/2014/03/25/simulated-high-altitute-taste-testing-of-tomato-juice/"
    ] },
  { id: "the-40000-dollar-olive", topic: "Food and drink", when: "1980s",
    title: "One missing olive saved an airline $40,000 a year",
    summary: "Robert Crandall, who ran American Airlines in the 1980s, was famous for hunting down costs. In the best-known story, he took a single olive off every first-class salad, nobody complained, and the airline saved around $40,000 a year. It is still told as a lesson in how small savings add up, though some tellings put the figure higher.",
    sources: [
      "https://en.wikipedia.org/wiki/Robert_Crandall",
      "https://viewfromthewing.com/a-lesson-about-cost-controls-that-airline-executives-need-to-learn-from-bob-crandall/",
      "https://www.smartertravel.com/now-even-first-class-is-being-nickel-and-dimed/"
    ] },
  { id: "black-boxes-are-orange", topic: "How planes work",
    title: "Black boxes aren't black",
    summary: "The flight recorders everyone calls black boxes are painted bright orange, and US rules also allow bright yellow. The vivid colour and strips of reflective tape help investigators spot them among burnt wreckage or on the sea bed. Nobody is quite sure how the black box nickname started.",
    sources: [
      "https://howthingsfly.si.edu/ask-an-explainer/why-does-black-box-flight-recorder-sit-back-aircraft",
      "https://www.law.cornell.edu/cfr/text/14/25.1457",
      "https://www.nbcwashington.com/news/national-international/plane-black-boxes-plane-crash-investigations/"
    ] },
  { id: "mayday-means-help-me", topic: "How planes work", when: "1923",
    title: "Mayday comes from French for 'help me'",
    summary: "Once pilots began talking over the radio, they needed a spoken distress call, because the S in SOS was hard to hear on a crackly line. In 1923 Croydon Airport near London chose Mayday, from the French m'aider, as in venez m'aider, 'come and help me'. It suited the many flights between Croydon and Le Bourget in Paris. The idea is credited to Croydon's senior radio officer, Frederick Stanley Mockford, and in 1927 it became the official international voice distress call.",
    sources: [
      "https://grammarphobia.com/blog/2013/11/mayday.html",
      "https://wordhistories.net/2016/11/03/mayday/",
      "https://connexionfrance.com/magazine/mayday-emergency-call-originated-from-maidez/492218"
    ] },
  { id: "first-flight-shorter-than-747-wing", topic: "Firsts and record breakers", when: "17 December 1903", home: true,
    title: "The first flight would fit inside a jumbo jet's wings",
    summary: "Orville Wright's first powered flight at Kitty Hawk lasted 12 seconds and covered about 120 feet (37 m). The first Boeing 747 measured 195 ft 8 in from wingtip to wingtip, so the whole flight could have taken place between a jumbo's wings with room to spare. Orville noticed the same thing in 1944, when he flew in a Lockheed Constellation whose wings were longer than his first hop.",
    sources: [
      "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm",
      "https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000",
      "https://www.historylink.org/File/1181",
      "https://www.inventionandtech.com/taxonomy/term/11641"
    ] },
  { id: "wright-flyer-went-to-the-moon", topic: "Firsts and record breakers", when: "20 July 1969",
    title: "Pieces of the Wright brothers' plane went to the Moon",
    summary: "Neil Armstrong, who came from Ohio like the Wright brothers, packed a sliver of wood from the 1903 Wright Flyer's propeller and a scrap of fabric from its wing in his personal kit for Apollo 11. They were inside the lunar module Eagle when it landed on the Moon, just 66 years after the first flight at Kitty Hawk. Some of the pieces are now on show at the Smithsonian.",
    sources: [
      "https://airandspace.si.edu/stories/editorial/explore-wright-flyer",
      "https://www.nasa.gov/history/120-years-ago-the-first-powered-flight-at-kitty-hawk/",
      "https://uc.edu/news/articles/2020/02/n20894306.html",
      "https://www.antiquesandthearts.com/high-flyers-at-heritage-auctions-space-exploration-auction"
    ] },
  { id: "concorde-landed-before-it-left", topic: "Firsts and record breakers", when: "1976 to 2003",
    title: "On Concorde you landed before you took off",
    summary: "Concorde crossed from London to New York in about three and a half hours, while New York's clocks are usually five hours behind London's. So on the westbound trip passengers touched down earlier, by local time, than they had left. British Airways' morning flight left Heathrow at 10:30 and arrived at JFK around 8:30, which is how Concorde got its name as a time machine.",
    sources: [
      "https://www.pbs.org/wgbh/nova/supersonic/speed.html",
      "https://aeroreport.de/en/aviation/flying-in-the-concorde-the-fastest-of-passenger-jets",
      "https://travelweekly.co.uk/news/factfile-concorde"
    ] }
];

if (typeof module !== "undefined") module.exports = FACTS;
