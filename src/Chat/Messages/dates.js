import moment from "moment";
import 'moment/locale/pl';

export const getDate = unixDate => {
  moment.locale('pl');
  const date = moment(unixDate);
  const now = moment();
  if (date.dayOfYear() === now.dayOfYear()) {
    return date.format("HH:mm");
  }
  return date.format('LLL');
};