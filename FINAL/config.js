var config = {
    style: 'mapbox://styles/mayabeak/clgtn94n1001b01ohbkw55ulq',
    accessToken: 'pk.eyJ1IjoibWF5YWJlYWsiLCJhIjoiY2xld2QwaW15MDhtbjN0cXFjOGw2MGdwMiJ9.4gvCm_szNKWaWqdjdN7I8w',
    showMarkers: false,  // do not show markers
    inset: true, // add an inset map
    theme: 'dark', // set theme to 'dark'
    use3dTerrain: true, // enable 3D maps
    auto: false,
    chapters: [
        {
            id: 'chapter1',  // individual id for each chapter
            alignment: 'fully', // show text in center of page
            hidden: false,  // show text
            title: 'August 27-28, 2005 - Katrina Headed for New Orleans', // title of chapter
            description: 'With Hurricane Katrina headed straight for New Orleans and projected to overtop the levees in less than 30 hours, Mayor Ray Nagin ordered a mandatory evacuation (Encyclopaedia Britannica, 2023). While an estimated 1.2 million people evacuated ahead of the storm, not everyone had access to a car to leave, and many stayed (Encyclopaedia Britannica, 2023). The Superdome was listed as a “refuge of last resort.” (Rushton, 2015)', // description
            location: {  // set center lat and lon, zoom, pitch, and bearing
                center: [-90.08448, 30.04309],
                zoom: 9.55,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo', // fly camera in to location
            rotateAnimation: false, // camera stays in one spot
            callback: '',
            onChapterEnter: [  // when chapter starts, turn on New Orleans neighbourhoods layer
                 {
                     layer: 'new-orleans-neighbourhoods-2bng7t',
                     opacity: 1,
                 },
                 {
                    layer: 'flood-0b9k8u',  // when chapter starts, turn off flood layer
                    opacity: 0,
                }
            ],
            onChapterExit: [ // when chapter ends, turn off New Orleans neighbourhoods layer
                 {
                     layer: 'new-orleans-neighbourhoods-2bng7t',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'left',  // move text box to left side
            hidden: false,
            title: 'August 29, 2005 - Landfall & Flooding',
            description: 'The hurricane made landfall on the Gulf Coast around 6:10am (Rushton, 2015). Levees were breached in the Lower Ninth Ward, along the Industrial Canal, and along the 17th Street Canal. Approximately 80% of the city was underwater(Ginis et al., 2020). In this visualization, areas of the city are flooded with 3 feet of water, actual water levels varied, sometimes as high as 10 feet (Plyer, 2016). Many areas of the city had significant wind damage, and lost access to electricity and other essential services (Plyer, 2016). ',
            location: {
                center: [-90.08448, 30.04309],
                zoom: 12,
                pitch: 75,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,  // rotate view of flood 
            callback: '',
            onChapterEnter: [  // show flood layer
                {
                    layer: 'flood-0b9k8u',
                    opacity: 0.5,
                }
           ]
        },
        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Superdome',
            description: '15,000 people arrived at the Superdome before the storm, and conditions soon deteriorated. Early Monday morning, the dome’s roof opened up and the building lost power and started letting water in. The Superdome had no lighting, no air conditioning, and no working sewage system. Conditions continued to deteriorate, with increasing smells, heat, crowds and anxiety. The Superdome was estimated to have housed 30,000 evacuees in the two days following landfall (Select Bipartisan Committee, 2006). <br><br> Hurricane Katrina survivor Reginald Davis, as told by journalist Matt Sedensky (2005): <br><br><i>“He heard the screams of rapes at the Superdome, where the last people were evacuated Saturday — six days after Katrina struck. He walked through feces. When his leg became infected, he says, no one would help.” </i><br><br><a href="https://www.nbcnews.com/id/wbna9192499"> Read the full story here.</a>',
            location: {
                center: [-90.08098, 29.95031],
                zoom: 16.68,
                pitch: 60,
                bearing: -34.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        },
        {
            id: 'chapter4',
            alignment: 'left',
            hidden: false,
            title: 'August 30, 2005 - Ernest E. Morial Convention Center Opens',
            description: 'The Convention Center was never designated as a shelter like the Superdome. People initially went to the Convention Center after the breaches of the levees, but as the floodwaters rose, people left their homes and headed for higher ground. The Convention Center is near the Mississippi River levee, one of the higher elevations in New Orleans. The National Guard estimated that there were 25,000 people there. Conditions in the Convention Center were notably worse than the Superdome, with no electrical power, no lighting, no air conditioning, and no functioning toilets. Unlike the Superdome, the Convention Center had no authorities or security on hand, no weapon screening, no food and no water (Select Bipartisan Committee, 2006).',
            location: {
                center: [-90.06468, 29.93998],
                zoom: 16,
                pitch: 60,
                bearing: -39.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ''
        },
        {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            title: 'Memorial Medical Center',
            description: 'Floodwaters marooned hundreds of patients and staff at the Memorial Medical Center for four days. Power was out and the generators did not support air-conditioning, so temperatures were over 100 degrees (Fink, 2009). Patients could not be evacuated before the backup generators stopped on August 31st. There were 45 deaths - more than any other hospital in the city. <br><br> <i>“Alarm bells clanged as life-support monitors and ventilators switched to brief battery reserves while continuing to force air into the lungs of seven patients. In about a half-hour, the batteries failed and the regular hiss of mechanical breaths ceased.” </i>(Fink, 2009) <br><br> <a href="https://www.nytimes.com/2009/08/30/magazine/30doctors.html">Read the full story here.</a>',
            location: {
                center: [-90.10421, 29.93725],
                zoom: 18,
                pitch: 60,
                bearing: -40.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        },
        {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            title: 'I-10 Cloverleaf',
            description: 'Large numbers of people gathered or were deposited by search and rescue teams atop raised surfaces, such as the I-10 Cloverleaf downtown. The “Cloverleaf” on the interstate was one of the worst locations. The site was being used for medical triage and evacuation, so there was initially some food and water there, at least for the medical patients. However, additional people arrived on their own or by the helicopters or boats that rescued them from the water. The supply of food and water was not sufficient for the crowd, which eventually grew to 6,000-7,000 people who faced sun and 37 degrees Celsius heat (Select Bipartisan Committee, 2006).',
            location: {
                center: [-90.15533, 29.99653],
                zoom: 16.92,
                pitch: 74.00,
                bearing: -16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ''
        },
        {
            id: 'chapter7',
            alignment: 'left',
            hidden: false,
            title: 'Broad Street Overpass',
            description: 'In this excerpt, Hurricane Katrina survivor Andre recounts his experience trying to escape the flooding to journalist Jim Gabour (2015): <br><br><i>“The water was running by my house just below the balcony railings, and I could see this black, oily surface going all around the block, filling streets and yards. People was yelling, banging on the roofs of houses from the inside. They’d climbed up to get away from the water and got themselves stuck in their attics with no way to break out…late the next morning a motorboat full of guys in uniform come along and got us out of there. I still don’t know who they was, but got us out of our house and they took us to the Broad Street overpass, where there was maybe 200 folks already waiting around. Nothing to do, no food, no water, no blankets, but I figured somebody would come directly. They wouldn’t just leave us there, nossir. But they did, they left us. Then they up and forgot us, and that’s when things started to get bad. Really bad.”</i><br><br><a href="https://www.theguardian.com/us-news/2015/aug/27/katrina-survivors-tale-they-up-and-forgot-us">Read the full story here.</a>',
            location: {
                center: [-90.09412, 29.95773],
                zoom: 16.68,
                pitch: 60,
                bearing: -20.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'broad-street-overpass-1g9i3e', // turn on overpass layer
                    opacity: 1,
                },
                {
                    layer: 'flood-0b9k8u', // turn on flood layer when scrolling back up in reverse
                    opacity: 0.5,
                }
           ],
           onChapterExit: [
            {
                layer: 'broad-street-overpass-1g9i3e', // turn off overpass layer
                opacity: 0
            }
       ]
        },
        {
            id: 'chapter8',
            alignment: 'fully',
            hidden: false,
            title: 'August 31, 2005 - Buses Leave New Orleans',
            description: 'Buses began evacuating people from the Superdome, most headed for the Houston Astrodome. 700 buses were requested by the Louisiana National Guard, but only 100 arrived (Gheytanchi et al., 2007). While some people at the Superdome were able to take these buses, others who did not go to the Superdome had to find other ways to get out of the city, such as 20-year old Jabbar Gibson, who evacuated more than 70 of his neighbours from the Fischer Projects to safety at the Houston Astrodome, by stealing a school bus that was sitting in a lot and driving it despite never having driven before (Daley, 2022).<br><br><i>“Even with little space to spare on the bus, Gibson stopped several times along Highway 90 and picked up people stranded by the side of the road. ‘I just couldn’t leave them behind,’ he said. Many of the passengers were in emotional and mental distress from the previous days. Others were sick or disabled and in need of medical attention. At least a couple were pregnant.”</i>(Daley, 2022)<br><br><a href="https://teamrubiconusa.org/blog/a-legacy-of-survival-and-selflessness/">Read the full story here.</a>',
            location: {
                center: [
                    -92.63714719707464,
                    30.186892606094858
                  ],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gibson-route-fixed-5buc21', // turn on route layer
                    opacity: 1,
                },
                {
                    layer: 'flood-0b9k8u', // turn off flood layer because we are zoomed out
                    opacity: 0,
                }
           ],
           onChapterExit: [
            {
                layer: 'gibson-route-fixed-5buc21', // turn off route layer
                opacity: 0
            }
       ]
        },
        {
            id: 'chapter9',
            alignment: 'left',
            hidden: false,
            title: 'Houston Astrodome',
            description: '12 000 New Orleans refugees slept on crowded cots on the concrete floor of the Houston Astrodome (Foot, 2005).<br><br><i>“Newborn babies, the very old and the sick are packed into the stadium with others of all ages. Most are wearing the same stinking clothes and carrying the few meagre possessions they left Louisiana with on Thursday…There were tears all day at one end of the Astrodome, where a giant bulletin board, erected above what was once home plate, carries notes posted by thousands of refugees seeking lost loved ones. ‘Cherie Jude is in Section 248,’ says one. ‘Linda Allen Hunter -- searching for my daughter,’ says another. All day the Astrodome public address system played a running list of names of the missing.”</i>(Foot, 2005).<br><br><a href="https://www.proquest.com/docview/330455325?accountid=14656&pq-origsite=summon">Read the full story here.</a><br><br>When the Astrodome was full, some were also turned away to go to other stadiums in Dallas, Huntsville, and San Antonio (Foot, 2005).',
            location: {
                center: [-95.40752, 29.68438],
                zoom: 15.86,
                pitch: 60,
                bearing: -28.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        }
    ]
};
