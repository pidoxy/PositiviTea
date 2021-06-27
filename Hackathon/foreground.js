// foreground code

const first = document.createElement('button');
first.innertext = "INSERT TEXT";
first.id = "first";

const second = document.createElement('button');
second.innerText = "INSERT TEXT";
second.id = "first";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', () => {
    chrome.storage.local.set({ "password": "123"});
});

second.addEventListener('click', () => {
    chrome.runtime.sendMessage({message: 'test'})
    console.log('INSERT TEXT');
});
