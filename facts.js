// AirSkyHero: fun facts about planes and flying, shown on airskyhero.com/fun-facts/ grouped by topic.
// Each fact needs at least three independent reliable sources (copies of the same wire story count once).
// topic: the page section (topics appear in the order they first appear here). when: optional date line.
// stat and statLabel: optional big number shown on the card, with a short line saying what it is.
// quiz: optional multiple-choice question about the fact, answered by its summary; the first option is the right one
//   (the page shuffles them).
// image, imageCredit, imageCreditUrl: the card's picture. "node scripts/fill-images.mjs" fills them from a source's preview
//   picture; where that is a logo or a poor fit, use a freely licensed one saved in images/facts/ and credit it.
// home: true lists the fact's title on the home page. summary: in our own words, never copied from the sources.
// After editing, run "npm run build".
const FACTS = [
  { id: "airliner-lounges-and-dance-floors", topic: "Life on board", stat: "1971", statLabel: "the year American's 747s got a piano lounge", when: "1949 to the 1980s", home: true,
    title: "Jumbo jets once had piano bars and a dance floor",
    summary: "In the early days of big airliners, flying was a social event. The Boeing 377 Stratocruiser of the late 1940s had a cocktail lounge for 14 people, reached by a spiral staircase to its lower deck. When the 747 arrived, American Airlines took out dozens of economy seats in 1971 to fit a lounge with a Wurlitzer electric piano, which a steward would sometimes play. Around the same time Air Canada put a small dance floor, a mirrored wall and 8-track music upstairs on its 747s flying between Toronto and Europe. The dance floor lasted only about a year, and by the 1980s most lounges had become rows of paying seats.",
    image: "https://media.historyfacts.com/s3:inbox-media-offload.historyfacts.com/wp-content/uploads/2025/06/HF-FoD-Airplane-Dancefloors.jpg", imageCredit: "historyfacts.com", imageCreditUrl: "https://historyfacts.com/arts-culture/fact/airplanes-used-to-have-dance-floors/",
    quiz: { q: "What did American Airlines put in the lounge of its 747s in 1971?", options: ["A piano", "A swimming pool", "A cinema screen", "A bowling lane"] },
    sources: [
      "https://historyfacts.com/arts-culture/fact/airplanes-used-to-have-dance-floors/",
      "https://travelupdate.com/air-canada-747-dance-floor/",
      "https://www.airwaysmag.com/legacy-posts/american-airlines-jumbo-years",
      "https://migflug.com/afterburner/boeing-377-stratocruiser-double-deck-lounge/"
    ] },
  { id: "ashtrays-on-non-smoking-planes", topic: "Life on board", home: true,
    title: "Brand-new planes still come with ashtrays",
    summary: "Smoking has been banned on nearly every flight for decades, yet airliners still leave the factory with ashtrays next to the toilet doors. US safety rules require them whether or not smoking is allowed. The reasoning is simple: sooner or later someone will light up in secret, and it is far safer for them to put the cigarette out in a metal ashtray than in a bin full of paper towels.",
    image: "https://uploads.scienceabc.com/2020/12/Ashtray-on-the-plane.-Ashtray-symbol-on-the-plane.-no-smoking-airplanePhysics_joeS.webp", imageCredit: "scienceabc.com", imageCreditUrl: "https://www.scienceabc.com/eyeopeners/why-do-airplanes-have-ashtrays-if-smoking-is-banned.html",
    quiz: { q: "Smoking is banned on nearly every flight. Why do new planes still have ashtrays?", options: ["So a secret smoker can put a cigarette out safely", "Airlines forgot to remove them", "For passengers to put rubbish in", "They hold the toilet door shut"] },
    sources: [
      "https://www.law.cornell.edu/cfr/text/14/25.853",
      "https://www.abc15.com/news/national/why-airplanes-still-have-ashtrays",
      "https://www.scienceabc.com/eyeopeners/why-do-airplanes-have-ashtrays-if-smoking-is-banned.html",
      "https://migflug.com/afterburner/why-airliners-still-have-ashtrays-far-25-853/"
    ] },
  { id: "first-stewardesses-were-nurses", topic: "Life on board", stat: "115 lb", statLabel: "the heaviest a 1930 stewardess could be", when: "15 May 1930",
    title: "The first air hostesses had to be nurses",
    summary: "Ellen Church was a registered nurse with a pilot's licence. Boeing Air Transport, which later became United, would not hire her to fly, so she talked the airline into putting nurses on board to calm nervous passengers. On 15 May 1930 she worked a 20-hour trip from Oakland to Chicago with 13 stops, becoming the first woman flight attendant. She and her seven colleagues had to be single nurses no older than 25, no taller than 5 ft 4 in and no heavier than 115 lb, and their jobs included carrying bags and helping to refuel the plane.",
    image: "https://viewfromthewing.com/wp-content/uploads/2020/05/ellen-church.jpg", imageCredit: "viewfromthewing.com", imageCreditUrl: "https://viewfromthewing.com/90-years-ago-today-a-woman-flew-as-a-flight-attendant-for-the-first-time/",
    quiz: { q: "What did the very first air hostesses in 1930 have to be?", options: ["Nurses", "Pilots", "Chefs", "Teachers"] },
    sources: [
      "https://viewfromthewing.com/90-years-ago-today-a-woman-flew-as-a-flight-attendant-for-the-first-time/",
      "https://www.thisdayinaviation.com/tag/stewardess/",
      "https://stuckattheairport.com/2024/05/15/airlines-once-had-stewardess-nurses-so-did-trains/"
    ] },
  { id: "no-row-13", topic: "Life on board", stat: "17", statLabel: "the other row Lufthansa leaves out",
    title: "Some planes have no row 13, and some no row 17",
    summary: "Plenty of airlines, among them Air France, Iberia, Ryanair and Lufthansa, skip row 13 on at least some of their planes, jumping straight from 12 to 14. Lufthansa goes further and leaves out row 17 too, because 17 is the unlucky number in Italy and Brazil. In Roman numerals 17 is XVII, which can be rearranged into VIXI, Latin for 'I have lived', in other words 'my life is over'. Lufthansa has no problem with a Gate 13 or a flight numbered 13, though.",
    image: "https://runway-media-production.global.ssl.fastly.net/us/originals/2019/12/PB161285-1.jpg", imageCredit: "thepointsguy.com", imageCreditUrl: "https://thepointsguy.com/airline/why-airplanes-dont-have-a-13th-row/",
    quiz: { q: "Besides row 13, which row does Lufthansa leave out?", options: ["Row 17", "Row 4", "Row 7", "Row 66"] },
    sources: [
      "https://thepointsguy.com/airline/why-airplanes-dont-have-a-13th-row/",
      "https://www.airlinereporter.com/tag/row-17/",
      "https://www.euronews.com/travel/2023/03/21/which-airlines-skip-row-13-and-where-does-the-superstition-come-from"
    ] },
  { id: "why-cabin-lights-dim-for-landing", topic: "Life on board",
    title: "The lights go down for landing so your eyes are ready",
    summary: "Take-off and landing are the riskiest minutes of a flight, so the crew dim the cabin lights to let everyone's eyes get used to the dark in advance. If the plane has to be evacuated at night or through smoke, nobody loses precious seconds waiting to see. A darker cabin also makes the exit signs and floor lights stand out, and with the blinds up the crew can look outside for fire or debris.",
    image: "https://afar.brightspotcdn.com/dims4/default/8e68e52/2147483647/strip/true/crop/6720x3360+0+560/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F49%2F49%2F05a1bc034b579b47ef4c2a898ced%2Fairplane-cabin-with-flight-attendant-getty-images-qv9eyd38sys-unsplash.jpg", imageCredit: "afar.com", imageCreditUrl: "https://www.afar.com/magazine/why-airplanes-dim-cabin-lights-for-takeoff-and-landing",
    quiz: { q: "Why do the cabin lights go down for landing at night?", options: ["So your eyes are already used to the dark in an emergency", "To save electricity", "To help passengers sleep", "So the pilots can see the runway"] },
    sources: [
      "https://www.afar.com/magazine/why-airplanes-dim-cabin-lights-for-takeoff-and-landing",
      "https://sunset.com/?p=9546",
      "https://www.islands.com/1906249/unsettling-reason-why-plane-lights-dim-low-during-takeoff-landing/"
    ] },
  { id: "hidden-crew-bedrooms", topic: "Life on board",
    title: "Long-haul jets have secret bedrooms for the crew",
    summary: "Behind a locked door that most passengers would take for a cupboard, many long-haul jets hide a ladder or staircase leading to rows of small bunks. On planes such as the Boeing 787 and Airbus A350 these crew rest areas sit above the passenger cabin, while some older jets tuck them below the floor. Pilots often have their own little rest area near the cockpit, with the cabin crew's bunks above the back of the plane.",
    image: "https://cms.travelnoire.com/wp-content/uploads/2021/11/Flight-attendant-leaving-flight.jpeg", imageCredit: "travelnoire.com", imageCreditUrl: "https://travelnoire.com/crew-rest-compartments-hidden-on-planes",
    quiz: { q: "What is hidden behind a locked door on many long-haul jets?", options: ["Bunk beds for the crew", "A spare pilot seat", "A luggage lift", "A small gym"] },
    sources: [
      "https://travelnoire.com/crew-rest-compartments-hidden-on-planes",
      "https://www.rd.com/?p=308727",
      "https://gulfnews.com/amp/story/business%2Faviation%2Fuae-travel-secret-compartments-hidden-features-on-planes-you-didnt-know-existed-1.500146411"
    ] },
  { id: "shower-at-40000-feet", topic: "Life on board", stat: "5 min", statLabel: "of hot water per shower",
    title: "You can take a shower on an Emirates A380",
    summary: "Emirates A380s with a first-class cabin have two 'Shower Spa' bathrooms at the front of the upper deck, one on each side of the staircase. First-class passengers book a slot of about half an hour, but the hot water is limited to five minutes, with a timer on the wall counting down.",
    image: "https://cdn.onemileatatime.com/wp-content/uploads/2022/06/Emirates-Shower-A380-30.jpeg?width=1200&quality=75&height=900&aspect_ratio=4%3A3", imageCredit: "onemileatatime.com", imageCreditUrl: "https://onemileatatime.com/guides/emirates-a380-shower/",
    quiz: { q: "How much hot water do you get in the shower on an Emirates A380?", options: ["5 minutes", "30 seconds", "15 minutes", "As much as you like"] },
    sources: [
      "https://onemileatatime.com/guides/emirates-a380-shower/",
      "https://viewfromthewing.com/?p=33261",
      "https://milevalue.com/emirates-a380-first-class-shower-spa/",
      "https://www.bangladeshmonitor.com.bd/lead-news-details/shower-40000-feet-inside-emirates-a380-first-class"
    ] },
  { id: "pilots-eat-different-meals", topic: "Food and drink", home: true,
    title: "The two pilots usually eat different meals",
    summary: "Many airlines make sure the pilots at the controls eat different dishes, often at different times. If one meal turns out to be bad, only one of them gets sick and the other can still land the plane. It is airline policy rather than law: at Virgin Atlantic, for instance, the captain has to agree if both pilots want the same thing.",
    image: "https://s.yimg.com/lo/mysterio/api/d1554a0b4281573625a81700852e900f72c64a614655dc45d090f4b0a590f807/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/http%3A%2F%2Fmedia.zenfs.com%2Fen-GB%2Fhomerun%2Fthe_telegraph_818%2F775c49a7db87ec32a143a61eb8eec1ac", imageCredit: "sg.style.yahoo.com", imageCreditUrl: "https://sg.style.yahoo.com/why-pilots-eat-different-meals-133510292.html",
    quiz: { q: "Why do the two pilots usually eat different meals?", options: ["So a bad meal can't make both of them ill", "Captains get the better food", "So there is less washing up", "It's the law in every country"] },
    sources: [
      "https://sg.style.yahoo.com/why-pilots-eat-different-meals-133510292.html",
      "https://www.islands.com/1810326/real-safety-reason-airline-pilots-avoid-eating-same-meal-flight/",
      "https://aeroxplorer.com/articles/why-pilots-never-eat-the-same-meal"
    ] },
  { id: "tomato-juice-tastes-better-in-the-air", topic: "Food and drink", stat: "30%", statLabel: "weaker salt and sugar at cruising pressure", when: "2010",
    title: "Tomato juice really does taste better in the air",
    summary: "Lufthansa noticed that its passengers drank nearly as much tomato juice as beer, so it asked Germany's Fraunhofer Institute to find out why. In a mock cabin at low air pressure, testers found salt and sugar tasted up to about 30% weaker, and tomato juice that seemed earthy on the ground came across as fruity and refreshing. A later Cornell University study found that loud engine noise dulls sweetness but strengthens umami, the savoury taste that tomatoes are full of.",
    image: "https://media.assettype.com/gulfnews%2Fimport%2F2019%2F12%2F06%2F191206-humidity_16edbea11c8_medium.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100", imageCredit: "gulfnews.com", imageCreditUrl: "https://gulfnews.com/uae/science/currying-flavour-at-10000-metres-1.68075705",
    quiz: { q: "Which drink tastes better at cruising height than on the ground?", options: ["Tomato juice", "Orange juice", "Cola", "Coffee"] },
    sources: [
      "https://www.thelocal.de/20111111/38811",
      "https://gulfnews.com/uae/science/currying-flavour-at-10000-metres-1.68075705",
      "https://www.news.cornell.edu/stories/2015/05/planes-savory-tomato-becomes-favored-flavor",
      "https://improbable.com/2014/03/25/simulated-high-altitute-taste-testing-of-tomato-juice/"
    ] },
  { id: "the-40000-dollar-olive", topic: "Food and drink", stat: "$40,000", statLabel: "saved a year by one olive", when: "1980s",
    title: "One missing olive saved an airline $40,000 a year",
    summary: "Robert Crandall, who ran American Airlines in the 1980s, was famous for hunting down costs. In the best-known story, he took a single olive off every first-class salad, nobody complained, and the airline saved around $40,000 a year. It is still told as a lesson in how small savings add up, though some tellings put the figure higher.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Robert_L._Crandall_01.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled", imageCredit: "en.wikipedia.org", imageCreditUrl: "https://en.wikipedia.org/wiki/Robert_Crandall",
    quiz: { q: "What did American Airlines take off first-class salads to save about $40,000 a year?", options: ["One olive", "The croutons", "A slice of tomato", "The salad dressing"] },
    sources: [
      "https://en.wikipedia.org/wiki/Robert_Crandall",
      "https://viewfromthewing.com/a-lesson-about-cost-controls-that-airline-executives-need-to-learn-from-bob-crandall/",
      "https://www.smartertravel.com/now-even-first-class-is-being-nickel-and-dimed/"
    ] },
  { id: "black-boxes-are-orange", topic: "How planes work", stat: "Orange", statLabel: "the real colour of a black box",
    title: "Black boxes aren't black",
    summary: "The flight recorders everyone calls black boxes are painted bright orange, and US rules also allow bright yellow. The vivid colour and strips of reflective tape help investigators spot them among burnt wreckage or on the sea bed. Nobody is quite sure how the black box nickname started.",
    image: "images/facts/flight-recorder.jpg", imageCredit: "Matti Blume · CC BY-SA 4.0", imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Flight_recorder,_EBACE_2019,_Le_Grand-Saconnex_(EB190365).jpg",
    quiz: { q: "What colour is a plane's 'black box'?", options: ["Bright orange", "Black", "Silver", "Dark blue"] },
    sources: [
      "https://howthingsfly.si.edu/ask-an-explainer/why-does-black-box-flight-recorder-sit-back-aircraft",
      "https://www.law.cornell.edu/cfr/text/14/25.1457",
      "https://www.nbcwashington.com/news/national-international/plane-black-boxes-plane-crash-investigations/"
    ] },
  { id: "mayday-means-help-me", topic: "How planes work", stat: "1923", statLabel: "first used at Croydon Airport", when: "1923",
    title: "Mayday comes from French for 'help me'",
    summary: "Once pilots began talking over the radio, they needed a spoken distress call, because the S in SOS was hard to hear on a crackly line. In 1923 Croydon Airport near London chose Mayday, from the French m'aider, as in venez m'aider, 'come and help me'. It suited the many flights between Croydon and Le Bourget in Paris. The idea is credited to Croydon's senior radio officer, Frederick Stanley Mockford, and in 1927 it became the official international voice distress call.",
    image: "images/facts/737-panel-night.jpg", imageCredit: "Shawn from Airdrie, Canada · CC BY-SA 2.0", imageCreditUrl: "https://commons.wikimedia.org/wiki/File:737NG_panel_at_night_(4559317601).jpg",
    quiz: { q: "The distress call 'Mayday' comes from which language?", options: ["French", "German", "Latin", "Spanish"] },
    sources: [
      "https://grammarphobia.com/blog/2013/11/mayday.html",
      "https://wordhistories.net/2016/11/03/mayday/",
      "https://connexionfrance.com/magazine/mayday-emergency-call-originated-from-maidez/492218"
    ] },
  { id: "why-plane-windows-are-round", topic: "How planes work", stat: "1954", statLabel: "the crashes that rounded the windows", when: "1954",
    title: "Plane windows are round because of two crashes in 1954",
    summary: "The de Havilland Comet, the world's first jet airliner, had squarish cut-outs for its windows and hatches. Every flight pressurised the cabin and then let the pressure out again, and over time the stress gathered at the corners until the metal cracked. In 1954 two Comets broke apart in the air over the Mediterranean. Investigators then pumped a whole Comet up and down in a water tank until it split open at the corner of a window, and airliner windows have had rounded shapes ever since.",
    image: "images/facts/comet-square-windows.jpg", imageCredit: "Mike McBey · CC BY 2.0", imageCreditUrl: "https://commons.wikimedia.org/wiki/File:Result_of_metal_fatigue_on_a_de_Havilland_Comet_(50813201846).jpg",
    quiz: { q: "Why do airliner windows have rounded corners?", options: ["Square corners let cracks start in the metal", "They are cheaper to make", "To give a wider view", "So the blinds slide more easily"] },
    sources: [
      "https://www.faa.gov/lessons_learned/transport_airplane/accidents/G-ALYV",
      "https://aeroxplorer.com/articles/airplane-windows-are-round-because-this-plane-kept-crashing",
      "https://insideflyer.com/posts/airplane-windows-have-rounded-corners-for-safety/"
    ] },
  { id: "tiny-hole-in-plane-windows", topic: "How planes work", stat: "3", statLabel: "panes in a typical airliner window",
    title: "The tiny hole in your window has a job",
    summary: "Airliner windows are usually made of three acrylic panes, and the little breather hole goes through the middle one. It keeps the air between the panes at cabin pressure, so the outer pane takes the strain while the middle one stays in reserve as a backup. The hole also stops the gap between the panes from fogging up, so you keep your view of the clouds.",
    image: "https://afar.brightspotcdn.com/dims4/default/521a514/2147483647/strip/true/crop/2959x1480+0+2091/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F13%2F73%2Fb30aa30b485790e49ba6935adc51%2Fairplane-window-nandha-kumar-oi5hcwazv4s-unsplash.jpg", imageCredit: "afar.com", imageCreditUrl: "https://www.afar.com/magazine/why-airplane-windows-have-tiny-holes",
    quiz: { q: "What does the tiny hole in a plane window do?", options: ["Balances the pressure between the panes and stops fogging", "Lets fresh air into the cabin", "Lets the crew listen to the engines", "Drains rainwater away"] },
    sources: [
      "https://www.sciencealert.com/here-s-why-there-s-a-tiny-hole-in-airplane-windows",
      "https://www.afar.com/magazine/why-airplane-windows-have-tiny-holes",
      "https://www.bgr.com/2155765/why-airplane-windows-have-tiny-holes/"
    ] },
  { id: "planes-hit-by-lightning", topic: "How planes work", stat: "1 a year", statLabel: "lightning strikes per airliner, on average",
    title: "Every airliner is hit by lightning about once a year",
    summary: "On average each airliner is struck by lightning roughly once a year, usually while climbing or descending through cloud. The electricity runs along the plane's metal skin and leaves again, often without passengers noticing anything. Jets built mostly from carbon fibre, such as the Boeing 787, have a fine metal mesh in their skin so the current travels round them in the same way.",
    image: "https://th-thumbnailer.cdn-si-edu.com/kELN5N2gaFGPu9Vs2zSE7OKiuRM=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/JJ11-Lightning-Protection-2-FLASH.jpg", imageCredit: "smithsonianmag.com", imageCreditUrl: "https://www.smithsonianmag.com/air-space-magazine/how-things-work-lightning-protection-161993347/",
    quiz: { q: "About how often is an average airliner hit by lightning?", options: ["About once a year", "Never", "Once every 50 years", "Every week"] },
    sources: [
      "https://www.smithsonianmag.com/air-space-magazine/how-things-work-lightning-protection-161993347/",
      "https://www.livescience.com/32638-do-planes-get-struck-by-lightning.html",
      "https://mainblades.com/blog-posts/aircraft-and-lightning-strikes-here-is-what-the-statistics-say",
      "https://skybrary.aero/sites/default/files/bookshelf/3354.pdf"
    ] },
  { id: "nitrogen-in-plane-tyres", topic: "How planes work", stat: "75,000 lb", statLabel: "above this, US airliners must use nitrogen",
    title: "Airliner tyres are filled with nitrogen, not air",
    summary: "The tyres on big airliners are pumped up with dry nitrogen instead of ordinary air. After a hard stop a hot tyre can give off gases, and the oxygen in normal air could make them catch fire or explode, while nitrogen does not feed a fire. Dry nitrogen also carries no moisture that could freeze at altitude. In the US it is a rule for airliners weighing more than 75,000 lb at take-off.",
    image: "https://www.slashgear.com/img/gallery/the-reason-why-airplane-tires-are-filled-with-nitrogen/l-intro-1743105797.jpg", imageCredit: "slashgear.com", imageCreditUrl: "https://www.slashgear.com/1820852/airplane-tires-filled-with-nitrogen-reason",
    quiz: { q: "What are big airliners' tyres filled with?", options: ["Nitrogen", "Ordinary air", "Helium", "Water"] },
    sources: [
      "https://howthingsfly.si.edu/ask-an-explainer/what-kind-gas-used-inflate-aircraft-tires",
      "https://goodyearaviation.com/resources/pdf/aviation-tire-care-2024.pdf",
      "https://www.slashgear.com/1820852/airplane-tires-filled-with-nitrogen-reason"
    ] },
  { id: "hidden-handrail-under-overhead-bins", topic: "How planes work",
    title: "There's a handrail hidden under the overhead bins",
    summary: "Run your hand along the underside of the overhead bins on many newer planes and you'll find a moulded groove made for gripping. Cabin crew use it to steady themselves as they walk the aisle, especially in turbulence. Passengers can use it too, which is kinder than grabbing the headrests of the people sitting below, though not every plane has one.",
    image: "https://www.rd.com/wp-content/uploads/2020/08/GettyImages-1163842340-e1597169532673.jpg", imageCredit: "rd.com", imageCreditUrl: "https://www.rd.com/?p=308727",
    quiz: { q: "Where is the handrail hidden on many newer planes?", options: ["Under the overhead bins", "Inside the armrests", "Under the seats", "Behind the safety card"] },
    sources: [
      "https://www.rd.com/?p=308727",
      "https://www.kenyans.co.ke/news/65889-5-hidden-features-airplanes-their-crucial-roles",
      "https://patents.google.com/patent/US7731399B2/en"
    ] },
  { id: "747-six-million-parts", topic: "How planes work", stat: "6 million", statLabel: "parts in a Boeing 747",
    title: "A jumbo jet is built from about six million parts",
    summary: "A Boeing 747 is put together from roughly six million parts, about twice as many as a Boeing 777. The pieces were made by suppliers across the United States and around the world, then brought together at Boeing's enormous factory in Everett, near Seattle.",
    image: "https://monocle.com/wp-content/uploads/legacy/gallery/expo-54_1-5094098e7ba3e.jpg?quality=60&fit=3000%2C3000", imageCredit: "monocle.com", imageCreditUrl: "https://monocle.com/business/manufacturing/boeing-747-8-jumbo-jet-manufacturing/",
    quiz: { q: "Roughly how many parts make up a Boeing 747?", options: ["6 million", "60,000", "600,000", "60 million"] },
    sources: [
      "https://www.csmonitor.com/1997/1029/102997.us.us.2.html",
      "https://monocle.com/business/manufacturing/boeing-747-8-jumbo-jet-manufacturing/",
      "https://airwaysmag.com/photos-a-boeing-747-factory-tour"
    ] },
  { id: "first-flight-shorter-than-747-wing", topic: "Firsts and record breakers", stat: "120 ft", statLabel: "the length of the very first flight", when: "17 December 1903", home: true,
    title: "The first flight would fit inside a jumbo jet's wings",
    summary: "Orville Wright's first powered flight at Kitty Hawk lasted 12 seconds and covered about 120 feet (37 m). The first Boeing 747 measured 195 ft 8 in from wingtip to wingtip, so the whole flight could have taken place between a jumbo's wings with room to spare. Orville noticed the same thing in 1944, when he flew in a Lockheed Constellation whose wings were longer than his first hop.",
    image: "https://www.nps.gov/wrbr/learn/historyculture/images/Langley_tests_1893_-_USAF.jpg", imageCredit: "nps.gov", imageCreditUrl: "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm",
    quiz: { q: "The Wright brothers' first flight was shorter than what?", options: ["A jumbo jet's wingspan", "A tennis court", "A school bus", "A football pitch's width"] },
    sources: [
      "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm",
      "https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000",
      "https://www.historylink.org/File/1181",
      "https://www.inventionandtech.com/taxonomy/term/11641"
    ] },
  { id: "wright-flyer-went-to-the-moon", topic: "Firsts and record breakers", stat: "66 years", statLabel: "from Kitty Hawk to the Moon", when: "20 July 1969",
    title: "Pieces of the Wright brothers' plane went to the Moon",
    summary: "Neil Armstrong, who came from Ohio like the Wright brothers, packed a sliver of wood from the 1903 Wright Flyer's propeller and a scrap of fabric from its wing in his personal kit for Apollo 11. They were inside the lunar module Eagle when it landed on the Moon, just 66 years after the first flight at Kitty Hawk. Some of the pieces are now on show at the Smithsonian.",
    image: "https://airandspace.si.edu/sites/default/files/images/events/SI2003-35575_640_0.jpg", imageCredit: "airandspace.si.edu", imageCreditUrl: "https://airandspace.si.edu/stories/editorial/explore-wright-flyer",
    quiz: { q: "What did Neil Armstrong take to the Moon?", options: ["Pieces of the Wright brothers' plane", "A model of Concorde", "A Boeing 747 seat belt", "A pilot's licence from 1903"] },
    sources: [
      "https://airandspace.si.edu/stories/editorial/explore-wright-flyer",
      "https://www.nasa.gov/history/120-years-ago-the-first-powered-flight-at-kitty-hawk/",
      "https://uc.edu/news/articles/2020/02/n20894306.html",
      "https://www.antiquesandthearts.com/high-flyers-at-heritage-auctions-space-exploration-auction"
    ] },
  { id: "concorde-landed-before-it-left", topic: "Firsts and record breakers", stat: "3½ hrs", statLabel: "London to New York on Concorde", when: "1976 to 2003",
    title: "On Concorde you landed before you took off",
    summary: "Concorde crossed from London to New York in about three and a half hours, while New York's clocks are usually five hours behind London's. So on the westbound trip passengers touched down earlier, by local time, than they had left. British Airways' morning flight left Heathrow at 10:30 and arrived at JFK around 8:30, which is how Concorde got its name as a time machine.",
    image: "https://cdn.aeroreport.de/media/pages/aviation/unterwegs-in-der-concorde-dem-schnellsten-passagierjet/57f4dfb381-1686812944/unterwegs-in-der-concorde-dem-schnellsten-passagierjet_2048px-800x450-crop.webp", imageCredit: "aeroreport.de", imageCreditUrl: "https://aeroreport.de/en/aviation/flying-in-the-concorde-the-fastest-of-passenger-jets",
    quiz: { q: "Flying west on Concorde from London to New York, what time did you land by local time?", options: ["Earlier than you took off", "At the same time you took off", "The next day", "Eight hours later"] },
    sources: [
      "https://www.pbs.org/wgbh/nova/supersonic/speed.html",
      "https://aeroreport.de/en/aviation/flying-in-the-concorde-the-fastest-of-passenger-jets",
      "https://travelweekly.co.uk/news/factfile-concorde"
    ] },
  { id: "first-airline-seat-sold-for-400-dollars", topic: "Firsts and record breakers", stat: "$400", statLabel: "paid for the first airline seat", when: "1 January 1914",
    title: "The first airline seat was sold at auction for $400",
    summary: "The world's first scheduled passenger airline, the St. Petersburg-Tampa Airboat Line, started flying in Florida on 1 January 1914. Pilot Tony Jannus took a Benoist flying boat across Tampa Bay in about 23 minutes. His only passenger was Abram C. Pheil, a former mayor of St. Petersburg, who had won the first seat at an auction for $400. Everyone after him paid the normal fare of $5 each way.",
    image: "https://vintageaviationnews.com/wp-content/uploads/Flying_boat_Benoist.jpg", imageCredit: "vintageaviationnews.com", imageCreditUrl: "https://vintageaviationnews.com/?p=103131",
    quiz: { q: "How was the first ever airline seat sold in 1914?", options: ["At an auction, for $400", "It was given away free", "In a prize draw", "For $5, like every seat after it"] },
    sources: [
      "https://www.iata.org/en/about/history/flying-100-years/",
      "https://digitalcommons.usf.edu/exhibit/gandy-collection/tony-jannus-and-the-benoist-xiv/",
      "https://vintageaviationnews.com/?p=103131"
    ] },
  { id: "klm-oldest-airline-name", topic: "Firsts and record breakers", stat: "1919", statLabel: "the year KLM was founded", when: "7 October 1919",
    title: "KLM is the oldest airline still using its first name",
    summary: "KLM Royal Dutch Airlines was founded on 7 October 1919 and flew its first service, from London to Amsterdam, in May 1920. No other airline in the world has kept flying under its original name for as long, and it turned 100 in 2019.",
    image: "https://runway-media-production.global.ssl.fastly.net/us/originals/2019/10/1_300_7843.jpg", imageCredit: "thepointsguy.com", imageCreditUrl: "https://thepointsguy.com/news/oldest-airline-klm-turns-100",
    quiz: { q: "Which airline has flown the longest under its original name?", options: ["KLM", "Qantas", "British Airways", "Pan Am"] },
    sources: [
      "https://aviationweek.com/business-aviation/klm-royal-dutch-airlines-marked-its-100th-anniversary",
      "https://thepointsguy.com/news/oldest-airline-klm-turns-100",
      "https://collection.sciencemuseumgroup.org.uk/people/cp38968/klm-royal-dutch-airlines"
    ] }
];

if (typeof module !== "undefined") module.exports = FACTS;
