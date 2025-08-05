function isIsogram(str){
    let t1= str.toLowerCase().split('').sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));


    let count=0;
    for(let i=0;i<t1.length-1;i++){
            if(t1[i]===t1[i+1]){
                count++
            }

    }

        if(count>0){
                return false
        }else{
                return true
        }
}
console.log(isIsogram('Dermatoglyphics') )
isIsogram('aba') //false 
isIsogram('moOse') //false



//##################################################
//bubble sort
// function bubbleSort(arr) {
//     let n = arr.length
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1]
//                 arr[j+1]=arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([5, 2, 8, 1])); // [1, 2, 5, 8]

//##################################################

// function LinearSearch(arr,value){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===value){
//            return i
//         }
// }
//         return -1
// }
// LinearSearch([5, 2, 8, 1],5)


// binarySearch  myMethode but its note a binary ###################################################




// function binarySearch(arr, target) {
//             let middle1=Math.floor(arr.length/2)
//             if(arr[middle1]>target){
//                 let firstHalf= arr.slice(0,middle1);
//                     console.log('first half : '+ firstHalf);
//                 for(i=0;i<firstHalf.length;i++){
//                     if(firstHalf[i]===target){
//                         return i
//                     }
//                 }

//             }else{
//                 let secondHalf= arr.slice(middle1);
//                 console.log('secondHalf : '+ secondHalf);
//                 for(i=0;i<secondHalf.length;i++){
//                     if(secondHalf[i]===target){
//                         return i+middle1
//                     }
//                 }
//             }

//             return -1


//         }
// console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));   // ➤ يجب أن تُرجع: 3
// console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));   // ➤ يجب أن تُرجع: -1
// console.log(binarySearch([2, 4, 6, 8, 10, 12], 2));  // ➤ يجب أن تُرجع: 0
// console.log(binarySearch([2, 4, 6, 8, 10, 12], 12)); // ➤ يجب أن تُرجع: 5



// function binarySearch(arr, target) {
//         let start =0;
//         let end = arr.length-1;    //[1, 3, 5, 7, 9, 11]
//         while(start<=end){
//             let middle=Math.floor((start+end)/2);
//             if(arr[middle]===target){
//                 return middle
//             }else if(arr[middle]<target){
//                 start=middle+1
//             }else{
//                 end = middle-1
//             }

//         }
//          return -1


//         }


// console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));   // ➤ يجب أن تُرجع: 3
// console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));   // ➤ يجب أن تُرجع: -1
// console.log(binarySearch([2, 4, 6, 8, 10, 12], 2));  // ➤ يجب أن تُرجع: 0
// console.log(binarySearch([2, 4, 6, 8, 10, 12], 12)); // ➤ يجب أن تُرجع: 5





