const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 start");
  f3();
  console.log("f2 running");
  console.log("f2 end");
};
const f3 = () => {
  console.log("f3 start");
  console.log("f3 running");
  console.log("f3 end");
};
function main(){
    console.log("main");
    f1();
    console.log("end main");

}
main();
// java script is synchronous and single threated
// in asynchronous we use event loop to manage the call stack
// asynchronous call using timmer
// 1 set timeout 
// 2 set immetiate
// 3 process.next tick
// set interval
