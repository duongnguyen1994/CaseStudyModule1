function Team(name ,win,draw, lose, gd){
    this.Name = name;
    this.Win = win;
    this.Lose = lose;
    this.Draw = draw;
    this.GD = gd;
    this.Matches = function(){
        return this.Win + this.Lose + this.Draw;
    }
    this.Points = function(){
        return this.Win * 3 + this.Draw;
    }
}

var tot = new Team('Tottenham',6,3,1,12);
var liv = new Team('Liverpool',6,3,1,5);
var chel = new Team('Chelsea',5,4,1,12);
var lei = new Team('Leicester',6,0,3,6);
var sou = new Team('Southampton',5,2,3,3);
var wol = new Team('Wolverhampton',5,2,3,0);
var eve = new Team('Everton',5,1,4,2);
var mu = new Team('MU',5,1,3,0);
var ast = new Team('Aston Villa',5,0,3,8);
var mc = new Team('MC',4,3,2,4);
var temp = new Team('temp',0,0,0,0);

let team = [tot,liv,chel,lei,sou,wol,eve,mu,ast,mc];
let bxh = [];
let point = [];
function top5(){
    let maxP = team[0].Points();
    let maxGD = team[0].GD;
    let index = 0;
    for(let i = 1;i<10;i++){
        if(maxP < team[i].Points()){
            maxP = team[i].Points();
            maxGD = team[i].GD;
            index = i;
        }else if(maxP == team[i].Points() && maxGD < team[i].GD){
            maxP = team[i].Points();
            maxGD = team[i].GD;
            index = i;
        }
    }  
    bxh.push(team[index].Name);
    point.push(team[index].Points())
    team.splice(index,1);
    team.push(temp)
}

for(let j=0;j<5;j++){
    top5();
}
//  Pos
document.getElementById('pos1').innerHTML = `1 ${bxh[0]}`;
document.getElementById('pos2').innerHTML = `2 ${bxh[1]}`;
document.getElementById('pos3').innerHTML = `3 ${bxh[2]}`;
document.getElementById('pos4').innerHTML = `4 ${bxh[3]}`;
document.getElementById('pos5').innerHTML = `5 ${bxh[4]}`;

// Points
document.getElementById('point1').innerHTML = point[0];
document.getElementById('point2').innerHTML = point[1];
document.getElementById('point3').innerHTML = point[2];
document.getElementById('point4').innerHTML = point[3];
document.getElementById('point5').innerHTML = point[4];

   