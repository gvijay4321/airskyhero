// AirSkyHero: words spoken by heroes of the sky, shown on airskyhero.com/quotes/.
// Only quotes heard on a cockpit or radio recording, or said on the record to reporters, and each one needs at least
// three independent reliable sources that give the same wording (copies of the same wire story count once).
// hero: the hero's name exactly as in heroes.js; the card uses that hero's picture and links to their page.
// who: who said it, when that is not the hero's own name (for a group such as Flight 93).
// to: who it was said to. when: the date. context: what was happening, in our own words, never copied from the sources.
// note: optional line about the wording, for example where sources differ.
// home: true shows the quote on the home page. After editing, run "npm run build".
const QUOTES = [
  { id: "moody-all-four-engines", hero: "Eric Moody", home: true,
    said: "Ladies and gentlemen, this is your captain speaking. We have a small problem. All four engines have stopped. We are doing our damnedest to get them under control. I trust you are not in too much distress.",
    to: "Passengers, over the cabin speakers", when: "24 June 1982",
    context: "British Airways Flight 9 had flown into an unseen cloud of volcanic ash over Indonesia at night, and one by one all four engines of the Boeing 747 flamed out. Captain Moody calmly told the passengers what had happened while the crew kept trying to relight them. The jumbo glided down for several minutes before the engines came back, and it landed safely in Jakarta with all 263 people aboard unhurt.",
    sources: [
      "https://www.flightsafetyaustralia.com/2024/03/eric-moody-master-of-airmanship-and-understatement",
      "https://www.airlineratings.com/articles/miracle-pilot-takes-off-for-the-last-time",
      "https://news.yahoo.com/eric-moody-british-airways-pilot-105011950.html",
      "https://nationalworld.com/travel/eric-moody-pilot-hero-captain-saved-lives-british-airways-flight-after-all-engines-failed-due-to-volcanic-ash-dies-4563271"
    ] },
  { id: "sullenberger-hudson", hero: "Chesley \"Sully\" Sullenberger", home: true,
    said: "We're gonna be in the Hudson.",
    to: "Air traffic control", when: "15 January 2009",
    context: "Geese had knocked out both engines of US Airways Flight 1549 minutes after take-off from LaGuardia. Controllers offered runways at LaGuardia and Teterboro, but Sullenberger judged the Airbus could reach neither and told them where he was going instead. All 155 people aboard survived the landing on the river.",
    sources: [
      "https://www.nbcnews.com/news/amp/wbna31189575",
      "https://www.heraldnet.com/news/were-gonna-be-in-the-hudson-pilot-said",
      "https://www.inquirer.com/philly/news/nation_world/20090610_Seconds_before_splashdown__a_question___Got_any_ideas__.html"
    ] },
  { id: "sullenberger-brace", hero: "Chesley \"Sully\" Sullenberger",
    said: "This is the captain. Brace for impact.",
    to: "Passengers, over the cabin speakers", when: "15 January 2009",
    context: "With no time to explain more, this was the only announcement Sullenberger made before the ditching. The flight attendants then shouted their own brace commands at the passengers until the plane hit the water.",
    sources: [
      "https://www.nbcnews.com/news/amp/wbna31189575",
      "https://www.nbcnews.com/news/amp/wbna28699822",
      "https://www.foxnews.com/story/frightful-five-minutes-aboard-us-airways-flight-1549-detailed.amp",
      "https://abc7ny.com/archive/6610717/"
    ] },
  { id: "sullenberger-bank-of-experience", hero: "Chesley \"Sully\" Sullenberger",
    said: "For 42 years, I've been making small, regular deposits in this bank of experience, education and training. And on January 15, the balance was sufficient so that I could make a very large withdrawal.",
    to: "Katie Couric, CBS News", when: "February 2009",
    context: "Asked how he had pulled off the landing, Sullenberger put it down to decades of practice rather than luck or heroism.",
    note: "Outlets printed the end slightly differently, as \"a very large withdrawal\" or \"a sudden, large withdrawal\".",
    sources: [
      "https://www.cbsnews.com/news/katie-courics-notebook-heroes-on-the-hudson",
      "https://www.foxnews.com/us/captain-sully-didnt-train-water-landing-before-putting-us-airways-jet-down-hudson-river-15-years-ago",
      "https://www.tvguide.com/news/hero-pilot-interviews-1002697"
    ] },
  { id: "shults-part-of-it-missing", hero: "Tammie Jo Shults", home: true,
    said: "No, it's not on fire, but part of it's missing.",
    to: "Philadelphia air traffic control", when: "17 April 2018",
    context: "An engine on Southwest Flight 1380 had come apart over Pennsylvania, and debris broke a window. When a controller asked whether the Boeing 737 was on fire, Shults answered in an even voice, then added that passengers said there was a hole and someone had gone out. She landed the damaged plane in Philadelphia.",
    sources: [
      "https://www.inquirer.com/philly/news/southwest-philadelphia-pilot-air-traffic-control-transcript-20180418.html",
      "https://www.kcur.org/2018-04-18/listen-southwest-pilot-coolly-plans-one-engine-emergency-landing",
      "https://abcnews4.com/news/nation-world/southwest-1380-pilot-air-traffic-control-audio"
    ] },
  { id: "haynes-make-it-a-runway", hero: "Al Haynes",
    said: "You want to be particular and make it a runway, huh?",
    to: "Sioux City approach control", when: "19 July 1989",
    context: "United Flight 232 had lost all its hydraulics and could only be steered by changing the power of its two remaining engines. When the controller cleared it to land on any runway, Haynes joked back, and the crew laughed in the middle of the emergency. 184 of the 296 people aboard survived the crash landing.",
    note: "A transcript Haynes later used in his talks has \"You don't want to be particular…\"",
    sources: [
      "https://www.npr.org/transcripts/754485091",
      "https://www.travis.af.mil/News/Article/151152/former-pilot-speaks",
      "https://en.wikipedia.org/wiki/United_Airlines_Flight_232"
    ] },
  { id: "beamer-lets-roll", hero: "Passengers and crew of Flight 93", who: "Todd Beamer",
    said: "Are you guys ready? Okay. Let's roll.",
    to: "Fellow passengers, overheard on an Airfone call", when: "11 September 2001",
    context: "Beamer had been on the seat-back phone with GTE supervisor Lisa Jefferson, telling her the passengers planned to rush the hijackers. These were the last words she heard before the line went quiet. The revolt stopped the hijackers reaching their target, and the plane came down in a field near Shanksville, Pennsylvania.",
    sources: [
      "https://www.phrases.org.uk/?p=37809",
      "https://newsweek.com/id/75833",
      "https://www.dailyherald.com/news/20210910/lets-roll-todd-beamers-father-on-the-valiant-fight-for-flight-93"
    ] },
  { id: "yusupov-not-a-hero", hero: "Damir Yusupov",
    said: "I did what I had to do. I saved the plane, the passengers, the crew. I think that was the only decision. I don't think I'm a hero.",
    to: "Reporters in Yekaterinburg", when: "16 August 2019",
    context: "A day after a flock of gulls disabled both engines of Ural Airlines Flight 178, Yusupov had landed the Airbus A321 with its wheels up in a cornfield outside Moscow. All 233 aboard lived, and the same day he was made a Hero of Russia, though he told reporters he did not see himself that way.",
    note: "Translated from Russian, so the wording differs a little between outlets.",
    sources: [
      "https://www.euronews.com/2019/08/16/russian-pilot-says-hes-no-hero-despite-praise-for-crash-landing",
      "https://www.themoscowtimes.com/2019/08/16/russian-pilot-says-hes-no-hero-despite-praise-for-crash-landing-a66905",
      "https://www.rferl.org/a/pilot-of-russian-airliner-says-had-no-time-for-fear-as-plane-landed-in-cornfield/30113401.html"
    ] }
];

if (typeof module !== "undefined") module.exports = QUOTES;
