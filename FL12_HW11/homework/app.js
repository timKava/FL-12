const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function addNode(structure, node) {
  let ulElement = document.createElement('ul');

  for (let item of structure) {
    const newChild = document.createElement('li');
    const textElement = document.createElement('div');
    const imageElement = document.createElement('i');
    imageElement.classList.add('material-icons');
    const spanElement = document.createElement('span');
    textElement.appendChild(imageElement);
    textElement.appendChild(spanElement);
    spanElement.innerHTML = item.title;
    ulElement.appendChild(newChild);
    newChild.appendChild(textElement);
    if (item.folder) {
      textElement.classList.toggle('folder');
      imageElement.innerText = 'folder';
      textElement.addEventListener('click', function() {
        if (imageElement.innerText === 'folder'){
          imageElement.innerText = 'folder_open';
        } else {
          imageElement.innerText = 'folder';
        }
        newChild.querySelector('.closed').classList.toggle('open');
      });
      if (item.children) {
        addNode(item.children, newChild);
      } else {
        let empty_folder = document.createElement('div');
        empty_folder.classList.add('empty_folder', 'closed');
        empty_folder.innerText = 'Folder is empty';
        newChild.appendChild(empty_folder);
      }
    } else {
      textElement.classList.toggle('file');
      imageElement.innerText = 'insert_drive_file';
      imageElement.classList.add('file_image');
    }
  }
  node.appendChild(ulElement);
  if (ulElement.parentNode !== rootNode) {
    ulElement.classList.toggle('closed');
  }
}

addNode(structure,rootNode);
