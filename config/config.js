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
  address: "0.0.0.0",
  port: 8080,
  ipWhitelist: [],
  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
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
        analogSize: "300px",
        analogFace: "face-010",
        analogPlacement: "left",
        secondsColor: "#888888",
        timezone: "Australia/Brisbane"
      }
    },
    {
      module: "worldclock",
      position: "top_left", 
      config: {
        timeFormat: "HH:mm", //defined in moment.js
        style: "top", //predefined 4 styles; 'top', 'left','right','bottom'
        clocks: [
          {
            title: "Bangalore",
            timezone: "Asia/Kolkata",
            flag: "in"
          },
          {
            title: "Kuala Lumpur",
            timezone: "Asia/Kuala_Lumpur",
            flag: "my"
          },
          {
            title: "Colorado",
            timezone: "US/Mountain",
            flag: "us"
          },
        ]
      }
    },
    {
      module: "calendar",
      header: "Calendars",
      position: "bottom_right",
      config: {
        maximumEntries: 20,
        fade: false,
        dateFormat: "DD MMM",
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
          // AirServices Document Amendment
          {
            symbol: "plane",
            url: "https://raw.githubusercontent.com/aviation-tmorris/calendar/master/airservices-document-amendment.ics"
          },
          // BFPG
          {
            symbol: "bandcamp",
            url: "https://www.meetup.com/Brisbane-Functional-Programming-Group/events/ical/"
          },
          // Joshua Uni
          {
            symbol: "university",
            url: "https://calendar.google.com/calendar/embed?src=4gnaln8tts00j7dv3g5pf0bulo%40group.calendar.google.com&ctz=Australia%2FBrisbane"
          },
        ]
      }
    },
    {
      module: "calendar",
      header: "Dinner & Jobs",
      position: "top_left",
      config: {
        maximumEntries: 8,
        dateFormat: "DD MMM",
        calendars: [
          // Dinner
          {
            symbol: "bell",
            url: "https://calendar.google.com/calendar/ical/eavup2gqcdgeutlrc2ejgp5sfo%40group.calendar.google.com/private-93799c2500618f9dcd7d293da2d74763/basic.ics",
          },
          {
            symbol: "cogs",
            url: "https://calendar.google.com/calendar/ical/q4ptemmluobdl6i1p5mc1vpbec%40group.calendar.google.com/private-989b90076b258e947ceae3e8453ba0a7/basic.ics",
          },
        ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Redbank Plains",
        locationID: "7932670",  // https://web.archive.org/web/20180302040350/https://openweathermap.org/help/city_list.txt
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
        useBeaufort: false,
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Redbank Plains",
        locationID: "7932670",  // https://web.archive.org/web/20180302040350/https://openweathermap.org/help/city_list.txt
        appid: "66f3367f71ee24f8016100dfdf124802",
        units: "metric",
        degreeLabel: true,
        updateInterval: 3600000,
        showHumidity: true,
        colored: true,
        tableClass: "medium",
        maxNumberOfDays: 6,
        showRainAmount: true,
      }
    },
    {
      module: "newsfeed",
      position: "top_bar",
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
            title: "Al Jazeera",
            url: "https://www.aljazeera.com/xml/rss/all.xml"
          },
          {
            title: "This day in history",
            url: "http://feeds.feedburner.com/day/MNbM?format=xml"
          }
        ],
        showDescription: false,
        showSourceTitle: true,
        showPublishDate: true,
        wrapTitle: false,
        wrapDescription: false,
      }
    },
    {
      module: 'MMM-moonphases.co.uk',
      position: 'top_center',        // this can be any of the regions
      config: {
      }
    },
    {
      module: "MMM-PilotWX",
      disabled: false,
      position: "bottom_left",
      config: {
        ICAO: "YBBN,YAMB,YBCG,YBOK,YBNA,YSTW",
        colorCode: "Standard",
        mode: "Static",
        sym: "/",
        tempUnits: "C",
        measure: "KM",
        time: "Local",
        maxWidth: "100%",
        useAltHeader: true,
        useHeader: true,
        header: "METAR",
      }
    },
    {
      module: "MMM-lichess-daily",
      disabled: false,
      position: "top_left",
      config: {
        theme: "blue3",
        bg: "dark",
        width: "246px",
        height: "290px",
      }
    },
    {
      module: 'MMM-Dad-Jokes',
      position: 'bottom_bar',
      config: {
        updateInterval: 15000,
      }
    },
    {
      module: 'MMM-Parcel',
      position: 'bottom_left',
      header: 'Parcels',
      config: {
        apiKey: 'c7fd14c3-8f25-429a-aaf5-0ebead79a1c0',
        maxNumber: 10,
        showCourier: true,
        autoHide: false,
        isSorted: true,
        compactness: 1, // 0 = elaborate, 1 = compact display, 2 = very compact, one-liner per shipment, -1 = automatic
        hideExpired: false,
        hideDelivered: 2, // Hide delivered parcels after n days. 
        updateInterval: 600000,
        parcelStatusText: ["Exception", "Failed Attempt","In Delivery", "In Transit", 
                           "Info Received", "Pending", "Delivered", "Expired"], // This is the default. Enter your own language text
        parcelIconColor: ["red", "red", "green", "green", "cornflowerblue", "cornflowerblue", "grey", "grey"], // This is the default. Change for other icon colors
        onlyDaysFormat: {
          lastDay : '[Yesterday]',
          sameDay : '[Today]',
          nextDay : '[Tomorrow]',
          lastWeek : '[Last] dddd',
          nextWeek : 'dddd',
          sameElse : 'L'
        },
        expectedDeliveryText: 'Delivery Expected: ',
        noParcelText: 'No Shipment Data',
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
