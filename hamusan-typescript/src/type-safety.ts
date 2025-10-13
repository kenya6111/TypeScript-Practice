export {};

let isFinished: boolean = true;
// isFinished = 1; //Type 'number' is not assignable to type 'boolean'.ts(2322)

// Javascriptならコンパイルという工程がないし、まず型チェックがないし、実行時のエラーも出ないのでそこも悪い点。
// 型安全こそがtsの最大のメリット。tsによって型安全を確保する
