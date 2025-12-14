"use client";

import { create } from "zustand";

export type TimeStore = {
  // --- base state ---
  now: Date | null;
  timerId: ReturnType<typeof setInterval> | null;
  // --- dates (data) ---
  weddingDay: Date;
  andriiBirthDay: Date;
  iraBirthDay: Date;
  maximBirthDay: Date;
  bublikBirthDay: Date;
  goItTeaching: Date;
  endGoItTeaching: Date;
  evacDate: Date;
  // --- derived ---
  diffFrom: (date: Date) => number | null;
  // --- actions ---
  start: () => void;
  stop: () => void;
};

export const useTimeStore = create<TimeStore>()((set, get) => ({
  now: null, //  дата буде визначатися на клієнті!!!
  timerId: null,

  //  початкова дата для відліку
  weddingDay: new Date("August 26, 2006 10:00:00"),
  andriiBirthDay: new Date("November 21, 1979 08:45:25"),
  iraBirthDay: new Date("October 03, 1981 15:00:32"),
  maximBirthDay: new Date("July 10, 2011 07:45:18"),
  bublikBirthDay: new Date("September 19, 2018 07:12:46"),
  goItTeaching: new Date("January 20, 2025 19:30:00"),
  endGoItTeaching: new Date("November 20, 2025 19:30:00"),
  evacDate: new Date("April 11, 2022 10:00:48"),

  //-----------------------------------------------
  diffFrom: (date) => {
    const now = get().now;
    if (!now) return null;
    return now.getTime() - date.getTime();
  },
  //-----------------------------------------------

  //запускаю таймер
  start: () => {
    if (get().timerId) return;
    set({ now: new Date() });

    const id = setInterval(() => {
      set({ now: new Date() });
    }, 1000);
    set({ timerId: id });
  },

  //зупиняю таймер
  stop: () => {
    const id = get().timerId;
    if (id) {
      clearInterval(id);
      set({ timerId: null });
    }
  },
}));
