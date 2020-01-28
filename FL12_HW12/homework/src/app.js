
let mainRoot = document.getElementById('root'), sets = [], doneSets = [];

if (localStorage.getItem('list')) {
    sets = JSON.parse(localStorage.getItem('list'));
}
if(localStorage.getItem('readyList')) {
    doneSets = JSON.parse(localStorage.getItem('readyList'));
}
let pageDocument = getHash('page');
function pageCreate() {
    let mainPage = document.createElement('div');
    mainPage.appendChild(header());
    mainPage.appendChild(listCreation());
    mainRoot.appendChild(mainPage);
}
if(!pageDocument) {
    pageCreate();
}
function header() {
    let header = document.createElement('div');
    let button = document.createElement('button');
    header.classList.add('header');
    button.innerText = 'Add new';
    button.classList.add('header_button', '_button');
    button.addEventListener('click', function(){
        location.hash = '/addSet';
    });
    header.appendChild(button);
    return header;
}
function listCreation() {
    let listO = document.createElement('ol');
    listO.classList.add('list');
    const createItem = function (set, status = null) {
        let childOl = document.createElement('li');
        childOl.classList.add('list_item');
        let textEl = document.createElement('p');
        textEl.innerText = `${set.term}-${set.description}`;
        childOl.appendChild(textEl);
        let buttonEl = document.createElement('div');
        childOl.appendChild(buttonEl);
        let buttonEdit = document.createElement('button');
        buttonEdit.innerText = 'Edit';
        buttonEdit.classList.add('edit_btn', 'btn');
        buttonEdit.addEventListener('click', function (event) {
            event.stopPropagation();
            location.hash = `/modify/: ${set.id}`;
        });
        buttonEl.appendChild(buttonEdit);
        let buttonRemove = document.createElement('button');
        buttonRemove.innerText = 'Remove';
        buttonRemove.classList.add('remove_btn', 'btn');
        buttonRemove.addEventListener('click', function (event) {
            event.stopPropagation();
            sets = sets.filter(item => item.id !== set.id);
            doneSets = doneSets.filter(item => item.id !== set.id);
            saveToStorage();
            goToPage('main');
        });
        buttonEl.appendChild(buttonRemove);
        if(status) {
            childOl.classList.add(status);
        } else {
            childOl.addEventListener('click', function () {
                doneSets.push(set);
                sets = sets.filter(item => item.id !== set.id);
                saveToStorage();
                goToPage('main');
            })
        }
        return childOl;
    };
    sets.forEach( function (set) {
        listO.appendChild(createItem(set));
    });
    doneSets.forEach( function (set) {
        listO.appendChild(createItem(set, 'ready'));
    });

    return listO;
}
function pageEdit() {
    let pageData = getHash('page'), ident = getHash('identeficator');
    let pageEdit = document.createElement('div');
    pageEdit.classList.add('edit_Page');
    let term, termInput = document.createElement('input');
    termInput.placeholder = 'Name';
    if (pageData === 'modify') {
        term = getValue(ident, 'term');
        termInput.value = term;
    }
    termInput.addEventListener('input', function (event) {
        term = event.target.value;
    });
    pageEdit.appendChild(termInput);
    let descr, descrInput = document.createElement('input');
    descrInput.placeholder = 'Description';
    if(pageData === 'modify') {
        descr = getValue(ident, 'description');
        descrInput.value = descr;
    }
    descrInput.addEventListener('input', function (event) {
        descr = event.target.value;
    });
    pageEdit.appendChild(descrInput);
    let buttonSave = document.createElement('button');
    buttonSave.innerText = 'Save Changes';
    buttonSave.classList.add('save_btn', 'btn');
    buttonSave.addEventListener('click', function () {
        if(term && descr) {
            if(pageData === 'addSet') {
                sets.push({identeficator: getNewId(), term: term, description: descr});
            } else if(pageData === 'modify') {
                sets = sets.map(item =>
                    item.identeficator === ident?{identeficator:item.id,term:term,description:descr}:item);
                doneSets = doneSets.map(item =>
                    item.identeficator === ident?{identeficator:item.id,term:term,description:descr}:item);
            }
            saveToStorage();
            location.hash = '';
        }
    });

    pageEdit.appendChild(buttonSave);

    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.classList.add('cancel_btn', 'btn');
    cancelButton.addEventListener('click', function() {
        location.hash = '';
    });

    pageEdit.appendChild(cancelButton);
    mainRoot.appendChild(pageEdit);
}
function getHash(name) {
    let hashData = location.hash.split('/');
    const one = 1, two = 2;
    if(name === 'page') {
        if ( hashData[one]) {
            return hashData[one]
        } else {
            return null;
        }
    } else if(name === 'identeficator') {
        if(hashData[two]) {
            return Number(hashData[two].slice(1));
        } else {
           return null;
        }
    }
}
function getValue(id, name) {
    let result;
    sets.forEach( function (item) {
        if(item.id === id) {
            result = item[name];
        }
    });
    doneSets.forEach(function (item) {
        if(item.id === id) {
            result = item[name];
        }
    });
    return result;
}
function getNewId() {
    let id = 0;
    id = sets.reduce((max, item) => item.id > max ? item.id : max, id);
    id = doneSets.reduce((max, item) => item.id > max ? item.id : max, id);
    return id + 1;
}
function saveToStorage() {
    localStorage.setItem('list', JSON.stringify(sets));
    localStorage.setItem('readyList', JSON.stringify(doneSets));
}
function goToPage(page) {
    for(let i of mainRoot.children) {
        mainRoot.removeChild(i);
    }
    if(page === 'main') {
        pageCreate();
    } else if(page === 'edit_Page') {
        pageEdit();
    }
}
window.addEventListener('hashchange', function () {
    let page = getHash('page');
    if(!page) {
        goToPage('main');
    } else if (page === 'addSet'||page === 'modify') {
        goToPage('edit_Page');
    }
});
