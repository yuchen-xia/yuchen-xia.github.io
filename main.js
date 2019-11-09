// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");//getElementsByTagName() 方法可返回带有指定标签名的对象的集合
var i;//var全局
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");//创建span元素和txt节点
  var txt = document.createTextNode("\u00D7");
  span.className = "close";//用来删除
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";//隐藏
  }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener
(
  'click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false
);


// Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li");//标签
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("输入不能为空");
  } 
  else
  {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}