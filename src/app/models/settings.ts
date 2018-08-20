import {CalendarType} from '../redux/actions/settings-actions';

export class Settings {
  public boardColorPrefs: Object = {};
  public boardVisibilityPrefs: Object = {};
  public type: CalendarType = CalendarType.Month;
  public includeDoneCards = true;
  public filterForUser: string = null;
  public showMembers = false;
  public weekViewShowHours: boolean | undefined = true;
  public weekDays: number | undefined = 5;
  public businessHoursStart: number | undefined = 9;
  public businessHoursEnd: number | undefined = 18;
  public filterForLabel: string = null;
}
