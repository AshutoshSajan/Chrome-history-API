console.log("background");

const color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.history.search({ text: "", maxResults: 100 }, (data) => {
  data.forEach((page) => {
    console.log(page.url);
  });
});

// const lastWeek = (() => {
//   const today = new Date();
//   const date = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() - 7
//   );

//   return date;
// })();

// chrome?.history?.search(
//   {
//     text: "", // Return every history item....
//     startTime: lastWeek, // that was accessed less than one week ago.
//     maxResults: 100, // Optionally state a limit
//   },
//   (historyItems) => {
//     // For each history item, get details on all visits.
//     for (const i = 0; i < historyItems.length; ++i) {
//       const url = historyItems[i].url;
//       // do whatever you want with this visited url
//     }
//   }
// );
