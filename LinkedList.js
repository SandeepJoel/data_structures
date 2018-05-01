// operations

function singlyLinkedList() {
  this.head = null;
};

function node(nodeValue) {
  this.next = null;
  this.val = nodeValue;
}

singlyLinkedList.prototype.display =  function() {
  let current = this.head;
  let listString = '';

  // If linked list is empty
  if (!current) {
    console.log(`List is Empty`);
    return;
  }
  while(current) {
     listString += `${current.val} ---> `;
    current = current.next;
  }
  console.log(`${listString} NULL`);
};

singlyLinkedList.prototype.push = function(nodeValue) {
  var newNode = new node(nodeValue);

  // if head is null
  if(!this.head) {
    this.head = node;
    console.log('Setting head');
    return
  }

  // if head is not null
  if(this.head) {
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

// singlyLinkedList.prototype.reverse = funnction(nodeValue) {

// }

var sl = new singlyLinkedList();
sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);
sl.display();

