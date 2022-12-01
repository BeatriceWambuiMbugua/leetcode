const words = "a good     example";
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .reverse()
    .join(" ");
};

console.log(reverseWords(words));
