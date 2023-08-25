//chatbotMsgList Array
let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
//We are getting the chatContainer and userInput ID.
let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

//We call the sendMsgToChatbot function by providing onclick attribute
function sendMsgToChatbot() {
//Declare userMsg as the userInputEl input value
  let userMsg = userInputEl.value;

  // Creating and appending the container element div
  let msgContainerEl = document.createElement("div");
  msgContainerEl.classList.add("msg-to-chatbot-container");
  chatContainerEl.appendChild(msgContainerEl);

  // Creating and appending the span element
  let userMsgEl = document.createElement("span");
  userMsgEl.textContent = userMsg;
  userMsgEl.classList.add("msg-to-chatbot");
  msgContainerEl.appendChild(userMsgEl);

//Empty the userInputEl input value
  userInputEl.value = "";
//Call the getReplyFromChatbot()
  getReplyFromChatbot();
}

//getReplyFromChatbot() function gets called in the sendMsgToChatbot() function
function getReplyFromChatbot() {
//Decalring the array length as noOfChatbotMsgs
  let noOfChatbotMsgs = chatbotMsgList.length;

//We get the random array item from here
  let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];
  //console.log(chatbotMsg); 
   
  // Creating and appending the container element div
  let msgContainerEl = document.createElement("div");
  msgContainerEl.classList.add("msg-from-chatbot-container");
  chatContainerEl.appendChild(msgContainerEl);

  // Creating and appending the span element
  let chatbotMsgEl = document.createElement("span");
  chatbotMsgEl.textContent = chatbotMsg;
  chatbotMsgEl.classList.add("msg-from-chatbot");
  msgContainerEl.appendChild(chatbotMsgEl);
}

/* 
Explanation:

The chatbotMsgList.length returns the length (number of items) of the array.

The Math.random() returns the random float numbers from 0 to less than 1.

The Math.ceil rounds a number up to the next largest integer. For example, Math.ceil(2.5) equals 3.

In the chatbot coding practice, we need to generate a random message from the array every time when the user entered the message.

First, we are generating a random number from 0 to less than 1 . For e.g 0.96
Then we are multiplying the generated random number with the length of the array. For e.g 0.96*5 = 4.8
And then we are rounding up to the next integer using Math.ceil() . For e.g Math.ceil(4.8) = 5
We are subtracting 1 from the result obtained till now. Because In the length of array 5, we can't find the fifth index. For e.g 5-1 = 4
Then the random message generated is the value of the chatbotMsgList[4]  
*/