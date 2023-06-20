        // // anonyomus function listener
        // document.querySelector("button").addEventListener("click", function () {
        //     alert("clicked");
        // });



        // // function as parameter (higher order functions)
        // function add(num1, num2) {
        //     return num1 + num2;
        // }
        // function sub(num1, num2) {
        //     return num1 - num2;
        // }
        // function multiply(num1, num2) {
        //     return num1 * num2;
        // }
        // function divide(num1, num2) {
        //     return num1 / num2;
        // }
        // function calculator(num1, num2, operator) {
        //     return operator(num1, num2);
        // }



        // // objects
        // var maid1 = {
        //     name: "wednesday",
        //     age: 19,
        //     languages: ["english", "french"]
        // }
        // console.log(maid.name);

        // // creating object using constructer function
        // function Maid(name, age, languages) {
        //     this.name = name;
        //     this.age = age;
        //     this.languages = languages;
        // }
        // var maid2 = new Maid("Jenna", 20, ["spanish"]);
        // console.log(maid2.name);

        // // function inside object
        // var bellBoy1 = {
        //     name: "james",
        //     age: 23,
        //     permit: true,
        //     moveSuiteCase: function(){
        //         alert("may i take your suitcase");
        //     }
        // }
        // bellBoy1.moveSuiteCase();

        // // function inside object: constructer function
        // function BellBoy(name, age, permit){
        //     this.name = name;
        //     this.age = age;
        //     this.permit = permit;
        //     this.moveSuitCase = function(){
        //         alert("may i take your suitcase");
        //     }
        // }
        // var bellBoy2 = new BellBoy("john", 32, true);



        // // callback function
        // function anotherAddEventListener(typeOfEvent, callback){
        //     var eventThatHappened = {
        //         eventType: "keydown",
        //         key: "p",
        //         durationOfKeyDown: 2
        //     }
        //     if (eventThatHappened === typeOfEvent){
        //         callback(eventThatHappened);
        //     }
        // }
        // anotherAddEventListener("keydown", function(event){
        //     console.log(event);
        // })
