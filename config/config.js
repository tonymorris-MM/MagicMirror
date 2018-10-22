/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "0.0.0.0", // Address to listen on, can be:
                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                        // - another specific IPv4/6 to listen on a specific interface
                        // - "", "0.0.0.0", "::" to listen on any interface
                        // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: [], // Set [] to allow all IP addresses
                                                         // or add a specific IPv4 of 192.168.1.5 :
                                                         // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                         // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                         // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    {
      module: 'MMM-BackgroundSlideshow',
      position: 'middle_center',
      config: {
        imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/245709.jpg', 'MMM-BackgroundSlideshow/exampleImages/245742.jpg'],
        transitionImages: true,
        randomizeImageOrder: true
      }
    },
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "middle_center",
      config : {
        dateFormat: "dddd, DD MMMM YYYY",
        displayType: "both",
        analogSize: "380px",
        analogFace: "face-010",
        analogPlacement: "left",
        secondsColor: "#888888",
        timezone: "Australia/Brisbane"
      }
    },
    {
      module: "calendar",
      header: "Calendars",
      position: "bottom_right",
      config: {
        maximumEntries: 20,
        fade: false,
        calendars: [
          // Tony Data61
          {
            symbol: "cogs",
            url: "https://calendar.google.com/calendar/ical/c2tlud7sg2ir0299546i4m8st0%40group.calendar.google.com/private-be2fdcf334104f6919a2e6b82135fdb2/basic.ics"
          },
          // Tony Morris
          {
            symbol: "fighter-jet",
            url: "https://calendar.google.com/calendar/ical/tonymorris%40gmail.com/private-6ad50d1b658fb70615cf01f3fd02b6ce/basic.ics"
          },
          // Amanda Ward
          {
            symbol: "heart",
            url: "https://calendar.google.com/calendar/ical/amandaward1980%40gmail.com/private-8fdbff4171e49daf538991b3f1c621d0/basic.ics"

          },
          // The Gap Chess Club
          {
            symbol: "chess-rook",
            url: "https://calendar.google.com/calendar/ical/5ukd8ja9eel7f8kih1ta4ubvv0%40group.calendar.google.com/private-6d4aa5f446d5113b34790328901d25ff/basic.ics"
          },
          // Aviation Australia
          {
            symbol: "plane",
            url: "https://calendar.google.com/calendar/ical/o8gfo4m0jcp3ja4h24guhbsod4%40group.calendar.google.com/private-d54037478e509637713b7e2ee4a704a0/basic.ics"
          },

        ]
      }
    },
    {
      module: "calendar",
      header: "Dinner",
      position: "top_left",
      config: {
        maximumEntries: 8,
        calendars: [
          // Dinner
          {
            symbol: "bell",
            url: "https://calendar.google.com/calendar/ical/eavup2gqcdgeutlrc2ejgp5sfo%40group.calendar.google.com/private-93799c2500618f9dcd7d293da2d74763/basic.ics"
          },
        ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Redbank Plains",
        locationID: "7932670",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
        appid: "66f3367f71ee24f8016100dfdf124802",
        units: "metric",
        degreeLabel: true,
        updateInterval: 360000,
        showHumidity: true,
        showWindDirection: true,
        showWindDirectionAsArrow: true,
        showWindDirectionCardinality: true,
        showWindspeedUnit: true,
        useKnotswind: true,
        useKMPHwind: false,
        useBeaufort: false
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Redbank Plains",
        locationID: "7932670",  //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "66f3367f71ee24f8016100dfdf124802",
        units: "metric",
        degreeLabel: true,
        updateInterval: 3600000,
        showHumidity: true,
        colored: true,
        tableClass: "medium",
        maxNumberOfDays: 6,
        showRainAmount: true
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "SBS World",
            url: "http://www.sbs.com.au/news/topic/world/feed"
          },
          {
            title: "ABC",
            url: "https://www.abc.net.au/local/rss/all.xml"
          },
          {
            title: "BOM Queensland Warnings (land)",
            url: "http://www.bom.gov.au/fwo/IDZ00063.warnings_land_qld.xml"
          },
          {
            title: "BOM Climate",
            url: "http://www.bom.gov.au/climate/rss/"
          },
          {
            title: "Al Jazeera",
            url: "https://www.aljazeera.com/xml/rss/all.xml"
          }
        ],
        showDescription: true,
        showSourceTitle: true,
        showPublishDate: true
      }
    },
    {
      module: "MMM-PilotWX",
      disabled: false,
      position: "bottom_left",         // for mode: "Static",  bottom_bar for mode: "Rotating",
      config: {
        ICAO: "YBBN,YAMB,YBCG,YBOK,YBNA,YSTW", // list of INTL ICAO's
        colorCode: "Standard", // Standard or Alternative
        mode: "Static",           // Static (List) or Rotating (one by one)
        sym: "/",                 // @ or / (Separator for Wind speed and direction)
        tempUnits: "C",      // C or F (F converted from C)
        measure: "KM",            // SM or KM (KM converted from SM data)
        time: "Local",            // Zulu or Local (observation time)
        maxWidth: "100%",         // 100% for mode: Rotating, approx 300px for mode: Static
        useAltHeader: true,   // Use alternative header
        useHeader: true,
        header: "METAR",
      }
    },
    {
      module: "MMM-lichess-daily",
      disabled: false,
      position: "top_left",
      config: {
        theme: "blue",
        bg: "dark",
        width: "246px",
        height: "290px",
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
