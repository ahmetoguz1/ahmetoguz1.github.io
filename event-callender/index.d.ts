export interface CalendarOptions {
  id?: string;
  calendarSize?: CalendarSize;
  layoutModifiers?: LayoutModifier[];
  eventsData?: EventData[];
  theme?: string;
  primaryColor?: string;
  headerColor?: string;
  headerBackgroundColor?: string;
  weekdaysColor?: string;
  weekdayDisplayType?: WeekdayDisplayType;
  monthDisplayType?: MonthDisplayType;
  startWeekday?: StartWeekday;
  fontFamilyHeader?: string;
  fontFamilyWeekdays?: string;
  fontFamilyBody?: string;
  dropShadow?: string;
  border?: string;
  borderRadius?: string;
  disableMonthYearPickers?: boolean;
  disableDayClick?: boolean;
  disableMonthArrowClick? : boolean;
  monthChanged?: (currentDate?: Date, filteredMonthEvents?: EventData[]) => void;
  dateChanged?: (currentDate?: Date, filteredDateEvents?: EventData[]) => void;
}

export interface EventData {
  start: string,
  end: string,
  [key: string]: any,
}

export interface Day {
  day: number,
  selected?: boolean,
}

export type CalendarSize = "small" | "large";

export type LayoutModifier = "month-left-align";

export type MonthDisplayType = "short" | "long";

export type WeekdayDisplayType = "short" | "long-lower" | "long-upper";

export type Weekdays = [string, string, string, string, string, string, string];

export type StartWeekday =  0 | 1 | 2 | 3 | 4 | 5 | 6;

export default class Calendar {
  readonly CAL_NAME = "color-calendar";
  readonly DAYS_TO_DISPLAY = 42;
  id: string;
  calendarSize: CalendarSize;
  layoutModifiers: LayoutModifier[];
  eventsData: EventData[];
  theme: string;
  primaryColor?: string;
  headerColor?: string;
  headerBackgroundColor?: string;
  weekdaysColor?: string;
  weekdayDisplayType: WeekdayDisplayType;
  monthDisplayType: MonthDisplayType;
  startWeekday: StartWeekday;
  fontFamilyHeader?: string;
  fontFamilyWeekdays?: string;
  fontFamilyBody?: string;
  dropShadow?: string;
  border?: string;
  borderRadius?: string;
  disableMonthYearPickers: boolean;
  disableDayClick: boolean;
  disableMonthArrowClick: boolean;
  monthChanged?: (currentDate?: Date, filteredMonthEvents?: EventData[]) => void;
  dateChanged?: (currentDate?: Date, filteredDateEvents?: EventData[]) => void;
  weekdayDisplayTypeOptions: {
      short: Weekdays;
      "long-lower": Weekdays;
      "long-upper": Weekdays;
  };
  weekdays: Weekdays;
  today: Date;
  currentDate: Date;
  pickerType: string;
  eventDayMap: any;
  oldSelectedNode: [HTMLElement, number] | null;
  filteredEventsThisMonth: EventData[];
  daysIn_PrevMonth: Day[];
  daysIn_CurrentMonth: Day[];
  daysIn_NextMonth: Day[];
  firstDay_PrevMonth: StartWeekday;
  firstDay_CurrentMonth: StartWeekday;
  firstDay_NextMonth: StartWeekday;
  numOfDays_PrevMonth: number;
  numOfDays_CurrentMonth: number;
  numOfDays_NextMonth: number;
  yearPickerOffset: number;
  yearPickerOffsetTemporary: number;
  calendar: HTMLElement;
  calendarRoot: HTMLElement;
  calendarHeader: HTMLElement;
  calendarWeekdays: HTMLElement;
  calendarDays: HTMLElement;
  prevButton: HTMLElement;
  nextButton: HTMLElement;
  pickerContainer: HTMLElement;
  pickerMonthContainer: HTMLElement;
  pickerYearContainer: HTMLElement;
  yearPickerChevronLeft: HTMLElement;
  yearPickerChevronRight: HTMLElement;
  monthyearDisplay: HTMLElement;
  monthDisplay: HTMLElement;
  yearDisplay: HTMLElement;
  addEventListeners: () => void;
  configureStylePreferences: () => void;
  togglePicker: (shouldOpen?: boolean) => void;
  handleMonthPickerClick: (e: any) => void;
  updateMonthPickerSelection: (newMonthValue: number) => void;
  removeMonthPickerSelection: () => void;
  handleYearPickerClick: (e: any) => void;
  updateYearPickerSelection: (newYearValue: number, newYearIndex?: number) => void;
  updateYearPickerTodaySelection: () => void;
  removeYearPickerSelection: () => void;
  generatePickerYears: () => void;
  handleYearChevronLeftClick: () => void;
  handleYearChevronRightClick: () => void;
  setMonthDisplayType: (monthDisplayType: MonthDisplayType) => void;
  handleMonthYearDisplayClick: (e: any) => void;
  handlePrevMonthButtonClick: () => void;
  handleNextMonthButtonClick: () => void;
  updateMonthYear: () => void;
  setWeekdayDisplayType: (weekdayDisplayType: WeekdayDisplayType) => void;
  generateWeekdays: () => void;
  setDate: (date: Date) => void;
  getSelectedDate: () => Date;
  clearCalendarDays: () => void;
  updateCalendar: (isMonthChanged?: boolean) => void;
  setOldSelectedNode: () => void;
  selectDayInitial: (setDate?: boolean) => void;
  handleCalendarDayClick: (e: any) => void;
  removeOldDaySelection: () => void;
  updateCurrentDate: (monthOffset: number, newDay?: number, newMonth?: number, newYear?: number) => void;
  generateDays: () => void;
  renderDays: () => void;
  rerenderSelectedDay: (element: HTMLElement, dayNum: number, storeOldSelected?: boolean) => void;
  getEventsData: () => any;
  setEventsData: (events: EventData[]) => number;
  addEventsData: (newEvents?: EventData[]) => number;
  getDateEvents: (date: Date) => EventData[];
  getMonthEvents: () => EventData[];
  constructor(options?: CalendarOptions);
  reset(date: Date): void;
}
