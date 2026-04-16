import { calendarAnayear } from "./calendar/CalendarAnayear";
Hooks.once("init", () => {
  console.log("Anayear Calendar | Init");

  if (game?.system?.id !== "dnd5e") return;

  CONFIG.DND5E.calendars = {
    ...CONFIG.DND5E.calendars,
    [calendarAnayear.id]: calendarAnayear
  };

  console.log("Registered calendar:", calendarAnayear);
});