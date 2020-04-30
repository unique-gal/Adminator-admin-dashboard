import { Calendar } from "@fullcalendar/core";
import koLocale from "@fullcalendar/core/locales/ko";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/bootstrap/main.min.css";

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("full-calendar");

  // coach1 : #ffebee
  // coach2 : #f3e5f5
  // coach3 : #e3f2fd
  // coach4 : #e0f7fa
  // coach5 : #e8f5e9
  // coach6 : #f1f8e9
  // coach7 : #fffde7
  // coach8 : #fff3e0
  // coach9 : #efebe9
  // coach10 :#eceff1

  const events = [
    {
      resourceId: "a",
      title: "회원1",
      start: "2020-04-27T09:00:00",
      end: "2020-04-27T10:00:00",
      color: "#ffebee",
      textColor: "#424242",
    },
    {
      resourceId: "a",
      title: "회원2",
      start: "2020-04-27T11:00:00",
      end: "2020-04-27T12:00:00",
      color: "#f3e5f5",
      textColor: "#424242",
    },
    {
      resourceId: "b",
      title: "회원3",
      start: "2020-04-28T09:00:00",
      end: "2020-04-28T10:00:00",
      color: "#e3f2fd",
      textColor: "#424242",
    },
    {
      resourceId: "c",
      title: "회원4",
      start: "2020-04-29T16:00:00",
      end: "2020-04-29T17:00:00",
      color: "#e0f7fa",
      textColor: "#424242",
    },
    {
      resourceId: "d",
      title: "회원5",
      start: "2020-04-28T012:00:00",
      end: "2020-04-28T13:00:00",
      color: "#e8f5e9",
      textColor: "#424242",
    },
    {
      resourceId: "e",
      title: "회원6",
      start: "2020-04-28T18:00:00",
      end: "2020-04-28T19:00:00",
      color: "#f1f8e9",
      textColor: "#424242",
    },
    {
      resourceId: "f",
      title: "회원7",
      start: "2020-04-29T13:00:00",
      end: "2020-04-29T14:00:00",
      color: "#fffde7",
      textColor: "#424242",
    },
    {
      resourceId: "c",
      title: "회원8",
      start: "2020-04-29T13:00:00",
      end: "2020-04-29T14:00:00",
      color: "#fff3e0",
      textColor: "#1b1b1b",
    },
    {
      resourceId: "d",
      title: "회원9",
      start: "2020-04-28T09:00:00",
      end: "2020-04-28T010:00:00",
      color: "#efebe9",
      textColor: "#1b1b1b",
    },
    {
      resourceId: "a",
      title: "회원10",
      start: "2020-04-28T09:00:00",
      end: "2020-04-28T10:00:00",
      color: "#eceff1",
      textColor: "#1b1b1b",
    },
  ];

  // const resources = [
  //   {
  //     id: "a",
  //     title: "코치1",
  //   },
  //   {
  //     id: "b",
  //     title: "코치2",
  //   },
  // ];

  var calendar = new Calendar(calendarEl, {
    plugins: [resourceTimeGridPlugin, bootstrapPlugin],
    events,
    eventRender: function (info) {
      info.el.style.padding = "0";
      info.el.style.fontSize = "1em";
      info.el.style.textAlign = "center";
      info.el.style.fontWeight = "bold";
      info.el.style.verticalAlign = "middle";
    },
    resources: [
      {
        id: "a",
        title: "코치1",
      },
      {
        id: "b",
        title: "코치2",
      },
      {
        id: "c",
        title: "코치3",
      },
      {
        id: "d",
        title: "코치4",
      },
      {
        id: "e",
        title: "코치5",
      },
      {
        id: "f",
        title: "코치6",
      },
    ],
    defaultView: "resourceTimeGridWeek",
    timeZone: "UTC",
    header: {
      left: "prev,next",
      center: "title",
      right: "dayGridMonth,resourceTimeGridWeek,resourceTimeGridDay",
    },
    views: {
      resourceTimeGridWeek: {
        type: "resourceTimeGrid",
        buttonText: "주",
      },
    },
    datesAboveResources: true,
    contentHeight: "auto",
    navLinks: true,
    firstDay: 1,
    hiddenDays: [0],
    allDaySlot: false,
    minTime: "09:00:00",
    maxTime: "23:00:00",
    locale: koLocale,
    themeSystem: "bootstrap",
    displayEventTime: false,

    // themeSystem: "Celulean",
    // nowIndicator: false,
    // themeSystem: "bootstrap4",
  });

  calendar.render();
});

// const changeBackground = () => {
//   console.log("change");
// };
