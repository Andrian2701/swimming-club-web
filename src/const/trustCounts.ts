interface TrustCounts {
  title: string;
  maxVal: number;
  time: number;
  className: string;
  char?: string;
}

export const TRUST_COUNTS: TrustCounts[] = [
  {
    title: "Experienced Coaches",
    maxVal: 29,
    time: 150,
    className: "count1",
  },
  {
    title: "Gold Medals Won",
    maxVal: 469,
    time: 7,
    className: "count2",
  },
  {
    title: "Positive Feedbacks",
    maxVal: 98,
    time: 40,
    className: "count3",
    char: "%",
  },
];
