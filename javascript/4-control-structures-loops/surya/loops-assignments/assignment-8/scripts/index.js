const myName = 'SURYA';

const patterns = {
  'S': [
    "S S S S",
    "S      ",
    "S S S S",
    "      S",
    "S S S S"
  ],
  'U': [
    "U     U",
    "U     U",
    "U     U",
    "U     U",
    "U U U U"
  ],
  'R': [
    "R R R",
    "R   R",
    "R R R",
    "R R  ",
    "R   R"
  ],
  'Y': [
    "Y     Y",
    "  Y Y  ",
    "   Y   ",
    "   Y   ",
    "   Y   "
  ],
  'A': [
    "  A  ",
    " A A ",
    "A   A",
    "A A A",
    "A   A"
  ]
};

for (let row = 0; row < 5; row++) {
    let line = "";
    
    for (const char of myName) {
        line += patterns[char][row] + "   "; 
    }
    console.log(line);
}