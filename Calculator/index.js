var inp1 = [];
var inp2 = [];
var Operation = [];
var n1 = 0;
var n2 = 0;
var ans = 0;
var currN = 1;

for (let i = 0; i < document.querySelectorAll(".button").length; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      if (this.classList.contains("num")) {
        ans = 0;
        console.log("number");
        var n = this.id;
        switch (currN) {
          case 1:
            inp1.push(n);
            console.log(inp1);
            n1 = Number(inp1.join(""));
            document.querySelector("#inp").innerHTML = n1;
            break;
          case 2:
            inp2.push(n);
            console.log(inp2);
            n2 = Number(inp2.join(""));
            document.querySelector("#inp").innerHTML = n2;
            break;
        }
      } else if (this.classList.contains("c")) {
        document.querySelector("#inp").innerHTML = "Enter Value:";
        n1 = 0;
        n2 = 0;
        inp1 = [];
        inp2 = [];
        Operation = [];
        currN = 1;
      } else {
        console.log("Operation");
        var n = this.id;
        console.log(n);
        switch (n) {
          case "eq":
            var o = Operation.pop();
            console.log(n1);
            console.log(n2);
            switch (o) {
              case "plus":
                ans = n1 + n2;
                break;
              case "minus":
                ans = n1 - n2;
                break;
              case "x":
                ans = n1 * n2;
                break;
              case "div":
                ans = n1 / n2;
                break;
              default:
                ans = n1;
                break;
            }
            console.log(ans);
            document.querySelector("#inp").innerHTML = ans;
            if (n2 != 0) {
              currN = 2;
              n1 = ans;
              n2 = 0;
              inp2 = [];
            }
            inp2 = [];
            n1 = ans;
            Operation.pop();
          default:
            var temp = Operation.pop();
            if (temp != "eq") {
              var o = Operation.pop();
              switch (o) {
                case "plus":
                  ans = n1 + n2;
                  break;
                case "minus":
                  ans = n1 - n2;
                  break;
                case "x":
                  ans = n1 * n2;
                  break;
                case "div":
                  ans = n1 / n2;
                  break;
                default:
                  ans = n1;
                  break;
              }
              n1=ans;
              ans=0;
              inp2=[];
              n2 = 0;
            }
            Operation.push(n);
            currN = 2;
            console.log(Operation);
            break;
        }
      }
    });
}
