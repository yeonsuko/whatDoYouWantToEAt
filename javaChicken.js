

let foodType = 'chicken';
let tools = ['fork', 'hand', 'knife', 'straw'];

let nowFoodCnt;
let nowCokeCnt;
let nowFood = 'chicken';
let nowTool;

let foodLocation = document.querySelector('#realChicken');
let cokeLocation = document.querySelector('#realCola');

let toolElement = document.querySelectorAll('.tool');
let menus = document.querySelectorAll('.menuText');

foodLocation.addEventListener('click', eat);
cokeLocation.addEventListener('click', drink);

for(var i = 0; i<toolElement.length; i++)
{
    toolElement[i].addEventListener('click', selectTool);
}

for(var j = 0; j<menus.length; j++)
{
    menus[j].addEventListener('click', selectMenu);
}

/*
console.log(foodLocation);
console.log(cokeLocation);
console.log(toolElement);
console.log(menus);
*/


let chickenData = [
    'img/c0.png',
    'img/c1.png',
    'img/c2.png',
    'img/c3.png',
    'img/c4.png',
    'img/c5.png',
    'img/c6.png'
];

let pizzaData = [
    'img/p0.png',
    'img/p1.png',
    'img/p2.png',
    'img/p3.png',
    'img/p4.png',
    'img/p5.png',
    'img/p6.png',
    'img/p7.png',
    'img/p8.png'
];

let cokeData = [
    'img/coke2.png',
    'img/coke1.png',
    'img/coke0.png'
]


let chickenCnt = chickenData.length-1;
let pizzaCnt = pizzaData.length-1;
let cokeCnt = cokeData.length-1;

nowFoodCnt = chickenCnt;

function selectTool()
{
    var toolNum = this.getAttribute('toolVal');
    
    nowTool = tools[toolNum];
}

function selectMenu()
{
    var menuNum = this.getAttribute('menuVal');
    
    if(menuNum == 0)
    {
        nowFood = 'chicken';
        resetFood();
    }else if(menuNum == 1)
    {
        nowFood = 'pizza';
        resetFood();
    }else if(menuNum == 2)
    {
        resetCoke();
    }
}

function eat()
{
    if(nowTool != undefined)
    {
        if(nowFood == 'chicken')
        {
            if(nowTool == 'fork' || nowTool=='hand')
            {
                nowFoodCnt--;
                if(nowFoodCnt<=0)nowFoodCnt=0;
                drawFood('chicken', nowFoodCnt);
            }else
            {
                alert('이걸로 치킨을???')
            }
        }else if(nowFood == 'pizza')
        {
            if(nowTool == 'hand' || nowTool=='knife')
            {
                nowFoodCnt--;
                if(nowFoodCnt<=0)nowFoodCnt=0;
                drawFood('pizza', nowFoodCnt);
            }else
            {
                alert('더 좋은 도구를 선택하세요~!')
            }
        }
    }
    else
    {
        alert('도구를 먼저 선택하세요!')
    }
}

function drink()
{
    if(nowTool != undefined)
    {
        if(nowTool == 'straw')
        {
            cokeCnt--;
            if(cokeCnt<=0)cokeCnt=0;
            drawCoke(cokeCnt);
        }
        else{
            alert('적절한 도구를 선택하셔야지요~')
        }
    }
    else
    {
        alert('도구를 먼저 선택하세요!')
    }
}

function drawFood(food, cnt)
{
   //console.log("draw img ==" +food + cnt );
    if(food == 'chicken')
    {
        foodLocation.src = chickenData[cnt];
    }
    else if(food == 'pizza')
    {
        foodLocation.src = pizzaData[cnt];
    }
} 

function drawCoke(cokeCnt)
{
    cokeLocation.src = cokeData[cokeCnt];
}

function resetFood()
{
    chickenCnt = chickenData.length-1;
    pizzaCnt = pizzaData.length-1;

    if(nowFood == 'chicken')
    {
        nowFoodCnt = chickenCnt;
    }
    else if(nowFood == 'pizza')
    {
        nowFoodCnt = pizzaCnt;
    }
    drawFood(nowFood, nowFoodCnt);
}

function resetCoke()
{
    cokeCnt = cokeData.length-1;
    drawCoke(cokeCnt);
}


//init
drawFood('chicken', nowFoodCnt);
drawCoke(cokeCnt);