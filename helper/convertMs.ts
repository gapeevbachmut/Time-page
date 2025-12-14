type TimeParts = {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function convertMs(ms: number): TimeParts {
  const absMs = Math.abs(ms);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  return {
    years: Math.floor(absMs / year),
    days: Math.floor((absMs % year) / day),
    hours: Math.floor((absMs % day) / hour),
    minutes: Math.floor((absMs % hour) / minute),
    seconds: Math.floor((absMs % minute) / second),
  };
}
