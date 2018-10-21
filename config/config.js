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
  address: "localhost", // Address to listen on, can be:
                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                        // - another specific IPv4/6 to listen on a specific interface
                        // - "", "0.0.0.0", "::" to listen on any interface
                        // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
                                                         // or add a specific IPv4 of 192.168.1.5 :
                                                         // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                         // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                         // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

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
        maximumEntries: 25,
        calendars: [
          // Tony Data61
          {
            symbol: "cogs",
            url: "https://calendar.google.com/calendar/ical/c2tlud7sg2ir0299546i4m8st0%40group.calendar.google.com/private-be2fdcf334104f6919a2e6b82135fdb2/basic.ics"
          },
          // Tony Morris
          {
            symbol: "calendar",
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
          }
        ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Brisbane",
        locationID: "2174003",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
        appid: "66f3367f71ee24f8016100dfdf124802",
        units: "metric",
        degreeLabel: true,
        updateInterval: 3600000,
        showHumidity: true
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Brisbane",
        locationID: "2174003",  //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "66f3367f71ee24f8016100dfdf124802",
        units: "metric",
        degreeLabel: true,
        updateInterval: 3600000,
        showHumidity: true,
        colored: true,
        tableClass: "large",
        maxNumberOfDays: 5
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
          }
        ],
        showDescription: true,
        showSourceTitle: true,
        showPublishDate: true
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
