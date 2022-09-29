var topics = ['HTML', 'CSS', 'GIT', 'JavaScript'];
var randomtopics = topics[Math.random() * topics.lenfth];
function listTopic() {{}
for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}
}

function selectTopic() {
if (topics === 'HTML') {
 console.log("Let's study HTML!");
} else if (randomtopics === 'CSS') {
 console.log("Let's study CSS!");
} else if (randomtopics === 'Git') {
 console.log("Let's study Git!");
} else if (randomtopics === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
}
console.log('Here are the topics we learned through Prework:');
listTopic()
console.log('Which topics we study first?');
selectTopic()