const companies = [
    {name:"Vodacom", category:"Network",est:"1980",end:2010},
    {name:"Mip", category:"Technology",est:"1997",end:2005},
    {name:"Edgars", category:"Retail",est:"1990",end:2001}
];

const ages = [33,12,20,12,5,54,44];

for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

//forEach

companies.forEach(function(company){
console.log(company);
}); 

//Filter
//This code filters individuals who are over 21
/*
let canDrink = [];
for(let i = 0; i<ages.length; i++){
    if(ages[i] >=21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);
*/
//Using the filter function itself, it still does the same thing that the above code does
/*
const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});
*/
const canDrink = ages.filter(age => age >= 21); //ES6 better and shorter way.
console.log(canDrink);

//filter retail companies
/*
const retailCompanies = companies.filter(function(company){
    if(company.category === 'Network'){
        return true;
    }
});
*/
/*
const retailCompanies = companies.filter(company => company.category === 'Network');

console.log(retailCompanies);
const eightiesCompanies = companies.filter(comp => comp.est >= 1980 && comp.est < 1998);
console.log(eightiesCompanies);
*/
const lastedTenYears = companies.filter(company =>(company.end - company.est > 10));
console.log(lastedTenYears);

//MAP
//Create array of company names
/*const companyNames = companies.map(function(company){
    return company.name
});
console.log(companyNames);
*/
/*
const testMap = companies.map(function(company){
    return `${company.name} [${company.est} - ${company.end}]`
});
console.log(testMap);
*/
const testMap = companies.map(company => `${company.name} [${company.est} - ${company.end}]`);
console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age*2);
console.log(agesSquare);
console.log(agesTimesTwo);

//Sort

/*
Sort companies by year established
const sortedCompanies = companies.sort(function(c1,c2){
if(c1.est > c2.est){
    return 1;
}else{
    return -1;
}
});
console.log(sortedCompanies);
*/
//Shorter way
const sortedCompanies = companies.sort((c1,c2) => (c1.est > c2.est ? 1:-1));
console.log(sortedCompanies);

//sort ages
const sortAges = ages.sort((a,b) => a-b);
console.log(sortAges);

//reduce
//FIRST WAY
/*
let ageSum = 0;
for(let i =0; i<ages.length; i++){
ageSum+= ages[i];
}
console.log(ageSum);
*/
//SECOND WAY
const ageSum = ages.reduce((total,age) => total + age,0);
console.log(ageSum);

//Get total years for all companies
/*
const totalYears = companies.reduce(function(total,company){
    return total + (company.end - company.est);
},0);
console.log(totalYears);
*/
//Using the ES6 version.
const totalYears = companies.reduce((total,company) => total + (company.end - company.est),0);
console.log(totalYears);

//Combine methods

const combined = ages
    .map(age => age *2);

console.log(combined);