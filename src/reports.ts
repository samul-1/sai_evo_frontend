import { getTranslatedString as _ } from "./i18n/index";
import {
  EventParticipation,
  EventParticipationSlot,
  Exercise,
  ExerciseChoice,
} from "./models/interfaces";

export interface DataFrequency<T> {
  datum: T;
  frequency: number;
}

export enum ExamStatsTabs {
  OVERALL,
  EXERCISES,
}

// given an array of participations to an event, returns an array of exercises
// where each member has been assigned to a slot in at least one participation
export const getExerciseListFromParticipations = (
  participations: EventParticipation[]
): Exercise[] =>
  participations
    .flatMap((p) => p.slots)
    .map((s) => s.exercise)
    .filter((e, i, a) => a.findIndex((o) => o.id == e.id) === i); // eliminate duplicates

// returns an array of pairs <s, f> where s is a score and f is the
// frequency with which that score appears among the given participations
export const getScoreFrequencyFromParticipations = (
  participations: EventParticipation[]
): DataFrequency<string>[] =>
  (
    participations
      .filter((p) => typeof p.score !== "undefined" && p.score !== null)
      .map((p) => p.score) as string[]
  ).reduce((a, s) => {
    const normalizedDatum = String(isNaN(parseFloat(s)) ? s : parseFloat(s));
    const record = a.find((r) => r.datum == normalizedDatum);
    if (record) {
      record.frequency++;
    } else {
      a.push({ datum: normalizedDatum, frequency: 1 });
    }
    // put numbers first, in ascending order; then non-numeric
    // values in ascending lexicographical order
    return a.sort((a, b) =>
      isNaN(parseFloat(a.datum))
        ? isNaN(parseFloat(b.datum))
          ? a.datum < b.datum
            ? -1
            : 1
          : -1
        : isNaN(parseFloat(b.datum))
        ? isNaN(parseFloat(a.datum))
          ? a.datum < b.datum
            ? -1
            : 1
          : -1
        : parseFloat(a.datum) < parseFloat(b.datum)
        ? -1
        : 1
    );
  }, [] as DataFrequency<string>[]);

export const getChoiceSelectionFrequencyFor = (
  exercise: Exercise,
  slots: EventParticipationSlot[]
): DataFrequency<ExerciseChoice>[] =>
  slots
    .flatMap((s) => s.selected_choices)
    .reduce((a, c) => {
      const choice = (exercise.choices ?? []).find(
        (ch) => ch.id == c
      ) as ExerciseChoice;
      const record = a.find((r) => r.datum.id == c);
      if (record) {
        record.frequency++;
      } else {
        a.push({ datum: choice, frequency: 1 });
      }
      return a.sort((a, b) =>
        String(a.datum.id) < String(b.datum.id) ? -1 : 1
      );
    }, [] as DataFrequency<ExerciseChoice>[]);

export const scoreChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: { display: false },
      title: {
        display: true,
        text: _("event_participation_headings.grade"),
      },
    },
    y: {
      display: true,
      grid: { display: true },
      ticks: { stepSize: 2, beginAtZero: true },
    },
  },
};

export const exerciseChoicesBarChartOptions = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: { display: false },
      ticks: { stepSize: 2, beginAtZero: true },
      title: {
        display: true,
        text: _("event_stats.selections"),
      },
    },
    y: {
      display: true,
      grid: { display: false },
      //ticks: { font: { size: 22 } },
    },
  },
};

export const scoreChartDatasetSettings = {
  backgroundColor: "#303f9fb3",
  maxBarThickness: 100,
};

export const exerciseChoiceDatasetSettings = {
  backgroundColor: "#10B981b3",
  maxBarThickness: 40,
};

// strips html off the given string as chart.js doesn't support html in labels,
// and breaks longer texts into multiple lines
export const makeLabelText = (text: string): string | string[] => {
  const processedText = text.replace(/(<([^>]+)>)/gi, "");

  const MAX_LINE_LENGTH = 70;
  const MAX_TEXT_LENGTH = 2 * MAX_LINE_LENGTH;

  if (processedText.length < MAX_LINE_LENGTH) {
    return processedText;
  }

  // try to break at a point that makes the lines balanced in length
  // and break when encountering a space to avoid warping mid-word
  const breakAt = findNearestSpace(
    processedText,
    Math.min(MAX_LINE_LENGTH, Math.ceil(text.length / 2))
  );

  // returning an array will cause chart.js to break text into multple lines
  return [
    processedText.slice(0, breakAt),
    processedText.slice(breakAt, MAX_TEXT_LENGTH) +
      (processedText.slice(breakAt).length > MAX_TEXT_LENGTH - breakAt
        ? "..."
        : ""),
  ];
};

const findNearestSpace = (text: string, index: number): number => {
  let i = 0;
  while (i >= -Infinity) {
    if (text.charAt(index - i) === " ") {
      return index - i;
    }
    if (text.charAt(index + i) === " ") {
      return index + i;
    }

    i--;
  }
  return -1;
};
