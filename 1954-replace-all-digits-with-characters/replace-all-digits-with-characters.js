/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {

    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
       
        if (Number(arr[i])|| arr[i]==="0"){

            let code = arr[i-1].charCodeAt(0)
            code += Number(arr[i])
            arr[i] = String.fromCharCode(code)

        }


    }
    return arr.join("")
}