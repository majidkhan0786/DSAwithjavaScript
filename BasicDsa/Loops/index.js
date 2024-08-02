const printPattern = (val1) => {
  for (let i = 1; i <= val1; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += `${i} `;
    }
    console.log(line.trim());
  }
};

printPattern(5);
