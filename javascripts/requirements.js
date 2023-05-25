var arr = [];

var arr_size = document.getElementById("arr_size");
arr_size.addEventListener("input", Makedivs);
var speed = document.getElementById("speed");
var new_array = document.getElementById("new_array");
new_array.addEventListener("click", Makedivs);
var n = arr_size.value;
function Makedivs() {
  n = arr_size.value;
  arr = [];
  document.getElementById("maincontainer").innerHTML = "";
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 400) + 1);
  }
  var mainContainer = document.getElementById("maincontainer");
  for (let i = 0; i < n; i++) {
    let ele = document.createElement("div");
    ele.classList.add("bars");
    ele.setAttribute("id", `${i}`);
    ele.style.height = `${arr[i]}px`;
    mainContainer.appendChild(ele);
  }
}
Makedivs();
function disableButton(){
  for(let i=0;i<btns.length;i++){
    if(btns[i].disabled==false){
      btns[i].disabled=true;
      btns[i].style.opacity=0.6;
    }
  }
}
function undisableButton(){
  for(let i=0;i<btns.length;i++){
    if(btns[i].disabled==true){
      btns[i].disabled=false;
      btns[i].style.opacity=1;
    }
  }
}





function Bubble() {
  function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
  }
  function resolveAfter2Seconds(sp) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, sp);
    });
  }

  async function bubbleSort(myCallback) {
    console.log("cli");
    var bars = Array.from(document.getElementsByClassName("bars"));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          bars[j].style.background = "red";
          bars[j + 1].style.background = "red";
          let ele1 = document.getElementById(`${j}`);
          let ele2 = document.getElementById(`${j + 1}`);
          let sp = speed.value;
          const result = await resolveAfter2Seconds(sp);
          swap(ele1, ele2);

          // swapping logic
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          //
          bars[j].style.background = "yellowgreen";
          bars[j + 1].style.background = "yellowgreen";
        }
      }
      bars[n - i - 1].style.background = "red";
    }
    myCallback()
  }

  bubbleSort(undisableButton);
}

// **********************************************Insertion sort****************************************************//
async function Insertion(myCallback) {
  n = arr_size.value;
  sp = speed.value;
  var bars = Array.from(document.getElementsByClassName("bars"));

  function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    // const color1 = style1.getPropertyValue("background");
    // const color2 = style2.getPropertyValue("background");

    el1.style.height = transform2;
    el2.style.height = transform1;

    // el1.style.background=color2;
    // el2.style.background=color1;
  }

  function resolveAfter2Seconds(sp) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, sp);
    });
  }

  function swapnums(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  for (let i = 1; i < n; i++) {
    var element = arr[i];
    let j = i;

    bars[i].style.background = "blue";
    while (j > 0 && arr[j - 1] >= arr[j]) {
      
      bars[j-1].style.background="white";
      bars[j].style.background="blue";
      swapnums(j - 1, j);
      // sp = speed.value;

      
      swap(bars[j - 1], bars[j]);
      bars[j-1].style.background="yellowgreen";
      j--;
      const result = await resolveAfter2Seconds(sp);
    }
    
    bars[i].style.background="yellowgreen";
    res = await resolveAfter2Seconds(500);
  }
  mycallBack()
}

/****************************************slection sort*************************************************** */
function Selection(myCallback) {
 
  n = arr_size.value;
  sp = speed.value;
  var bars = Array.from(document.getElementsByClassName("bars"));

  function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    
    el1.style.height = transform2;
    el2.style.height = transform1;
  }

  function resolveAfter2Seconds(sp) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, sp);
    });
  }

  function swapnums(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  async function selectionsort() {
    for (let i = 0; i < n; i++) {
      let val = arr[i];
      let min = i;
      bars[i].style.background = "blue";

      // color the rest of the array
      for(let k=i+1;k<n;k++){
          bars[k].style.background="#BAD7E9";
      }

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      if (min != i) {
        bars[min].style.background = "red";
        const result = await resolveAfter2Seconds(sp);
        swap(bars[i], bars[min]);
        bars[min].style.background = "yellowgreen";
        swapnums(i, min);
      }
      bars[i].style.background = "yellowgreen";

    }
    myCallback();

  }
  selectionsort();
  // console.log("i am here");
  
}
//************************************Merge Sort******************************************************** */
// function Merge() {
//   n = arr_size.value;
//   sp = speed.value;
//   var bars = Array.from(document.getElementsByClassName("bars"));
//   function makeheight(el1, val) {
//     const style1 = window.getComputedStyle(el1);

//     const transform1 = style1.getPropertyValue("height");

//     el1.style.height = `${val}px`;
//   }
//   function merge(l, r, m) {
//     var n1 = m - l + 1;
//     var n2 = r - m;

//     // Create temp arrays
//     var L = new Array(n1);
//     var R = new Array(n2);

//     // Copy data to temp arrays L[] and R[]
//     for (var i = 0; i < n1; i++) L[i] = arr[l + i];
//     for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

//     // Merge the temp arrays back into arr[l..r]

//     // Initial index of first subarray
//     var i = 0;

//     // Initial index of second subarray
//     var j = 0;

//     // Initial index of merged subarray
//     var k = l;

//     while (i < n1 && j < n2) {
//       if (L[i] <= R[j]) {
//         arr[k] = L[i];
//         makeheight(bars[k], L[i]);
//         i++;
//       } else {
//         arr[k] = R[j];
//         makeheight(bars[k], R[j]);
//         j++;
//       }
//       k++;
//     }

//     // Copy the remaining elements of
//     // L[], if there are any
//     while (i < n1) {
//       arr[k] = L[i];
//       makeheight(bars[k], L[i]);
//       i++;
//       k++;
//     }

//     // Copy the remaining elements of
//     // R[], if there are any
//     while (j < n2) {
//       arr[k] = R[j];
//       makeheight(bars[k], R[j]);
//       j++;
//       k++;
//     }
//   }

//   function resolveAfter2Seconds(sp) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("resolved");
//       }, sp);
//     });
//   }


//   async function mergesort(l, r) {
//     if (l >= r) {
//       return;
//     }
//     let mid = l + parseInt((r - l) / 2);
//     await resolveAfter2Seconds(1000);
//     mergesort(l, mid);
//     for(let k=l;k<=mid;k++){
//       bars[k].style.background="red";
//     }
//     await resolveAfter2Seconds(1000);
//     mergesort(mid + 1, r);
//     for(let k=mid+1;k<=r;k++){
//       bars[k].style.background="red";
//     }
//     merge(l, r, mid);
//     await resolveAfter2Seconds(1000);
//   }

//   mergesort(0, n - 1);
// }
/********************************************* Quick Sort ********************************************************* */
function Quick(myCallback) {
  n = arr_size.value;
  sp = speed.value;
  var bars = Array.from(document.getElementsByClassName("bars"));
  function swapnums(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  

  function resolveAfter2Seconds(sp) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, sp);
    });
  }


  function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
   
    el1.style.height = transform2;
    el2.style.height = transform1;
  }

 

  function partition(low, high) {
    // pivot
    let pivot = arr[high];
    
    
  
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // If current element is smaller
      // than the pivot
      if (arr[j] < pivot) {
        // Increment index of
        // smaller element
        i++;
        swapnums(i, j);
        swap(bars[i], bars[j]);
      }
    }
    
    swapnums(i + 1, high);
    swap(bars[i + 1], bars[high]);

 
    

    return i + 1;
  }


  async function quickSort(low, high,mycallBack) {
    if (low < high) {
     
      let pi = partition(low, high);
    
      let result=await resolveAfter2Seconds(sp);

      quickSort(low, pi - 1);
      result = await resolveAfter2Seconds(sp);
     
      quickSort(pi + 1, high);
    }
   
  }
  quickSort(0, n - 1,myCallback);
  var temp_value_for_time_out = (10*sp) + 1500;
  console.log(temp_value_for_time_out);
  setTimeout(undisableButton,temp_value_for_time_out);
  
}
/**************************************************************************************************************** */
var btns=Array.from(document.getElementsByTagName("button"));

var bubble = document.getElementById("Bubblesort");
var merge = document.getElementById("Mergesort");
var quick = document.getElementById("Quicksort");
var insertion = document.getElementById("Insertionsort");
var selection = document.getElementById("Selectionsort");

bubble.addEventListener("click", () => {
  disableButton();
  Bubble();
});
insertion.addEventListener("click",()=>{
 disableButton();
 Insertion(undisableButton);
});
selection.addEventListener("click", ()=> {
  disableButton();
  Selection(undisableButton);
  
});
// merge.addEventListener("click", Merge);
quick.addEventListener("click",()=>{
  disableButton();
  Quick(undisableButton);
});
