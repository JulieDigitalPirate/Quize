readFile(path) {
    const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    // static quest = 'прпр';
    let arr = [];
    const read = fs
    .readFile(path, "utf-8")
    .then((res) => (arr = res.split("\n")))
    .then((result) => {
    await rl2.question(${result[0]}, (answ) => {
    if (answ.toLowerCase() === result[1]) {
    console.log("\u{F144D}true!!");
    }
    return result
    // rl2.close();
    });
    })
    .then((resul) => {
    console.log(resul);
    rl2.question(${resul[2]}, (answ) => {
    if (answ.toLowerCase() === resul[3]) {
    console.log("\u{F144D}true!!");
    }
    
    // rl2.close();
    });
    });
    }
    