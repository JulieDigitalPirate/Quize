askTheme() {
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  });
  rl.question(
  'Какую тему ты предпочитаешь? \n 1."жопка медведя" \n 2."жопка бобра" \n 3."жопка суслика" \n Введите номер темы: ',
  (name) => {
  switch (name) {
  case "1":
  console.log("жопка медведя");
  break;
  case "2":
  console.log("жопка бобра");
  break;
  case "3":
  console.log("жопка суслика");
  break;
  }
  
  rl.close();
  }
  );
  }
  }
  const theme = new Themes();
  // theme.askTheme();
  theme.readFile("./topics/nighthawk_flashcard_data.txt");
  // theme.createPromisesArray("./topics/nighthawk_flashcard_data.txt");