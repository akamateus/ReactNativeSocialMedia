import mongoose from "mongoose";

// ⬇️Mock data for tests - users ⬇️
const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Mateus",
    lastName: "Oliveira",
    email: "matmat@gmail.com",
    password: "mateus123",
    picturePath: "p11.jpeg",
    friends: [],
    location: "Berlin, DE",
    occupation: "Half-Stack Web Dev",
    viewedProfile: 2469,
    impressions: 1111,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Alexander",
    lastName: "Röhr",
    email: "alex123@gmail.com",
    password: "alex123",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Dubai,AE",
    occupation: "Full-Stack WebDev",
    viewedProfile: 12355,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Nikola",
    lastName: "Nikola",
    email: "nikola@gmail.com",
    password: "nicola123",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Belgrad,RS",
    occupation: "Software developer",
    viewedProfile: 666,
    impressions: 8000,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Renato",
    lastName: "Marinho",
    email: "renatinho@gmail.com",
    password: "renato123",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Fortaleza,CE",
    occupation: "Desenvolvedor Front-end",
    viewedProfile: 1223,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Abiola",
    lastName: "Oyebanjo",
    email: "abiola@gmail.com",
    password: "abiola123",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Ogun, NG",
    occupation: "Web dev & PHD",
    viewedProfile: 97865,
    impressions: 6859,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Roberta",
    lastName: "Grasso",
    email: "roberta@gmail.com",
    password: "roberta123",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Napoli, IT",
    occupation: "Marketing & Full Stack Web Dev Student",
    viewedProfile: 2232,
    impressions: 2242,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Swetha",
    lastName: "Keerthipati",
    email: "swetha@gmail.com",
    password: "swetha123",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Tirupati, IN",
    occupation: "Aspiring Full Stack Web Developer ",
    viewedProfile: 2231,
    impressions: 47473,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Saba",
    lastName: "Rahrotaban",
    email: "saba@gmail.com",
    password: "saba123",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Berlin, DE",
    occupation: "Web Dev",
    viewedProfile: 59796,
    impressions: 66785,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

// ⬇️Mock data for tests - posts ⬇️

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Alexander",
    lastName: "Röhr",
    location: "Dubai,AE",
    description: "Watched Barbie, 6/10 💗🫦",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Barbie Premiere 💖",
      "Slay all day 💫",
      "where's the chess game?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Renato",
    lastName: "Marinho",
    location: "Fortaleza,CE",
    description: "It's time to play League Of Legends 🎮🕹️",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "No entiendo nada",
      "- motivational quote - ",
      "He's a hacker, wachout 👊🏽",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Abiola",
    lastName: "Oyebanjo",
    location: "Ogun, NG",
    description: "I use data and technology for social change.",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "I want to be him when I grow up 👊🏽",
      "Good talk, when will you do it again?🤔",
      "You are very inspiring.",
      "Slaaaaay",
      "I have no ideas for comments anymore 🫥",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Roberta",
    lastName: "Grasso",
    location: "Napoli, IT",
    description:
      "I was just having a beer after stressing myself out trying to figure out how to pass Props, did I mention I hate pros? Yes, I hate props✨",
    picturePath: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Team #HateProps",
      "Whole Celery hate Props as well 🥱",
      "I bought pasta at Rewe, want to try it?",
      "Karaoke tonight?🧑🏽‍🎤",
      "Fetcher was here",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Swetha",
    lastName: "Keerthipati",
    location: "Tirupati, IN",
    description:
      "I started drawing 1 week ago, look at the results. Did you like it?",
    picturePath: "post5.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "WOW 😲",
      "It's amazing!!!!",
      "pleeeeeaaaase teach me",
      "I want to buy a piece, how much does it cost? 🤔",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Saba",
    lastName: "Rahrotaban",
    location: "Berlin, DE",
    description:
      "What a beautiful and sunny day, what should I do today? #Thinking",
    picturePath: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Go code",
      "Finish the final project 👨🏽‍💻",
      "Sleep 🥱",
      "A nice park 🌵",
    ],
  },
];
