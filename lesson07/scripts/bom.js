const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
let chaptersList = getChapterList() || [];

chaptersList.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersList.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem('myFavList', JSON.stringify(chaptersList))
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavList'));
}
function deleteChapter() {
    chapter = chapter.slice(0, chapter, length - 1);
    chaptersList = chaptersList.filter((item) => item !== chapter);
    setChapterList();
}
