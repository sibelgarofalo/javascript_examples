let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage);
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
console.log(secretMessage);
const index = secretMessage.indexOf('easily')
secretMessage[index] = 'right';
console.log(secretMessage);
secretMessage.shift();
console.log(secretMessage);
secretMessage.unshift('Programming');
console.log(secretMessage);
secretMessage.splice(5, 5, 'know');
console.log(secretMessage);
console.log(secretMessage.join(''));
