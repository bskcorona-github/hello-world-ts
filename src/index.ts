// Hello World TypeScript Project
function greetUser(name: string = "World"): string {
  return `Hello, ${name}!`;
}

function displayWelcomeMessage(): void {
  const message = greetUser();
  console.log(message);

  // 現在時刻も表示
  const currentTime = new Date().toLocaleString();
  console.log(`Current time: ${currentTime}`);
}

// メイン実行
if (require.main === module) {
  displayWelcomeMessage();

  // コマンドライン引数がある場合はそれを使用
  const args = process.argv.slice(2);
  if (args.length > 0) {
    console.log(greetUser(args[0]));
  }
}

export { greetUser, displayWelcomeMessage };