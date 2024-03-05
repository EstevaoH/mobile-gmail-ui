export type EmailDataProps  = (typeof EMAILS)[0]

export const EMAILS = [
  {
    id: "1",
    name: "Jhon Smith",
    avatar: "https://mighty.tools/mockmind-api/content/human/5.jpg",
    marker: "",
    subject: "What is Lorem Ipsum?",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    start: false,
    date: "29 de fev",
  },
  {
    id: "2",
    name: "Clak",
    avatar: "https://mighty.tools/mockmind-api/content/human/57.jpg",
    subject: "Why do we use it?",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    start: true,
    date: "29 de fev",
  },
  {
    id: "3",
    name: "Bruce",
    avatar: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    subject: "Where does it come from?",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    start: false,
    date: "29 de fev",
  },
];
