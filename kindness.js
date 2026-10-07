// AirSkyHero: acts of kindness on aeroplanes, shown on airskyhero.com/acts-of-kindness/ grouped by country.
// Each story needs at least three independent reliable sources (copies of the same wire story count once).
// country: where it happened, or the airline's country when it happened in the air. who: who showed the kindness.
// summary: in our own words, never copied from the sources. After editing, run "npm run build".
const KINDNESS = [
  { id: "qantas-volunteer-crew-wuhan-evacuation", country: "Australia", year: 2020, date: "3 February 2020",
    airline: "Qantas", flight: "QF6032, Wuhan to RAAF Learmonth", who: "Pilots and cabin crew, as volunteers",
    title: "Qantas crew volunteer to fly Australians out of Wuhan",
    summary: "When Australia arranged to bring its citizens out of Wuhan at the start of the coronavirus outbreak, Qantas asked staff to volunteer for the trip, and far more put their hands up than were needed. Four pilots and 14 cabin crew flew a 747 into the locked-down city and brought back more than 240 Australians, many of them children. The crew wore masks and gloves and rested apart on a sealed-off upper deck.",
    sources: [
      "https://www.sbs.com.au/news/volunteer-qantas-crew-very-keen-to-airlift-australians-stranded-in-wuhan",
      "https://au.news.yahoo.com/how-qantas-prepared-for-evacuation-from-wuhan-002825269.html",
      "https://www.aviationwa.org.au/2020/02/03/qantas-747-400-repatriation-flight-wuhan-learmonth/",
      "https://samchui.com/2020/02/03/how-qantas-is-safely-operating-their-coronavirus-rescue-flight/"
    ] },
  { id: "gander-9-11-plane-people", country: "Canada", year: 2001, date: "11 September 2001",
    airline: "38 diverted international flights", who: "Townspeople",
    title: "A small Newfoundland town takes in 6,600 stranded travellers after 9/11",
    summary: "When US airspace closed after the 11 September attacks, 38 airliners carrying around 6,600 passengers and crew were sent to Gander, a town of about 10,000 people. Locals turned schools, churches and halls into dormitories, cooked meals, gave out clothes and bedding, filled prescriptions for free and opened their own homes for several days. School bus drivers who were on strike went back to work to move the passengers around. Grateful passengers later set up a scholarship fund for local students, and the story became the musical Come From Away.",
    sources: [
      "https://globalnews.ca/news/8182199/gander-n-l-9-11-anniversary/",
      "https://legionmagazine.com/operation-yellow-ribbon/",
      "https://www.fox9.com/news/9-11-gander-candada-true-story-thousands-stranded-passengers"
    ] },
  { id: "finnair-95-percent-discount-ukrainians", country: "Finland", year: 2022, date: "March 2022",
    airline: "Finnair", flight: "Central European cities to Helsinki", who: "Airline",
    title: "Finnair cuts fares by 95% for people leaving Ukraine",
    summary: "Finland's national airline took 95% off its base fares on one-way flights to Helsinki from several Central European cities, so that Ukrainians who had escaped the war could travel on cheaply. Travellers paid only taxes and fees, and those coming from Schengen countries could fly with other ID, such as a birth certificate, instead of a passport. Finnair customers also gave more than €200,000 worth of loyalty points to UNICEF's Ukraine appeal.",
    sources: [
      "https://www.ttgmedia.com/news/finnair-offers-ukrainians-fleeing-russias-invasion-95-discounts-33206",
      "https://ittn.ie/?p=79091",
      "https://visitukraine.today/blog/2649/ukrainians-can-buy-tickets-to-finland-with-a-95-discount-what-are-the-conditions"
    ] },
  { id: "wizz-air-free-seats-ukrainian-refugees", country: "Hungary", year: 2022, date: "2 March 2022",
    airline: "Wizz Air", who: "Airline",
    title: "Wizz Air gives 100,000 free seats to Ukrainians fleeing the war",
    summary: "A week after Russia invaded Ukraine, the Budapest-based low-cost airline set aside 100,000 free seats for Ukrainian refugees. The seats were on its flights from the four countries bordering Ukraine to destinations across continental Europe, and could be used throughout March. Refugees only had to show a Ukrainian passport or ID card, and the airline also offered heavily cut 'rescue' fares to people who had already moved on to other places.",
    sources: [
      "https://www.futuretravelexperience.com/2022/03/wizz-air-to-provide-100000-free-tickets-to-ukrainian-refugees/",
      "https://www.ttgmedia.com/news/wizz-air-offers-100000-free-seats-to-ukrainian-refugees-33017",
      "https://thepointsguy.com/news/wizz-air-ukraine-refugees-russian-invasion",
      "https://www.budapesttimes.hu/world/wizz-air-offers-100000-free-tickets-to-ukrainian-refugees/"
    ] },
  { id: "jet-airways-baby-free-flights-for-life", country: "India", year: 2017, date: "18 June 2017",
    airline: "Jet Airways", flight: "9W 569, Dammam to Kochi", who: "Airline, cabin crew and a passenger",
    title: "Baby born at 35,000 feet gets free flights for life",
    summary: "A woman from Kerala went into early labour on a Jet Airways flight from Dammam to Kochi. A trained paramedic who was a passenger helped the cabin crew deliver a baby boy in the air, and the plane diverted to Mumbai, where mother and baby were taken to hospital and found to be well. Jet Airways then gave the boy, the first baby born on one of its flights, a free pass to travel with the airline for life.",
    sources: [
      "https://www.tribuneindia.com/news/archive/nation/baby-born-at-35-000-ft-gets-free-air-tickets-for-life-from-jet-airways-424194",
      "https://asiatimes.com/2017/06/baby-born-passenger-jet-gets-free-lifetime-flight-pass/",
      "https://www.thequint.com/news/hot-news/jet-airways-kerala-woman-premature-baby"
    ] },
  { id: "indigo-karad-helps-sick-passenger", country: "India", year: 2021, date: "November 2021",
    airline: "IndiGo", flight: "6E 171, New Delhi to Mumbai", who: "Passenger",
    title: "Doctor-turned-minister cares for a sick fellow passenger",
    summary: "About an hour into an IndiGo flight from Delhi to Mumbai, a passenger with high blood pressure felt dizzy and unwell, and the crew asked if there was a doctor on board. Bhagwat Karad, a junior finance minister who is a doctor by training, came forward and treated the man with the aircraft's medical kit until he was stable. IndiGo publicly thanked him, and Prime Minister Narendra Modi praised what he did.",
    sources: [
      "https://www.tribuneindia.com/news/nation/union-minister-karad-gives-medical-help-to-passenger-who-felt-uneasy-giddy-on-delhi-mumbai-flight-338938",
      "https://www.wionews.com/india-news/great-gesture-indian-pm-lauds-minister-bhagwat-karad-for-helping-co-passenger-mid-flight-429930",
      "https://gulfnews.com/world/asia/india/indian-minister-gives-medical-aid-to-co-passenger-mid-air-wins-praise-from-pm-modi-1.1637121110262"
    ] },
  { id: "garuda-attendant-carries-elderly-pilgrim", country: "Indonesia", year: 2017, date: "7 January 2017",
    airline: "Garuda Indonesia", flight: "GA 821, Kuala Lumpur to Jakarta", who: "Flight attendant",
    title: "Flight attendant carries an elderly pilgrim off the plane",
    summary: "When the flight landed in Jakarta, an elderly woman from an umrah pilgrim group could not leave her seat, and the wheelchair she needed had not arrived. With help from flight service manager Ninik Septinawati, flight attendant Vera carried the woman on her back from the rear of the cabin to the exit so she could make her connection. A passenger's photo went viral, and Indonesia's transport minister later gave both crew members awards.",
    sources: [
      "https://www.thejakartapost.com/travel/2017/01/09/minister-grants-awards-to-garuda-indonesia-flight-attendants-vera-and-ninik.html",
      "https://says.com/my/news/garuda-indonesia-flight-attendant-piggybacks-elderly-on-kl-jakarta-flight",
      "https://www.nationthailand.com/in-focus/30303887"
    ] },
  { id: "el-al-returns-for-girl-with-cancer", country: "Israel", year: 2013, date: "August 2013",
    airline: "El Al", flight: "LY 007, Tel Aviv to New York", who: "Pilots and airline",
    title: "El Al jet goes back to the gate for a girl with cancer",
    summary: "Inbar Chomsky, aged 11, was one of a group of Israeli children with cancer flying to Camp Simcha in New York. She was taken off the plane when her passport could not be found. As the jet headed for the runway, the passport turned up in another child's bag, so the pilots got permission to taxi back to the gate and collect her, and passengers cheered as she got back on board.",
    sources: [
      "https://www.timesofisrael.com/plane-turns-back-to-pick-up-cancer-patient/",
      "https://abcnews.com/blogs/lifestyle/2013/08/el-al-pilots-turn-back-to-retrieve-child-with-cancer",
      "https://www.theyeshivaworld.com/news/human-interest/181062/el-al-goes-the-extra-miles-to-bring-cancer-stricken-girl-to-camp-simcha.html"
    ] },
  { id: "viva-aerobus-jonathan-honorary-captain", country: "Mexico", year: 2019, date: "August 2019",
    airline: "Viva Aerobus", flight: "Mexico City to Mazatlán", who: "Flight attendant and pilot",
    title: "Crew makes a boy with cancer captain of his first flight",
    summary: "Jonathan, an eight-year-old from Michoacán who had cancer, was on his first plane trip, going to see the sea for the first time on a trip arranged by a children's charity. The lead flight attendant told the passengers about him in a tearful announcement, she gave him her wings, the captain gave him his four-stripe captain's bars, and the crew named him captain of the flight. Video of the moment spread widely in Mexico. Jonathan died some weeks after the trip.",
    sources: [
      "https://los40.com.mx/los40/2019/08/15/viral/1565886420_100821.html",
      "https://www.adn40.mx/noticia/es-tendencia/notas/2019-09-19-18-52/tras-conocer-el-mar-muere-jonathan-a-causa-del-cancer/",
      "https://www.exitosanoticias.pe/virales/cumplieron-su-sueno-nino-cancer-fue-homenajeado-tripulacion-su-primero-vuelo-n109700"
    ] },
  { id: "acapulco-otis-free-air-bridge", country: "Mexico", year: 2023, date: "From 27 October 2023",
    airline: "Aeroméxico, Viva Aerobus and Volaris", flight: "Acapulco to Mexico City", who: "Airlines",
    title: "Mexican airlines fly people out of storm-hit Acapulco for free",
    summary: "Hurricane Otis wrecked Acapulco on 25 October 2023. Two days later, Mexico's three largest airlines started free humanitarian flights to Mexico City. Pregnant women, children, older people, disabled people and the sick went first, and the same planes brought doctors and supplies into the city. The air bridge ran for about two and a half weeks and carried thousands of stranded residents and tourists to safety.",
    sources: [
      "https://mexiconewsdaily.com/news/acapulco-airport-resumes-operations-for-domestic-flights/",
      "https://expansion.mx/empresas/2023/10/31/vuelos-gratis-acapulco-cdmx",
      "https://www.infobae.com/mexico/2023/11/03/como-volar-gratis-de-acapulco-a-cdmx/"
    ] },
  { id: "klm-rescue-flight-stranded-ukrainians-punta-cana", country: "Netherlands", year: 2022, date: "4–5 March 2022",
    airline: "KLM", flight: "Punta Cana to Amsterdam", who: "Airline, prompted by a flight attendant",
    title: "KLM detours an empty jet to bring stranded Ukrainian holidaymakers to Europe",
    summary: "When the war closed Ukraine's airspace, hundreds of Ukrainian tourists were stuck in the Dominican Republic because their charter flights home were cancelled. KLM had a repaired A330 about to fly back empty from Trinidad, and after a flight attendant with Ukrainian roots pushed for it, the airline added a stop in Punta Cana and flew 278 of them to Amsterdam. KLM paid the whole cost, and most of the passengers went on to Poland in the following days.",
    sources: [
      "https://nltimes.nl/2022/03/06/klm-picks-stranded-ukrainian-tourists-dominican-republic",
      "https://www.nhnieuws.nl/nieuws/300630/klm-haalt-278-gestrande-oekrainers-op-uit-dominicaanse-republiek",
      "https://paliparan.com/?p=15720"
    ] },
  { id: "air-new-zealand-free-flights-christchurch-mosque-families", country: "New Zealand", year: 2019, date: "March 2019",
    airline: "Air New Zealand", flight: "Domestic flights to and from Christchurch", who: "Airline",
    title: "Air New Zealand flies families of the Christchurch mosque victims for free",
    summary: "After the 15 March 2019 attacks on two Christchurch mosques, Air New Zealand flew the immediate families of those killed free of charge and gave other relatives and friends cheaper compassionate fares. It also capped one-way fares to and from Christchurch at NZ$139 and refunded people who had already paid more. The airline worked with the Prime Minister's office and the Muslim community to arrange the trips, and one of the victims was one of its own engineers.",
    sources: [
      "https://www.airlineratings.com/news/air-new-zealand-pays-tribute-to-engineer-killed-in-christchurch-massacre",
      "https://www.ttgasia.com/?p=45985",
      "https://karryon.com.au/industry-news/airline/air-new-zealand-engineer-among-the-49-victims-in-christchurch-shooting/"
    ] },
  { id: "air-peace-free-evacuation-south-africa", country: "Nigeria", year: 2019, date: "11 September 2019",
    airline: "Air Peace", flight: "Johannesburg to Lagos", who: "Airline",
    title: "Air Peace flies Nigerians home from South Africa for free",
    summary: "After a wave of deadly xenophobic attacks on foreigners in South Africa, the founder of the private Nigerian airline Air Peace offered to fly Nigerians who wanted to leave home at no charge. The first flight brought nearly 190 people, about 30 of them children, back to Lagos. Many had lost homes or shops in the violence, and further free flights followed.",
    sources: [
      "https://www.aljazeera.com/news/2019/09/12/nigerians-repatriated-from-south-africa-after-attacks/",
      "https://www.africanews.com/2019/09/12/nigerians-fleeing-xenophobia-in-south-africa-arrive-in-lagos/",
      "https://businessday.ng/news/article/air-peace-airlifts-186-nigerians-in-south-africa-back-home-for-free/"
    ] },
  { id: "pia-steward-soothes-crying-baby", country: "Pakistan", year: 2021, date: "11 March 2021",
    airline: "Pakistan International Airlines", flight: "Islamabad to Karachi", who: "Flight attendant",
    title: "Senior steward rocks a crying baby so a tired mother can rest",
    summary: "On an early-morning PIA flight, head purser Touheed Daudpota saw a mother travelling alone with two young children who could not settle her crying baby. When other crew could not calm the child, he held the baby on his shoulder until it fell asleep so the mother could rest. Photos of the moment spread widely, and UN Women Pakistan named him a HeForShe Champion.",
    sources: [
      "https://gulfnews.com/world/asia/pakistan/pia-flight-attendant-hailed-a-hero-for-calming-crying-baby-1.78146612",
      "https://www.arabnews.pk/pakistan/pakistani-flight-attendant-who-became-online-sensation-for-soothing-baby-champions-gender-equality-1831496",
      "https://www.geo.tv/latest/341203-pia-crew-member-honoured-by-un-for-showing-empathy-with-woman-on-flight"
    ] },
  { id: "pal-organo-breastfeeds-baby", country: "Philippines", year: 2018, date: "November 2018",
    airline: "Philippine Airlines", who: "Flight attendant",
    title: "Flight attendant breastfeeds a passenger's hungry baby",
    summary: "Soon after take-off, flight attendant Patrisha Organo heard a baby crying and found out the mother had run out of formula, and there was none on board. Organo was a new mother herself, so she offered to breastfeed the baby in the galley and fed her until she fell asleep. Her Facebook post about it was shared tens of thousands of times.",
    sources: [
      "https://www.cbsnews.com/news/flight-attendant-feeds-hungry-infant-mid-flight-after-mother-runs-out-of-formula/",
      "https://asiatimes.com/2018/11/filipino-flight-attendant-breastfeeds-passengers-infant/",
      "https://www.newsweek.com/flight-attendant-breastfed-strangers-crying-baby-after-mother-ran-out-formula-1208396"
    ] },
  { id: "saudia-turns-back-for-forgotten-baby", country: "Saudi Arabia", year: 2019, date: "March 2019",
    airline: "Saudia", flight: "SV 832, Jeddah to Kuala Lumpur", who: "Pilot",
    title: "Pilot turns the plane around to reunite a mother and baby",
    summary: "Shortly after take-off from Jeddah, a passenger realised her baby had been left behind in the airport's waiting area, and she would not continue without the child. The pilot asked air traffic control for permission to return, which is very unusual, and was cleared to go back to the gate. Mother and baby were reunited, and the recording of the radio call spread widely online.",
    sources: [
      "https://www.foxnews.com/travel/flight-returns-saudi-arabia-airport-mom-left-baby-waiting-area",
      "https://www.onmanorama.com/news/world/2019/03/12/saudi-plane-turned-back-after-mother-forgets-baby-at-jeddah-airport.html",
      "https://www.edgeprop.my/content/1492778/plane-returns-airport-retrieves-baby-left-behind-terminal"
    ] },
  { id: "saa-volunteer-crew-wuhan-repatriation", country: "South Africa", year: 2020, date: "14 March 2020",
    airline: "South African Airways", flight: "Wuhan to Polokwane", who: "Pilots and cabin crew, as volunteers",
    title: "South African Airways crew volunteer to fetch citizens from Wuhan",
    summary: "Early in the COVID-19 outbreak, SAA asked for volunteers to fly into locked-down Wuhan and bring stranded South Africans home, most of them students and teachers. Pilots and cabin crew stepped forward and flew an A340 out of storage via the Philippines, bringing more than 100 citizens back to Polokwane. The crew then spent weeks in quarantine with the passengers, and President Ramaphosa later thanked the volunteers in person.",
    sources: [
      "https://www.dailydispatch.co.za/news/2020-03-15-my-flight-to-covid-19-outbreak-city-pilot-tells-of-mission-to-repatriate-south-africans/",
      "https://www.sanews.gov.za/node/46818",
      "https://www.sowetan.co.za/news/south-africa/2020-03-16-thank-you-for-fetching-us-writes-south-african-repatriated-from-china/",
      "https://www.timeslive.co.za/news/south-africa/2020-03-29-you-are-our-heroes-ramaphosa-to-all-who-helped-sa-citizens-in-wuhan/"
    ] },
  { id: "turkish-airlines-free-quake-evacuation", country: "Turkey", year: 2023, date: "February 2023",
    airline: "Turkish Airlines", flight: "Evacuation flights from the quake-hit provinces", who: "Airline",
    title: "Free flights out of the earthquake zone for survivors",
    summary: "After the earthquakes of 6 February 2023, Turkish Airlines let survivors fly out of the affected provinces for free and kept the free flights going until 1 March. The airline says it flew about 230,000 people out of the disaster area on more than 1,300 evacuation flights. It also flew in rescue teams, volunteers and relief supplies.",
    sources: [
      "https://www.dailysabah.com/business/transportation/turkish-airlines-helps-in-evacuation-transporting-volunteers-after-quake",
      "https://thepeninsulaqatar.com/article/27/02/2023/turkish-airlines-continues-to-support-earthquake-victims",
      "https://samchui.com/2023/02/13/rescue-flights-on-turkey-earthquake-how-airlines-and-airports-are-coping-it/"
    ] },
  { id: "etihad-manchester-plane-returns-dying-grandson", country: "United Kingdom", year: 2016, date: "April 2016",
    airline: "Etihad Airways", flight: "Manchester to Abu Dhabi", who: "Pilot and cabin crew",
    title: "Pilot takes a taxiing jet back to the gate so grandparents can reach a dying grandson",
    summary: "An elderly couple were already moving towards the runway on their way to Australia when a text told them their grandson had been rushed into intensive care. They told the cabin crew, and the captain turned the plane back to the gate. Staff unloaded their bags and had their car brought round from the car park so they could drive straight to the hospital. They were with him before he died the next day, and the airline let them use their tickets for a later trip.",
    sources: [
      "https://travelweekly.co.uk/news/etihad-thanked-after-allowing-customers-off-taxiing-aircraft-to-reach-grandsons-hospital-bedside",
      "https://gulfnews.com/uae/etihad-pilot-aborts-flight-for-dying-grandson-1.1709693",
      "https://www.complex.com/life/a/debbie-encalada/pilot-turns-plane-around-for-passengers-dying-grandson",
      "https://newsinfo.inquirer.net/779334/etihad-airways-turns-plane-around-for-elderly-couple-to-visit-dying-grandson"
    ] },
  { id: "southwest-pilot-holds-plane-grandfather", country: "United States", year: 2011, date: "January 2011",
    airline: "Southwest Airlines", flight: "Los Angeles to Denver", who: "Pilot",
    title: "Pilot holds his plane so a grandfather can say goodbye",
    summary: "Mark Dickinson learned that his young grandson in Denver was about to be taken off life support. Long security lines at LAX made him late, so he ran to the gate in his socks. His wife had called the airline, and the Southwest captain held the plane for about 12 minutes until he boarded, then met him at the jet bridge and told him the plane wasn't going anywhere without him. Dickinson reached Denver in time to say goodbye to his grandson, who died that evening.",
    sources: [
      "https://elliott.org/blog/southwest-airlines-pilot-holds-plane-for-murder-victims-family/",
      "https://abc7.com/archive/7897237/",
      "https://www.avweb.com/news/southwest-captain-delays-takeoff-for-bereaved-grandfather"
    ] },
  { id: "clara-daly-sign-language-alaska", country: "United States", year: 2018, date: "June 2018",
    airline: "Alaska Airlines", flight: "Boston to Portland, Oregon", who: "Passenger",
    title: "Teenager finger-spells into the hand of a deaf-blind passenger",
    summary: "Flight attendants asked whether anyone on board knew American Sign Language because Tim Cook, a 64-year-old man who is deaf and blind, needed help. Clara Daly, 15, had studied ASL for a year. She spelled words letter by letter into his palm so he could ask for water, check the time and talk about his life, and she went back to keep him company several times during the flight. She was only on that plane because her nonstop flight home had been cancelled, and another passenger's photo of the two of them was shared hundreds of thousands of times.",
    sources: [
      "https://abc7.com/post/teen-steps-up-to-help-blind-and-deaf-passenger-on-flight/3653844/",
      "https://www.today.com/news/teen-helps-blind-deaf-man-alaska-airlines-flight-t131815",
      "https://www.ktvu.com/news/california-teen-steps-up-to-help-blind-and-deaf-passenger-prompts-viral-response"
    ] },
  { id: "delta-attendant-sits-with-nervous-flyer", country: "United States", year: 2023, date: "14 January 2023",
    airline: "Delta Connection", flight: "Charlotte to New York JFK", who: "Flight attendant",
    title: "Flight attendant sits in the aisle to calm a frightened flyer",
    summary: "A passenger who had not flown in a long time began crying and shaking at the normal sounds of the plane. Floyd Dean-Shannon, a new flight attendant, explained each noise to her, then sat on the floor of the aisle beside her and held her hand until she had calmed down. Another passenger's photo of the moment was shared thousands of times, and Delta praised his care.",
    sources: [
      "https://spectrumlocalnews.com/nc/charlotte/news/2023/01/30/flight-attendant-goes-viral-on-flight-from-clt-to-jfk",
      "https://www.fox9.com/news/delta-flight-attendant-sits-comforts-jittery-passenger-in-touching-photo",
      "https://aleteia.org/2023/01/25/this-incredible-flight-attendant-went-above-and-beyond-on-a-recent-trip"
    ] }
];

if (typeof module !== "undefined") module.exports = KINDNESS;
