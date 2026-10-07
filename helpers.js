// AirSkyHero: the people who helped on each flight, shown as "Who helped" on every hero page for that flight.
// Each person is listed only when at least three independent reliable sources confirm what they did (sources: [...]).
// heroId links a person to their own hero page. photo: freely licensed (Wikimedia Commons) only, with its credit.
// After editing, run "npm run build".
const HELPERS = {
  "US Airways Flight 1549": [
    {
      "name": "Chesley \"Sully\" Sullenberger",
      "role": "Captain",
      "heroId": "sullenberger",
      "did": "Took control after both engines lost power, glided the jet to a controlled ditching on the Hudson, then checked the cabin twice to make sure everyone was out.",
      "photo": {
        "src": "images/people/chesley-sully-sullenberger.jpg",
        "credit": "Gage Skidmore · CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Chesley_%22Sully%22_Sullenberger_by_Gage_Skidmore_(cropped).jpg"
      },
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1003.pdf",
        "https://www.congress.gov/111/crec/2009/01/26/modified/CREC-2009-01-26-pt1-PgH500.htm",
        "https://cbsnews.com/news/flight-1549-saving-155-souls-in-minutes",
        "https://en.wikipedia.org/wiki/US_Airways_Flight_1549"
      ]
    },
    {
      "name": "Jeffrey Skiles",
      "role": "First officer",
      "heroId": "skiles",
      "did": "Worked the engine restart checklist after the bird strike while Sullenberger flew, and helped the crew get everyone off the sinking aircraft.",
      "photo": {
        "src": "images/people/jeffrey-skiles.jpg",
        "credit": "Susan Ruggles from Milwaukee, USA · CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Protest_0108_(50939932336)_(Jeffrey_Skiles).jpg"
      },
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1003.pdf",
        "https://www.congress.gov/111/crec/2009/01/26/modified/CREC-2009-01-26-pt1-PgH500.htm",
        "https://cbsnews.com/news/flight-1549-saving-155-souls-in-minutes",
        "https://en.wikipedia.org/wiki/US_Airways_Flight_1549"
      ]
    },
    {
      "name": "Doreen Welsh",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Worked the rear of the cabin as cold water poured in and helped get passengers out, while suffering a deep wound to her leg.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1003.pdf",
        "https://cbsnews.com/news/flight-1549-saving-155-souls-in-minutes",
        "https://www.nbcnews.com/id/wbna34864945",
        "https://en.wikipedia.org/wiki/US_Airways_Flight_1549"
      ]
    },
    {
      "name": "Sheila Dail",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Prepared passengers for impact and worked a forward exit door, helping the crew evacuate all 150 passengers within minutes.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1003.pdf",
        "https://www.congress.gov/111/crec/2009/01/26/modified/CREC-2009-01-26-pt1-PgH500.htm",
        "https://cbsnews.com/news/flight-1549-saving-155-souls-in-minutes",
        "https://www.ehstoday.com/emergency-management/article/21914649/afa-cwa-flight-attendants-professionalism-safety-training-saved-lives-of-flight-1549-passengers"
      ]
    },
    {
      "name": "Donna Dent",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Prepared passengers for impact and helped evacuate everyone from the front of the plane onto the slide rafts and wings.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1003.pdf",
        "https://www.congress.gov/111/crec/2009/01/26/modified/CREC-2009-01-26-pt1-PgH500.htm",
        "https://cbsnews.com/news/flight-1549-saving-155-souls-in-minutes",
        "https://www.ehstoday.com/emergency-management/article/21914649/afa-cwa-flight-attendants-professionalism-safety-training-saved-lives-of-flight-1549-passengers"
      ]
    },
    {
      "name": "Vincent Lombardi",
      "role": "Ferry captain (NY Waterway, Thomas Jefferson)",
      "heroId": null,
      "did": "Captained the ferry Thomas Jefferson, the first vessel to reach the plane, where his crew pulled 56 people out of the river and off the wings.",
      "sources": [
        "https://www.nbcnews.com/news/amp/wbna28688947",
        "https://www.foxnews.com/story/commuter-ferries-crucial-to-rescue-in-new-york-city-crash-landing.amp",
        "https://www.ems1.com/ems-products/incident-management/articles/ny-response-to-emergency-landing-has-heroic-results-MST8kVRgnBg4iAzf/",
        "https://professionalmariner.com/mariners-rush-to-rescue-airline-passengers-after-plane-crash-lands-on-the-hudson-river/"
      ]
    },
    {
      "name": "Brittany Catanzaro",
      "role": "Ferry captain (NY Waterway, Governor Thomas H. Kean)",
      "heroId": null,
      "did": "Captained the ferry Governor Thomas H. Kean, steering it beside the drifting plane so her crew could lift survivors aboard.",
      "photo": {
        "src": "images/people/brittany-catanzaro.jpg",
        "credit": "USCG · Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:USCG_Petty_Officer,_Brittany_Catanzaro,_commanded_a_NYC_ferry_that_rescued_passengers_from_US_Airways_flight_1549.png"
      },
      "sources": [
        "https://www.nbcnews.com/news/amp/wbna28688947",
        "https://www.foxnews.com/story/commuter-ferries-crucial-to-rescue-in-new-york-city-crash-landing.amp",
        "https://www.ems1.com/ems-products/incident-management/articles/ny-response-to-emergency-landing-has-heroic-results-MST8kVRgnBg4iAzf/",
        "https://professionalmariner.com/mariners-rush-to-rescue-airline-passengers-after-plane-crash-lands-on-the-hudson-river/",
        "https://njmonthly.com/articles/best-of-Jersey/heroes-of-the-hudson/"
      ]
    },
    {
      "name": "Vincent Lucante",
      "role": "Ferry port captain (NY Waterway, Yogi Berra)",
      "heroId": null,
      "did": "Took the out-of-service ferry Yogi Berra to the scene and steered it alongside a life raft so survivors, including an infant, could be lifted aboard.",
      "sources": [
        "https://www.foxnews.com/story/commuter-ferries-crucial-to-rescue-in-new-york-city-crash-landing.amp",
        "https://professionalmariner.com/mariners-rush-to-rescue-airline-passengers-after-plane-crash-lands-on-the-hudson-river/",
        "https://njmonthly.com/articles/best-of-Jersey/heroes-of-the-hudson/"
      ]
    },
    {
      "name": "Michael Delaney",
      "role": "NYPD Harbor Unit scuba diver",
      "heroId": null,
      "did": "Jumped from a police helicopter into the river and calmed a panicking, freezing woman clinging to a ferry, helping get her aboard.",
      "sources": [
        "https://www.nbcnews.com/news/us-news/capt-sully-sullenberger-reunites-nypd-divers-15-years-miracle-hudson-rcna133437",
        "https://www.cbsnews.com/news/nypd-divers-describe-dramatic-rescue",
        "https://www.ems1.com/ems-products/incident-management/articles/ny-response-to-emergency-landing-has-heroic-results-MST8kVRgnBg4iAzf/",
        "https://www.jems.com/ems-operations/ground-ambulance-operations/many-unsung-heroes-involved-ma/"
      ]
    },
    {
      "name": "Robert Rodriguez",
      "role": "NYPD Harbor Unit scuba diver",
      "heroId": null,
      "did": "Jumped from a police helicopter into the river with his partner Michael Delaney to bring a struggling woman to safety on a ferry.",
      "sources": [
        "https://www.nbcnews.com/news/us-news/capt-sully-sullenberger-reunites-nypd-divers-15-years-miracle-hudson-rcna133437",
        "https://www.cbsnews.com/news/nypd-divers-describe-dramatic-rescue",
        "https://www.ems1.com/ems-products/incident-management/articles/ny-response-to-emergency-landing-has-heroic-results-MST8kVRgnBg4iAzf/",
        "https://www.jems.com/ems-operations/ground-ambulance-operations/many-unsung-heroes-involved-ma/"
      ]
    },
    {
      "name": "Patrick Harten",
      "role": "Air traffic controller (New York TRACON)",
      "heroId": null,
      "did": "Handled the emergency by radio, offering LaGuardia runways and arranging a landing at Teterboro before the crew said they would ditch in the Hudson.",
      "sources": [
        "https://natca.org/2009/02/24/testimony-of-controller-patrick-harten-us-airways-flight-1549-2-24-2009/",
        "https://cbsnews.com/news/controller-flight-1549-a-death-sentence",
        "https://en.wikipedia.org/wiki/US_Airways_Flight_1549"
      ]
    }
  ],
  "Southwest Airlines Flight 1380": [
    {
      "name": "Tammie Jo Shults",
      "role": "Captain",
      "heroId": "shults",
      "did": "Took the controls during the emergency descent and flew the damaged jet on one engine to a safe landing in Philadelphia.",
      "photo": {
        "src": "images/people/tammie-jo-shults.jpg",
        "credit": "Official White House Photo by Shealah Craighead · Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Tammie_Jo_Shults_WH.jpg"
      },
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf",
        "https://6abc.com/post/pilots-describe-southwest-1380s-midair-emergency/3459993/",
        "https://avweb.com/flight-safety/southwest-1380-flew-like-a-rock/",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/",
        "https://en.wikipedia.org/wiki/Southwest_Airlines_Flight_1380"
      ]
    },
    {
      "name": "Darren Ellisor",
      "role": "First officer",
      "heroId": null,
      "did": "Was flying when the engine failed and rolled the jet back to level, then handled the emergency checklists while Shults flew the landing.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf",
        "https://6abc.com/post/pilots-describe-southwest-1380s-midair-emergency/3459993/",
        "https://avweb.com/flight-safety/southwest-1380-flew-like-a-rock/",
        "https://en.wikipedia.org/wiki/Southwest_Airlines_Flight_1380"
      ]
    },
    {
      "name": "Tim McGinty",
      "role": "Passenger",
      "heroId": null,
      "did": "Grabbed the passenger who was pulled partly out of the broken window and, with Andrew Needum, pulled her back into the cabin.",
      "sources": [
        "https://www.cbsnews.com/texas/news/texans-tried-to-save-southwest-flight-1380-victim",
        "https://www.foxnews.com/us/southwest-airlines-flight-heroes-desperately-tried-to-save-mom.print",
        "https://www.foxnews.com/us/firefighter-nurse-on-southwest-flight-felt-moved-to-act",
        "https://www.nbcphiladelphia.com/news/national-international/southwest-1380-passenger-dilemma-protect-child-or-try-to-save-victim/52812/",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/"
      ]
    },
    {
      "name": "Andrew Needum",
      "role": "Passenger (firefighter and paramedic)",
      "heroId": null,
      "did": "Helped pull the critically injured passenger back in through the broken window, then gave her CPR for the rest of the flight.",
      "sources": [
        "https://www.cbsnews.com/texas/news/texans-tried-to-save-southwest-flight-1380-victim",
        "https://www.foxnews.com/us/southwest-airlines-flight-heroes-desperately-tried-to-save-mom.print",
        "https://www.foxnews.com/us/firefighter-nurse-on-southwest-flight-felt-moved-to-act",
        "https://www.nbcphiladelphia.com/news/national-international/southwest-1380-passenger-dilemma-protect-child-or-try-to-save-victim/52812/",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/",
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf"
      ]
    },
    {
      "name": "Peggy Phillips",
      "role": "Passenger (retired nurse)",
      "heroId": null,
      "did": "Answered the crew's call for someone who knew CPR and gave CPR to the injured passenger until the plane landed.",
      "sources": [
        "https://6abc.com/amp/post/retired-nurse-helped-critically-injured-southwest-passenger/3360142/",
        "https://abc11.com/3360446/",
        "https://www.foxnews.com/us/firefighter-nurse-on-southwest-flight-felt-moved-to-act",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/",
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf"
      ]
    },
    {
      "name": "Rachel Fernheimer",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Moved through the depressurised cabin with portable oxygen to check on and help passengers, then shouted brace commands for the emergency landing.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/",
        "https://www.nbcphiladelphia.com/news/national-international/southwest-1380-crew-headed-to-white-house-for-meeting-with-president-trump/56048/",
        "https://en.wikipedia.org/wiki/Southwest_Airlines_Flight_1380"
      ]
    },
    {
      "name": "Seanique Mallory",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Moved through the depressurised cabin with portable oxygen to check on and help passengers, then shouted brace commands for the emergency landing.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/",
        "https://www.nbcphiladelphia.com/news/national-international/southwest-1380-crew-headed-to-white-house-for-meeting-with-president-trump/56048/",
        "https://en.wikipedia.org/wiki/Southwest_Airlines_Flight_1380"
      ]
    },
    {
      "name": "Kathryn Sandoval",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Moved through the depressurised cabin with portable oxygen to check on and help passengers, then shouted brace commands for the emergency landing.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1903.pdf",
        "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-welcoming-crew-passengers-southwest-airlines-flight-1380-white-house/",
        "https://www.nbcphiladelphia.com/news/national-international/southwest-1380-crew-headed-to-white-house-for-meeting-with-president-trump/56048/",
        "https://en.wikipedia.org/wiki/Southwest_Airlines_Flight_1380"
      ]
    }
  ],
  "Air Florida Flight 90": [
    {
      "name": "Arland D. Williams Jr.",
      "role": "Passenger",
      "heroId": "williams",
      "did": "Clinging to the wreckage in the icy river, he repeatedly passed the helicopter's lifeline to other survivors, and drowned before he could be rescued.",
      "sources": [
        "https://www.reaganlibrary.gov/research/speeches/60683a",
        "https://nbcwashington.com/news/local/from-the-archives-heroes-pull-people-from-icy-potomac-after-1982-jet-crash/3513565",
        "https://www.history.com/this-day-in-history/january-13/plane-crashes-into-potomac",
        "https://www.thisdayinaviation.com/tag/melvin-e-windsor/",
        "https://en.wikipedia.org/wiki/Air_Florida_Flight_90"
      ]
    },
    {
      "name": "Donald W. Usher",
      "role": "U.S. Park Police helicopter pilot (Eagle 1)",
      "heroId": null,
      "did": "Flew the Park Police helicopter low over the icy river, at times with its skids in the water, to tow survivors to shore.",
      "sources": [
        "https://carnegiehero.org/from-the-archives-40th-anniversary-of-the-rescue-on-the-potomac",
        "https://www.thisdayinaviation.com/tag/melvin-e-windsor/",
        "https://nbcwashington.com/news/local/from-the-archives-heroes-pull-people-from-icy-potomac-after-1982-jet-crash/3513565",
        "https://www.reaganlibrary.gov/research/speeches/60683a",
        "https://en.wikipedia.org/wiki/Air_Florida_Flight_90"
      ]
    },
    {
      "name": "Melvin E. \"Gene\" Windsor",
      "role": "U.S. Park Police rescue technician (Eagle 1)",
      "heroId": null,
      "did": "Dropped lines to survivors from the helicopter, then stood on its skid to grab a weakened woman from the water and hold her as they flew to shore.",
      "sources": [
        "https://carnegiehero.org/from-the-archives-40th-anniversary-of-the-rescue-on-the-potomac",
        "https://www.thisdayinaviation.com/tag/melvin-e-windsor/",
        "https://nbcwashington.com/news/local/from-the-archives-heroes-pull-people-from-icy-potomac-after-1982-jet-crash/3513565",
        "https://www.reaganlibrary.gov/research/speeches/60683a",
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8208.pdf"
      ]
    },
    {
      "name": "Lenny Skutnik",
      "role": "Bystander (Congressional Budget Office employee)",
      "heroId": null,
      "did": "Took off his coat and boots, jumped into the icy Potomac and swam out to pull Priscilla Tirado, too weak to hold the line, to shore.",
      "sources": [
        "https://carnegiehero.org/from-the-archives-40th-anniversary-of-the-rescue-on-the-potomac",
        "https://nbcwashington.com/news/local/from-the-archives-heroes-pull-people-from-icy-potomac-after-1982-jet-crash/3513565",
        "https://www.history.com/this-day-in-history/january-13/plane-crashes-into-potomac",
        "https://www.reaganlibrary.gov/research/speeches/60683a",
        "https://en.wikipedia.org/wiki/Lenny_Skutnik",
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8208.pdf"
      ]
    },
    {
      "name": "Roger Olian",
      "role": "Bystander (sheet-metal worker)",
      "heroId": null,
      "did": "Tied a rope around himself and went into the ice-filled river to try to reach the survivors, staying in the water until the helicopter arrived.",
      "sources": [
        "https://carnegiehero.org/from-the-archives-40th-anniversary-of-the-rescue-on-the-potomac",
        "https://nbcwashington.com/news/local/from-the-archives-heroes-pull-people-from-icy-potomac-after-1982-jet-crash/3513565",
        "https://www.reaganlibrary.gov/research/speeches/60683a",
        "https://en.wikipedia.org/wiki/Air_Florida_Flight_90"
      ]
    },
    {
      "name": "Kelly Duncan",
      "role": "Flight attendant",
      "heroId": null,
      "did": "The only surviving crew member, she inflated the one life vest the survivors could find and gave it to a badly injured passenger.",
      "sources": [
        "https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8208.pdf",
        "https://en.wikipedia.org/wiki/Kelly_Duncan",
        "https://justhelicopters.com/Articles-and-News/Industry-Wide-News/Article/184493/Air-Florida-Flight-90-A-Cabin-Crew-Perspective",
        "https://www.upi.com/Archives/1982/03/01/Stewardess-Kelly-Duncan-who-survived-last-Januarys-crash-of/7657383806800/"
      ]
    }
  ],
  "United Airlines Flight 232": [
    {
      "name": "Al Haynes",
      "role": "Captain",
      "heroId": "haynes",
      "did": "Led the cockpit team that steered the DC-10 using engine power alone after all hydraulics failed, bringing it to Sioux City, where 184 people survived.",
      "photo": {
        "src": "images/people/al-haynes.jpg",
        "credit": "Wayne Russell · Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Captain_Al_Haynes_(cropped).jpg"
      },
      "sources": [
        "https://www.faa.gov/sites/faa.gov/files/2022-11/AccidentReportUAL232.pdf",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_232",
        "https://www.upi.com/Archives/1989/08/19/United-pilot-controller-kept-calm-tape-shows/2874619502400/",
        "https://www.upi.com/Archives/1989/08/17/Transcripts-detail-conversations-in-cockpit-of-Flight-232/6784619329600/"
      ]
    },
    {
      "name": "Dennis Fitch",
      "role": "Off-duty United DC-10 training check airman (passenger)",
      "heroId": "fitch",
      "did": "Volunteered from his passenger seat and worked the engine throttles to steer the jet, since none of the normal flight controls responded.",
      "sources": [
        "https://www.faa.gov/sites/faa.gov/files/2022-11/AccidentReportUAL232.pdf",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_232",
        "https://chicago.suntimes.com/2016/4/20/18404557/surviving-crew-of-doomed-united-flight-232-reunites-for-play",
        "https://www.thisdayinaviation.com/tag/dudley-dvorak/"
      ]
    },
    {
      "name": "William Records",
      "role": "First officer",
      "heroId": null,
      "did": "Flew the crippled DC-10 alongside the captain for the whole emergency, helping to steer it towards the runway at Sioux City.",
      "sources": [
        "https://www.faa.gov/sites/faa.gov/files/2022-11/AccidentReportUAL232.pdf",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_232",
        "https://magazine.washington.edu/pilot-william-records-63-helps-save-dozens-in-plane-crash/"
      ]
    },
    {
      "name": "Dudley Dvorak",
      "role": "Second officer (flight engineer)",
      "heroId": null,
      "did": "Went back to inspect the damage near the tail, reported it to the cockpit, and worked through the emergency procedures with the crew.",
      "sources": [
        "https://www.faa.gov/sites/faa.gov/files/2022-11/AccidentReportUAL232.pdf",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_232",
        "https://flightsafety.org/ap/ap_jun91.pdf",
        "https://www.thisdayinaviation.com/tag/dudley-dvorak/",
        "https://chicago.suntimes.com/2016/4/20/18404557/surviving-crew-of-doomed-united-flight-232-reunites-for-play"
      ]
    },
    {
      "name": "Kevin Bachman",
      "role": "Air traffic controller, Sioux City Approach",
      "heroId": null,
      "did": "Calmly guided the crippled jet to Sioux City, steered it away from the city and cleared it to land on any runway while rescue crews stood by.",
      "sources": [
        "https://www.upi.com/Archives/1989/08/19/United-pilot-controller-kept-calm-tape-shows/2874619502400/",
        "https://www.deseret.com/1989/8/19/18820172/flight-232-pilots-kept-hope-tape-reveals/",
        "https://flightsafety.org/ap/ap_jun91.pdf"
      ]
    },
    {
      "name": "Jan Brown",
      "role": "Senior flight attendant",
      "heroId": null,
      "did": "Led the cabin crew in preparing passengers for the crash landing, including brace instructions and padding for small children.",
      "sources": [
        "https://www.faa.gov/sites/faa.gov/files/2022-11/AccidentReportUAL232.pdf",
        "https://chicago.suntimes.com/2016/4/20/18404557/surviving-crew-of-doomed-united-flight-232-reunites-for-play",
        "https://flightsafety.org/ap/ap_jun91.pdf",
        "https://www.cbsnews.com/colorado/news/25-years-after-horrific-crash-memories-surface-and-crusades-continue/"
      ]
    },
    {
      "name": "Jerry Schemmel",
      "role": "Passenger",
      "heroId": null,
      "did": "After escaping the wreckage he heard a baby crying, went back into the plane and carried out 11-month-old Sabrina Michaelson.",
      "photo": {
        "src": "images/people/jerry-schemmel.jpg",
        "credit": "Race Across America on Flickr (Original version) 佾珜 (Crop) · CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Race_Across_America_Jerry_Schemmel_2015_Crop.jpg"
      },
      "sources": [
        "https://www.cbsnews.com/colorado/news/25-years-after-horrific-crash-memories-surface-and-crusades-continue/",
        "https://cowboystatedaily.com/2025/10/12/rockies-announcer-jerry-schemmel-shares-how-plane-crash-changed-his-life",
        "https://www.faa.gov/sites/faa.gov/files/2022-11/AccidentReportUAL232.pdf",
        "https://omaha.com/news/iowa/heroism-grit-enshrined-united-flight-crash-in-aviation-lore/article_4446be74-bd05-5263-97fd-235ee45bace0.html",
        "https://siouxcityjournal.com/news/flight-232-survivor-crash-completely-changed-me/article_184dd789-8314-567e-ac8b-d7f702a4084a.html"
      ]
    }
  ],
  "United Airlines Flight 93": [
    {
      "name": "Todd Beamer",
      "role": "Passenger",
      "heroId": null,
      "did": "Told an Airfone operator that he and other passengers planned to jump a hijacker, and was heard saying \"Are you guys ready? Okay. Let's roll.\"",
      "sources": [
        "https://www.nps.gov/people/toddmbeamer.htm",
        "https://archive.seattletimes.com/archive/20010917/heroes17/last-words-from-victims-lets-roll",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_93",
        "https://www.nps.gov/flni/learn/historyculture/phone-calls-from-flight-93.htm"
      ]
    },
    {
      "name": "Tom Burnett",
      "role": "Passenger",
      "heroId": null,
      "did": "Called his wife several times with details of the hijacking and told her that a group of passengers was planning to take back the plane.",
      "sources": [
        "https://www.nps.gov/people/thomaseburnettjr.htm",
        "https://archive.seattletimes.com/archive/20010917/heroes17/last-words-from-victims-lets-roll",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_93",
        "https://www.nps.gov/flni/learn/historyculture/phone-calls-from-flight-93.htm"
      ]
    },
    {
      "name": "Jeremy Glick",
      "role": "Passenger",
      "heroId": null,
      "did": "Told his wife by phone that the passengers had voted on rushing the hijackers and that he and other men were organising to do it.",
      "sources": [
        "https://www.nps.gov/people/jeremyloganglick.htm",
        "https://www.9-11commission.gov/report/911Report_Ch1.htm",
        "https://archive.seattletimes.com/archive/20010917/heroes17/last-words-from-victims-lets-roll",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_93",
        "https://www.nps.gov/flni/learn/historyculture/phone-calls-from-flight-93.htm"
      ]
    },
    {
      "name": "Sandy Bradshaw",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Reported the hijacking to United, then told her husband she and others were boiling water to throw at the hijackers before running to first class.",
      "sources": [
        "https://www.9-11commission.gov/report/911Report_Ch1.htm",
        "https://www.9-11commission.gov/report/911Report_Notes.htm",
        "https://www.nps.gov/people/sandywaughbradshaw.htm",
        "https://en.wikipedia.org/wiki/United_Airlines_Flight_93",
        "https://www.nps.gov/flni/learn/historyculture/phone-calls-from-flight-93.htm"
      ]
    }
  ],
  "Air Mauritanie, Nouakchott to Gran Canaria": [
    {
      "name": "Ahmedou Mohamed Lemine",
      "role": "Captain",
      "heroId": "lemine",
      "did": "Told passengers in French, which the hijacker did not speak, to get ready, then braked hard and sped up on landing to knock the gunman off his feet so crew and passengers could overpower him.",
      "sources": [
        "https://www.nbcnews.com/id/wbna17183946",
        "https://lecalame.info/?q=node/11305",
        "https://www.boolumbal.org/Ouverture-du-proces-du-pirate-d-Air-Mauritanie_a2317.html",
        "https://www.aljazeera.com/news/2007/2/16/mauritanian-hijacker-sought-asylum"
      ]
    }
  ],
  "TWA Flight 847": [
    {
      "name": "Uli Derickson",
      "role": "Flight service manager (purser)",
      "heroId": "derickson",
      "did": "Translated for the German-speaking hijacker, hid passports with Jewish-sounding names, paid for fuel with her own card and stood up to the beatings.",
      "sources": [
        "https://en.wikipedia.org/wiki/Uli_Derickson",
        "https://www.latimes.com/archives/la-xpm-2005-feb-25-me-derickson25-story.html",
        "https://www.deseret.com/2005/2/27/19879440/key-flight-attendant-in-1985-hijacking-dies",
        "https://time.com/archive/6704296/terror-aboard-flight-847/",
        "https://en.wikipedia.org/wiki/TWA_Flight_847"
      ]
    },
    {
      "name": "John Testrake",
      "role": "Captain",
      "heroId": null,
      "did": "Kept flying the hijacked jet with a gun held on him and persuaded Beirut air traffic control to let the threatened plane land.",
      "sources": [
        "https://en.wikipedia.org/wiki/TWA_Flight_847",
        "https://time.com/archive/6704296/terror-aboard-flight-847/",
        "https://www.baltimoresun.com/news/bs-xpm-1996-02-07-1996038039-story.html",
        "https://www.foxnews.com/lifestyle/jack-carrs-take-terrorism-sky-june-14-1985-crew-nothing-short-heroic"
      ]
    }
  ],
  "Pan Am Flight 73": [
    {
      "name": "Neerja Bhanot",
      "role": "Senior purser",
      "heroId": "bhanot",
      "did": "Helped her crew hide American passengers' passports from the hijackers and was fatally shot while helping passengers escape during the final assault.",
      "sources": [
        "https://en.wikipedia.org/wiki/Pan_Am_Flight_73",
        "https://ovc.ojp.gov/gallery/award-recipients/2006/pan-am-flight-73-flight-attendants-and-director-pakistan",
        "https://www.britannica.com/event/Pan-Am-flight-73-hijacking",
        "https://www.bbc.com/news/world-asia-35800683"
      ]
    },
    {
      "name": "Sunshine Vesuwala",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Hid American passports from the hijackers, redirected passengers to an inflated escape slide, then went back in and helped carry the wounded Neerja Bhanot out.",
      "sources": [
        "https://www.bbc.com/news/world-asia-35800683",
        "https://thepanammuseum.org/moments/the-hijacking-of-pan-am-flight-73/",
        "https://en.wikipedia.org/wiki/Pan_Am_Flight_73",
        "https://ovc.ojp.gov/gallery/award-recipients/2006/pan-am-flight-73-flight-attendants-and-director-pakistan"
      ]
    },
    {
      "name": "Viraf Daroga",
      "role": "Pan Am director for Pakistan",
      "heroId": null,
      "did": "Negotiated with the hijackers from the tarmac, within their firing range, to try to stop killings, and helped injured passengers after the assault.",
      "sources": [
        "https://ovc.ojp.gov/gallery/award-recipients/2006/pan-am-flight-73-flight-attendants-and-director-pakistan",
        "https://www.bbc.com/news/world-asia-35800683",
        "https://thepanammuseum.org/moments/the-hijacking-of-pan-am-flight-73/",
        "https://en.wikipedia.org/wiki/Pan_Am_Flight_73"
      ]
    },
    {
      "name": "Dilip Bidichandani",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Helped redirect passengers to an escape slide, then went back into the dark cabin and helped carry the wounded Neerja Bhanot to the slide.",
      "sources": [
        "https://www.bbc.com/news/world-asia-35800683",
        "https://thepanammuseum.org/moments/the-hijacking-of-pan-am-flight-73/",
        "https://en.wikipedia.org/wiki/Pan_Am_Flight_73",
        "https://ovc.ojp.gov/gallery/award-recipients/2006/pan-am-flight-73-flight-attendants-and-director-pakistan"
      ]
    }
  ],
  "BOAC Flight 712": [
    {
      "name": "Barbara Jane Harrison",
      "role": "Stewardess",
      "heroId": "harrison",
      "did": "Helped passengers out of the rear door of the burning aircraft and died while trying to save a disabled passenger seated near the back.",
      "sources": [
        "https://www.thegazette.co.uk/London/issue/44913/supplement/8211",
        "https://era.ed.ac.uk/handle/1842/5259",
        "https://en.wikipedia.org/wiki/Barbara_Jane_Harrison",
        "https://en.wikipedia.org/wiki/BOAC_Flight_712",
        "https://www.thisdayinaviation.com/?p=870"
      ]
    },
    {
      "name": "Neville Davis-Gordon",
      "role": "Chief steward",
      "heroId": null,
      "did": "Led the cabin evacuation, brought a passenger stranded on the burning wing back to a safe exit, and stayed aboard until all survivors had left the cabin.",
      "sources": [
        "https://www.thegazette.co.uk/London/issue/44913/supplement/8213",
        "https://era.ed.ac.uk/handle/1842/5259",
        "https://en.wikipedia.org/wiki/BOAC_Flight_712",
        "https://www.thisdayinaviation.com/?p=870"
      ]
    },
    {
      "name": "Cliff Taylor",
      "role": "Captain",
      "heroId": null,
      "did": "Landed the burning Boeing 707 back at Heathrow within minutes of the engine fire starting, then helped inflate an escape chute.",
      "sources": [
        "https://era.ed.ac.uk/handle/1842/5259",
        "https://en.wikipedia.org/wiki/BOAC_Flight_712",
        "https://www.thisdayinaviation.com/?p=870"
      ]
    }
  ],
  "Air Transat Flight 236": [
    {
      "name": "Robert Piché",
      "role": "Captain",
      "heroId": "piche",
      "did": "Glided the Airbus A330 for about 19 minutes with both engines out of fuel and landed it at Lajes in the Azores; all 306 people on board survived.",
      "sources": [
        "https://www.fss.aero/accident-reports/dvdfiles/PT/2001-08-24-PT.pdf",
        "https://en.wikipedia.org/wiki/Air_Transat_Flight_236",
        "https://thecanadianencyclopedia.ca/en/article/robert-piche"
      ]
    },
    {
      "name": "Dirk DeJager",
      "role": "First officer",
      "heroId": null,
      "did": "Declared the Mayday and, according to investigators, gave the captain full and effective support through the engines-out glide and landing.",
      "sources": [
        "https://www.fss.aero/accident-reports/dvdfiles/PT/2001-08-24-PT.pdf",
        "https://en.wikipedia.org/wiki/Air_Transat_Flight_236",
        "https://thecanadianencyclopedia.ca/en/article/robert-piche"
      ]
    }
  ],
  "British Airways Flight 9": [
    {
      "name": "Eric Moody",
      "role": "Captain",
      "heroId": "moody",
      "did": "Flew the 747 in a glide after all four engines failed, kept passengers calm by announcement and landed safely at Jakarta once engines restarted.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_009",
        "https://www.aerotime.aero/articles/28232-british-airways-9-how-boeing-747-lost-all-four-engines",
        "https://www.airlineratings.com/articles/miracle-pilot-takes-off-for-the-last-time",
        "https://www.thisdayinaviation.com/24-june-1982/"
      ]
    },
    {
      "name": "Barry Townley-Freeman",
      "role": "Senior engineer officer (flight engineer)",
      "heroId": null,
      "did": "Monitored the engines, called out each failure and worked with the pilots through repeated restart attempts until the engines relit.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_009",
        "https://www.airlineratings.com/articles/miracle-pilot-takes-off-for-the-last-time",
        "https://www.aerotime.aero/articles/28232-british-airways-9-how-boeing-747-lost-all-four-engines",
        "https://mentourpilot.com/ba009-gliding-in-an-ash-cloud-40-years-ago-today/",
        "https://samchui.com/2022/12/11/miracle-on-ba009-how-pilots-safely-landed-a-747-after-losing-all-four-engines/"
      ]
    },
    {
      "name": "Roger Greaves",
      "role": "Senior first officer",
      "heroId": null,
      "did": "Sent the mayday call to Jakarta, helped with the engine restart attempts and gave the captain glideslope guidance on the approach.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_009",
        "https://www.airlineratings.com/articles/miracle-pilot-takes-off-for-the-last-time",
        "https://samchui.com/2022/12/11/miracle-on-ba009-how-pilots-safely-landed-a-747-after-losing-all-four-engines/",
        "https://mentourpilot.com/ba009-gliding-in-an-ash-cloud-40-years-ago-today/"
      ]
    }
  ],
  "British Airways Flight 5390": [
    {
      "name": "Alastair Atchison",
      "role": "First officer",
      "heroId": "atchison",
      "did": "Took control after the windscreen blew out, sent a mayday, descended the jet and landed it safely at Southampton while the crew held the captain.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_5390",
        "https://www.abc.net.au/news/2023-01-15/ba5390-pilot-sucked-out-windscreen-the-ultimate-nightmare/101813438",
        "https://www.nzherald.co.nz/travel/image-of-pilot-hanging-out-window-captures-heroic-story-30-years-on/GR2HBBCBUGMOTA7MEYPI7UR54A/",
        "https://www.thevintagenews.com/2020/12/02/captain/"
      ]
    },
    {
      "name": "Nigel Ogden",
      "role": "Steward",
      "heroId": "ogden",
      "did": "Rushed into the cockpit and grabbed Captain Lancaster as he was pulled out of the window, holding on to him until his own strength gave out.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_5390",
        "https://www.abc.net.au/news/2023-01-15/ba5390-pilot-sucked-out-windscreen-the-ultimate-nightmare/101813438",
        "https://www.nzherald.co.nz/travel/image-of-pilot-hanging-out-window-captures-heroic-story-30-years-on/GR2HBBCBUGMOTA7MEYPI7UR54A/",
        "https://www.thevintagenews.com/2020/12/02/captain/"
      ]
    },
    {
      "name": "John Heward",
      "role": "Chief steward (purser)",
      "heroId": null,
      "did": "Cleared the broken cockpit door from the controls and helped hold Captain Lancaster, taking over when Nigel Ogden tired.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_5390",
        "https://www.abc.net.au/news/2023-01-15/ba5390-pilot-sucked-out-windscreen-the-ultimate-nightmare/101813438",
        "https://www.nzherald.co.nz/travel/image-of-pilot-hanging-out-window-captures-heroic-story-30-years-on/GR2HBBCBUGMOTA7MEYPI7UR54A/",
        "https://www.thevintagenews.com/2020/12/02/captain/"
      ]
    },
    {
      "name": "Simon Rogers",
      "role": "Steward",
      "heroId": null,
      "did": "Strapped himself into a cockpit seat and held Captain Lancaster by the ankles, relieving the exhausted Nigel Ogden until landing.",
      "sources": [
        "https://en.wikipedia.org/wiki/British_Airways_Flight_5390",
        "https://www.abc.net.au/news/2023-01-15/ba5390-pilot-sucked-out-windscreen-the-ultimate-nightmare/101813438",
        "https://www.nzherald.co.nz/travel/image-of-pilot-hanging-out-window-captures-heroic-story-30-years-on/GR2HBBCBUGMOTA7MEYPI7UR54A/",
        "https://www.thevintagenews.com/2020/12/02/captain/"
      ]
    }
  ],
  "Qantas Flight 32": [
    {
      "name": "Richard de Crespigny",
      "role": "Captain",
      "heroId": "de-crespigny",
      "did": "Led the five-pilot crew through dozens of system failures, flew the damaged A380 back to Changi and landed it safely with no injuries.",
      "photo": {
        "src": "images/people/richard-de-crespigny.jpg",
        "credit": "Mosman library · CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Richard_de_Crespigny_at_Mosman_Library_(cropped).jpg"
      },
      "sources": [
        "https://en.wikipedia.org/wiki/Qantas_Flight_32",
        "https://flightsafety.org/qantas-32-crew-recognized-for-valor-with-the-professionalism-award/",
        "https://www.aerosociety.com/news/exclusive-qantas-qf32-flight-from-the-cockpit/",
        "https://flightsafety.org/asw-article/after-shock/"
      ]
    },
    {
      "name": "Matt Hicks",
      "role": "First officer",
      "heroId": null,
      "did": "Worked through the long list of ECAM checklists, about an hour of procedures, while the captain flew the aircraft.",
      "sources": [
        "https://www.aerosociety.com/news/exclusive-qantas-qf32-flight-from-the-cockpit/",
        "https://simpleflying.com/qantas-flight-32-cabin-crew-perspective/",
        "https://pdfs.semanticscholar.org/a4b6/da9a7298077f8375b4995031347c9a54e48d.pdf",
        "https://migflug.com/afterburner/qantas-32-a380-engine-explosion-singapore/"
      ]
    },
    {
      "name": "David Evans",
      "role": "Senior check captain",
      "heroId": null,
      "did": "Helped assess the damage and the landing performance calculations, and made announcements to keep passengers informed.",
      "sources": [
        "https://en.wikipedia.org/wiki/Qantas_Flight_32",
        "https://www.aerosociety.com/news/exclusive-qantas-qf32-flight-from-the-cockpit/",
        "https://simpleflying.com/qantas-flight-32-cabin-crew-perspective/",
        "https://migflug.com/afterburner/qantas-32-a380-engine-explosion-singapore/"
      ]
    },
    {
      "name": "Mark Johnson",
      "role": "Second officer",
      "heroId": null,
      "did": "Went into the cabin to inspect the wing damage and fuel leak, reported back, then briefed cabin crew on the fast, heavy landing.",
      "sources": [
        "https://www.aerosociety.com/news/exclusive-qantas-qf32-flight-from-the-cockpit/",
        "https://simpleflying.com/qantas-flight-32-cabin-crew-perspective/",
        "https://pdfs.semanticscholar.org/a4b6/da9a7298077f8375b4995031347c9a54e48d.pdf"
      ]
    },
    {
      "name": "Michael von Reth",
      "role": "Customer service manager (cabin crew lead)",
      "heroId": null,
      "did": "Ran the cabin during the emergency, kept passengers calm and informed, prepared them for evacuation and oversaw the safe deplaning.",
      "sources": [
        "https://www.aerosociety.com/news/exclusive-qantas-qf32-flight-from-the-cockpit/",
        "https://flightsafety.org/asw-article/after-shock/",
        "https://simpleflying.com/qantas-flight-32-cabin-crew-perspective/",
        "https://flightsafety.org/qantas-32-crew-recognized-for-valor-with-the-professionalism-award/"
      ]
    }
  ],
  "Ural Airlines Flight 178": [
    {
      "name": "Damir Yusupov",
      "role": "Captain",
      "heroId": "yusupov",
      "did": "After a bird strike disabled both engines, he landed the A321 with its gear up in a cornfield near Zhukovsky; all 233 people on board survived.",
      "photo": {
        "src": "images/people/damir-yusupov.jpg",
        "credit": "Пресс-служба Президента Российской Федерации · CC BY 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Damir_Yusupov.jpg"
      },
      "sources": [
        "https://en.wikipedia.org/wiki/Ural_Airlines_Flight_178",
        "https://www.interfax.ru/russia/672987",
        "https://russian.rt.com/russia/article/659500-piloty-a321-bolnitsa-avariya",
        "https://www.yahoo.com/news/russian-pilot-says-hes-no-123558777.html"
      ]
    },
    {
      "name": "Georgy Murzin",
      "role": "First officer",
      "heroId": null,
      "did": "Flew as co-pilot alongside the captain through the bird-strike emergency and the cornfield landing; he was injured and later named a Hero of Russia.",
      "photo": {
        "src": "images/people/georgy-murzin.jpg",
        "credit": "Alexey Druzhinin / Russia's Presidential Press and Informati · CC BY 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Georgiy_Murzin_(cropped).jpg"
      },
      "sources": [
        "https://en.wikipedia.org/wiki/Ural_Airlines_Flight_178",
        "https://www.interfax.ru/russia/672987",
        "https://russian.rt.com/russia/article/659500-piloty-a321-bolnitsa-avariya"
      ]
    },
    {
      "name": "Dmitry Ivlitsky",
      "role": "Senior flight attendant",
      "heroId": null,
      "did": "Led the cabin evacuation, told passengers to leave their bags, and used a loudspeaker to guide them away from the aircraft through the cornfield.",
      "sources": [
        "https://en.wikipedia.org/wiki/Ural_Airlines_Flight_178",
        "https://aif.ru/incidents/bortprovodnik_rasskazal_ob_evakuacii_passazhirov_a321",
        "https://360.ru/news/obschestvo/idem-pravee-na-solntse-vdol-rjadov-kukuruzy-kak-rodilas-krylataja-fraza-s-samoleta-a321/",
        "https://www.interfax.ru/russia/672987"
      ]
    },
    {
      "name": "Nadezhda Vershinina",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Was one of the five flight attendants who evacuated all 226 passengers from the aircraft; she was awarded the Order of Courage.",
      "sources": [
        "https://www.interfax.ru/russia/672987",
        "https://mintrans.gov.ru/press-center/news/9351",
        "https://www.sobaka.ru/city/society/94939",
        "https://www.vesti.ru/article/1321105"
      ]
    },
    {
      "name": "Dmitry Goncharenko",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Was one of the five flight attendants who evacuated all 226 passengers from the aircraft; he was awarded the Order of Courage.",
      "sources": [
        "https://www.interfax.ru/russia/672987",
        "https://mintrans.gov.ru/press-center/news/9351",
        "https://www.sobaka.ru/city/society/94939"
      ]
    },
    {
      "name": "Aliya Slyakaeva",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Was one of the five flight attendants who evacuated all 226 passengers from the aircraft; she was awarded the Order of Courage.",
      "sources": [
        "https://www.interfax.ru/russia/672987",
        "https://mintrans.gov.ru/press-center/news/9351",
        "https://www.sobaka.ru/city/society/94939"
      ]
    },
    {
      "name": "Yana Yagodina",
      "role": "Flight attendant",
      "heroId": null,
      "did": "Was one of the five flight attendants who evacuated all 226 passengers from the aircraft; she was awarded the Order of Courage.",
      "sources": [
        "https://www.interfax.ru/russia/672987",
        "https://mintrans.gov.ru/press-center/news/9351",
        "https://www.sobaka.ru/city/society/94939"
      ]
    }
  ],
  "Sichuan Airlines Flight 8633": [
    {
      "name": "Liu Chuanjian",
      "role": "Captain",
      "heroId": "liu",
      "did": "After the right windshield blew out at cruising altitude, he flew the A319 by hand and landed it safely at Chengdu; all 128 people on board survived.",
      "sources": [
        "https://en.wikipedia.org/wiki/Sichuan_Airlines_Flight_8633",
        "https://mobile.chinadaily.com.cn/html5/2022-11/23/content_018_637d3454ed5071e117b4dcad.htm",
        "https://www.thepaper.cn/newsDetail_forward_7683981",
        "https://cbgc.scol.com.cn/news/82283"
      ]
    },
    {
      "name": "Liang Peng",
      "role": "Second captain",
      "heroId": null,
      "did": "Came into the cockpit, reminded the captain to put on his oxygen mask, read out the decompression procedure, and helped with navigation and air traffic control.",
      "sources": [
        "https://mobile.chinadaily.com.cn/html5/2022-11/23/content_018_637d3454ed5071e117b4dcad.htm",
        "https://www.thepaper.cn/newsDetail_forward_7683981",
        "https://cbgc.scol.com.cn/news/82301"
      ]
    },
    {
      "name": "Xu Ruichen",
      "role": "First officer",
      "heroId": null,
      "did": "Partly pulled out through the broken window and injured, he still set the 7700 emergency code on the transponder and kept it active.",
      "sources": [
        "https://en.wikipedia.org/wiki/Sichuan_Airlines_Flight_8633",
        "https://mobile.chinadaily.com.cn/html5/2022-11/23/content_018_637d3454ed5071e117b4dcad.htm",
        "https://cbgc.scol.com.cn/news/82301"
      ]
    },
    {
      "name": "Bi Nan",
      "role": "Chief purser",
      "heroId": null,
      "did": "Stayed calm, told passengers over the PA to follow the crew's instructions, and directed the flight attendants to reassure passengers during the descent.",
      "sources": [
        "https://mobile.chinadaily.com.cn/html5/2022-11/23/content_018_637d3454ed5071e117b4dcad.htm",
        "https://m.thepaper.cn/baijiahao_12947949",
        "https://cbgc.scol.com.cn/news/80108",
        "https://cbgc.scol.com.cn/news/82301"
      ]
    }
  ],
  "Ethiopian Airlines Flight 961": [
    {
      "name": "Leul Abate",
      "role": "Captain",
      "heroId": "abate",
      "did": "Kept the hijacked Boeing 767 flying until it ran out of fuel, then ditched it in shallow water off the Comoros, where 50 of the 175 people on board survived.",
      "sources": [
        "https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_961",
        "https://mg.co.za/article/1996-11-29-the-pilots-who-kept-their-heads/",
        "https://www.upi.com/Archives/1996/11/24/Pilot-details-hijack-nightmare/1162848811600/",
        "https://flightsafety.org/aviation-awards/fsf-professionalism-award-flight-safety"
      ]
    },
    {
      "name": "Yonas Mekuria",
      "role": "First officer",
      "heroId": null,
      "did": "Was beaten by the hijackers and thrown out of the cockpit, but he came back and helped the captain control the aircraft during the ditching.",
      "sources": [
        "https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_961",
        "https://mg.co.za/article/1996-11-29-the-pilots-who-kept-their-heads/",
        "https://www.upi.com/Archives/1996/11/24/Pilot-details-hijack-nightmare/1162848811600/",
        "https://www.deseret.com/1996/11/25/19279055/airliner-crash-may-have-killed-all-3-hijackers/"
      ]
    },
    {
      "name": "Leslianne Shedd",
      "role": "Passenger",
      "heroId": null,
      "did": "Helped fellow passengers, including an elderly woman, with their life vests and comforted those around her before the ditching; she died in the crash.",
      "sources": [
        "https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_961",
        "https://www.cia.gov/legacy/honoring-heroes/heroes/leslianne-shedd",
        "https://abcnews.com/blogs/headlines/2012/05/cia-identifies-memorializes-fallen-covert-officers",
        "https://www.deseret.com/2012/5/27/20415191/cia-remembers-fallen-covert-operatives/"
      ]
    },
    {
      "name": "Mohamed Amin",
      "role": "Passenger",
      "heroId": null,
      "did": "Confronted the hijackers and urged other passengers to stand up to them during the flight; he died in the ditching.",
      "sources": [
        "https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_961",
        "https://nation.africa/kenya/news/mo-amin-lives-on-in-images-he-spent-a-lifetime-making-4035186",
        "https://thebaron.info/people/memorial-book/mohamed-amin",
        "https://en.wikipedia.org/wiki/Mohamed_Amin",
        "https://thekenyatimes.com/latest-kenya-times-news/today-in-history-journalist-who-covered-tom-mboyas-assassination-dies-in-plane-crash/",
        "https://en.ara.cat/sunday/mo-amin-the-photojournalist-who-forced-the-world-to-look-towards-africa_3_5869642.html"
      ]
    }
  ],
  "flydubai Flight 1073": [
    {
      "name": "Smit Machchhar",
      "role": "Captain",
      "heroId": "machchhar",
      "did": "Though badly wounded, he opened the cockpit door from the inside so passengers and an off-duty pilot could get in.",
      "sources": [
        "https://www.khaleejtimes.com/business/aviation/what-really-happened-flydubai-fz1073-terror-attack",
        "https://www.aljazeera.com/news/2026/10/2/12-minutes-of-madness-how-flydubai-pilot-passengers-saved-plane-midfall",
        "https://www.wionews.com/world/how-a-6-year-old-nina-manes-bathroom-request-helped-avert-disaster-on-flydubai-flight-to-tel-aviv-1791026268249",
        "https://www.cnn.com/2026/09/30/middleeast/flydubai-israel-plane-pilot-hijacking-incident-latam-hnk-intl",
        "https://sundayguardianlive.com/world/flydubai-flight-fz1073-heroes-who-are-the-5-people-who-helped-avert-a-mid-air-disaster-indian-pilot-plumber-banker-businessman-and-dentist-296430/"
      ]
    },
    {
      "name": "Tali Manes",
      "role": "Passenger",
      "heroId": null,
      "did": "Waiting outside the front toilet for her 6-year-old daughter, she heard the struggle in the cockpit and raised the alarm.",
      "sources": [
        "https://www.timesofisrael.com/liveblog_entry/herzog-recommends-four-men-from-flydubai-flight-fz1073-for-presidential-award-for-civilian-heroism/",
        "https://www.cnn.com/2026/09/30/middleeast/flydubai-israel-plane-pilot-hijacking-incident-latam-hnk-intl",
        "https://www.wionews.com/world/how-a-6-year-old-nina-manes-bathroom-request-helped-avert-disaster-on-flydubai-flight-to-tel-aviv-1791026268249",
        "https://www.calcalistech.com/ctechnews/article/zs72882xh",
        "https://www.ynetnews.com/article/bypczq59ze"
      ]
    },
    {
      "name": "Tzvika Manes",
      "role": "Passenger",
      "heroId": null,
      "did": "Rushed from the front row, got into the cockpit and helped overpower the attacker, tying him up with headphone cables.",
      "sources": [
        "https://www.timesofisrael.com/liveblog_entry/herzog-recommends-four-men-from-flydubai-flight-fz1073-for-presidential-award-for-civilian-heroism/",
        "https://www.thedailybeast.com/passenger-reveals-horror-movie-of-midair-flydubai-pilot-stabbing/",
        "https://www.calcalistech.com/ctechnews/article/zs72882xh",
        "https://www.ynetnews.com/article/bypczq59ze",
        "https://www.aljazeera.com/news/2026/10/2/12-minutes-of-madness-how-flydubai-pilot-passengers-saved-plane-midfall"
      ]
    },
    {
      "name": "Yaniv Hayun",
      "role": "Passenger",
      "heroId": null,
      "did": "Got into the cockpit, helped pull the attacker away from the controls, then pulled back on the controls to help level the plane until a pilot took over.",
      "sources": [
        "https://www.timesofisrael.com/liveblog_entry/herzog-recommends-four-men-from-flydubai-flight-fz1073-for-presidential-award-for-civilian-heroism/",
        "https://www.aljazeera.com/news/2026/10/2/12-minutes-of-madness-how-flydubai-pilot-passengers-saved-plane-midfall",
        "https://www.cnn.com/2026/09/30/middleeast/flydubai-israel-plane-pilot-hijacking-incident-latam-hnk-intl",
        "https://sundayguardianlive.com/world/flydubai-flight-fz1073-heroes-who-are-the-5-people-who-helped-avert-a-mid-air-disaster-indian-pilot-plumber-banker-businessman-and-dentist-296430/"
      ]
    },
    {
      "name": "Asaf Rajuan",
      "role": "Passenger",
      "heroId": null,
      "did": "Got into the cockpit and helped overpower the attacker.",
      "sources": [
        "https://www.timesofisrael.com/liveblog_entry/herzog-recommends-four-men-from-flydubai-flight-fz1073-for-presidential-award-for-civilian-heroism/",
        "https://www.aljazeera.com/news/2026/10/2/12-minutes-of-madness-how-flydubai-pilot-passengers-saved-plane-midfall",
        "https://sundayguardianlive.com/world/flydubai-flight-fz1073-heroes-who-are-the-5-people-who-helped-avert-a-mid-air-disaster-indian-pilot-plumber-banker-businessman-and-dentist-296430/",
        "https://en.wikipedia.org/wiki/Flydubai_Flight_1073"
      ]
    },
    {
      "name": "Dr Shota Musayev",
      "role": "Passenger (dentist)",
      "heroId": null,
      "did": "Helped tie up the attacker, then treated the badly wounded captain, stopping his bleeding.",
      "sources": [
        "https://www.cnn.com/2026/09/30/middleeast/flydubai-israel-plane-pilot-hijacking-incident-latam-hnk-intl",
        "https://www.aljazeera.com/news/2026/10/2/12-minutes-of-madness-how-flydubai-pilot-passengers-saved-plane-midfall",
        "https://www.timesofisrael.com/liveblog_entry/herzog-recommends-four-men-from-flydubai-flight-fz1073-for-presidential-award-for-civilian-heroism/",
        "https://sundayguardianlive.com/world/flydubai-flight-fz1073-heroes-who-are-the-5-people-who-helped-avert-a-mid-air-disaster-indian-pilot-plumber-banker-businessman-and-dentist-296430/"
      ]
    },
    {
      "name": "Two off-duty flydubai pilots",
      "role": "Off-duty crew",
      "heroId": null,
      "did": "Travelling as passengers to fly the return leg, they took over the controls and landed the plane safely at Tabuk. They have not been officially named.",
      "sources": [
        "https://www.israelhayom.com/2026/10/04/flydubai-flight-1073-four-pilots-stabbing/",
        "https://www.thenationalnews.com/business/aviation/2026/10/02/flydubai-flight-fz1073-puts-airline-deadheading-in-the-spotlight/",
        "https://www.aljazeera.com/news/2026/10/2/12-minutes-of-madness-how-flydubai-pilot-passengers-saved-plane-midfall",
        "https://www.khaleejtimes.com/business/aviation/what-really-happened-flydubai-fz1073-terror-attack",
        "https://sundayguardianlive.com/world/flydubai-flight-fz1073-heroes-who-are-the-5-people-who-helped-avert-a-mid-air-disaster-indian-pilot-plumber-banker-businessman-and-dentist-296430/"
      ]
    },
    {
      "name": "David Kimotho",
      "role": "Lead flight attendant (purser)",
      "heroId": null,
      "did": "With John Muchina, gave the wounded captain first aid on the cabin floor and kept order, telling passengers to sit down.",
      "sources": [
        "https://www.israelhayom.com/2026/10/05/flydubai-kenyan-flight-attendants-captain-swahili/",
        "https://nation.africa/kenya/news/how-hero-kenyan-cabin-crew-stepped-in-during-flydubai-mid-air-emergency-5618998",
        "https://www.pulse.co.ke/story/flydubai-horror-identities-of-2-kenyan-cabin-crew-who-helped-wounded-pilot-revealed-2026100304361026152",
        "https://newscentraltv.com/kenyan-flydubai-crew-credited-with-rescuing-pilot/"
      ]
    },
    {
      "name": "John Muchina",
      "role": "Cabin crew",
      "heroId": null,
      "did": "Gave the wounded captain first aid alongside Kimotho, checking that he was conscious and helping keep the cabin calm.",
      "sources": [
        "https://www.israelhayom.com/2026/10/05/flydubai-kenyan-flight-attendants-captain-swahili/",
        "https://nation.africa/kenya/news/how-hero-kenyan-cabin-crew-stepped-in-during-flydubai-mid-air-emergency-5618998",
        "https://www.pulse.co.ke/story/flydubai-horror-identities-of-2-kenyan-cabin-crew-who-helped-wounded-pilot-revealed-2026100304361026152",
        "https://newscentraltv.com/kenyan-flydubai-crew-credited-with-rescuing-pilot/"
      ]
    }
  ]
};

if (typeof module !== "undefined") module.exports = HELPERS; // lets scripts/build.mjs read the list
