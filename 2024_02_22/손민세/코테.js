
//번호 가리기
function solution(phone_number) {
    const lastVisiblePhoneNumber = phone_number.slice(phone_number.length-4, phone_number.length)
    const answer = '*'.repeat(phone_number.length - 4).concat(lastVisiblePhoneNumber)
    return answer
}


///콜라즈 추측

function solution(num) {
    const working = (num,loopCount)=>{
        if(num === 1)
            return loopCount
        const calculateNumber = num % 2 === 0 ? num / 2 : num * 3 + 1
        return working(calculateNumber,loopCount+1)
    }

    const loopCount = working(num,0) 
    const answer = loopCount < 500 ? loopCount : -1
    return answer;
}


//금액 계산
function solution(price, money, count) {
    let answer
    if(count % 2 === 0){
       const startPrice = price
       const endPrice = price * count

       const pay = (startPrice + endPrice) * (count / 2)
       answer = pay - money
    }   
    else{
       const startPrice = price
       const endPrice = price * count

       const pay = (startPrice + endPrice) * Math.floor(count / 2) + (endPrice+startPrice) / 2
       answer = pay - money
    }

    return answer > 0 ? answer : 0
}