"use strict"

let seattle = [];
let openinghours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',`               Total`]

let con = document.getElementById('con');
let tableEl = document.createElement('table');
con.appendChild(tableEl);

function Location (LocationName,min,max,AvgCookie){

    this.LocationName = LocationName;
    this.min = min;
    this.max = max;
    this.Total = 0;
    this.AvgCookie = AvgCookie;
    this.cockiesPerHour = [];
    seattle.push(this);

    
//************************************** */

Location.prototype.render = function () {
        
    let tre1 = document.createElement('tr');
    tableEl.appendChild(tre1);

    let tdEl1 = document.createElement('td');
    tre1.appendChild(tdEl1);
    tdEl1.textContent = this.LocationName;
    
    for (let b = 0; b < 14; b++){
    let tdEl5 = document.createElement('td');
    tre1.appendChild(tdEl5);
    tdEl5.textContent = this.cockiesPerHour[b];
    }

    /*for(let r = 0; r < openinghours.length; r++){
        let tdEl3 = document.createElement('td')
        tre1.appendChild(tdEl3)
        tdEl3.textContent = this.AvgCookie[r]
    }*/

    let tdEl2 = document.createElement('td')
    tre1.appendChild(tdEl2)
    tdEl2.textContent = this.Total

   // console.log(this.cockiesPerHour);
}

}

    //*********************************** */
    Location.prototype.Randomm = function () {

        for (let i = 0 ; i < openinghours.length ; i++ ){

            let value = getRandomInt(this.min,this.max);
            this.cockiesPerHour.push( Math.ceil (value * this.AvgCookie));
            this.Total += this.cockiesPerHour[i];
            
        } 
      
    
    }

     
        function getRandomInt (min,max) {
        let minn = Math.ceil(min);
        let maxx = Math.floor(max);
        return Math.floor(Math.random() * (maxx - minn) + minn); 
    
    }

    function createTableHeader(){

        let tre1 = document.createElement('tr');
        tableEl.appendChild(tre1);
        
        let tdEl1 = document.createElement('td');
        tre1.appendChild(tdEl1);
        tdEl1.textContent = ' ';
        
        for (let i =0; i< openinghours.length; i++){

            let tdel = document.createElement('td');
            tre1.appendChild(tdel);
            tdel.textContent = openinghours[i];
        }

    }
 
    let seattel = new Location ('Seattle',23,65,6.3);
    let Tokyo = new Location ('Tokyo',3,24,1.2);
    let Dubai = new Location ('Dubai',11,38,3.7);
    let Paris = new Location ('Paris',20,38,2.3);
    let Lima = new Location ('Lima',2,16,4.6);

    function Total2() {

        let TRE = document.createElement('tr');
        tableEl.appendChild(TRE);
      
        let td1 = document.createElement('td');
        TRE.appendChild(td1);
        td1.textContent = 'Total';
      
        let TH = 0;
        for (let i1 = 1; i1 < openinghours.length; i1++) {
          let TOTal = 0;
          for (let c2 = 1; c2 < seattle.length; c2++) {
            TOTal += seattle[c2].cockiesPerHour[i1];
      
          }
          TH += TOTal;
          let td2 = document.createElement('td');
          TRE.appendChild(td2);
          td2.textContent = TOTal;
      
        }
        let td3 = document.createElement('td');
        TRE.appendChild(td3);
        td3.textContent =  TH;
      
      }
   
   
     
    createTableHeader();
    
    seattel.Randomm();
    seattel.render();

    Tokyo.Randomm();
    Tokyo.render();

    Dubai.Randomm();
    Dubai.render();

    Paris.Randomm();
    Paris.render();

    Lima.Randomm();
    Lima.render();
    
     //***************************************
     let myForm = document.getElementById('myForm');

     myForm.addEventListener('submit', addLocation)
     function addLocation(event){
         event.preventDefault();
         let LocationName = event.target.Location.value;
         let min = event.target.MinimumCustomersPH.value;
         let max = event.target.MaximumCustomersPH.value;
         let AvgCookie = event.target.AvgCookie.value;
         /*console.log(Location);
         console.log(MinimumCustomersPH);
         console.log(MaximumCustomersPH);
         console.log(AvgCookie);*/
         let newLocation = new Location (LocationName,min,max,AvgCookie);
         newLocation.Randomm();
         newLocation.render();
         Total2();
    
     } 
     
     //************************************** */




   
    /*
let Seattle = {
    min : "23",
    max : "65",
    Total : 0 ,
    AvgCookie : "6.3" ,
  
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    CoustemrsPerHour : [] ,
    CockiesPerHour : [],
    GitCockiePH : function () {
        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,
    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Seattle';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }
    }
    
    Seattle.GitCockiePH();
    Seattle.render();
 
let Tokyo = {
    min : "3" ,
    max : "24" ,
    AvgCookie : "1.2",
    Total : 0 ,
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    CoustemrsPerHour : [] ,
    CockiesPerHour : [],
    GitCockiePH : function () {
        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,
    
    render: function () {
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Tokyo';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }
    }
    
    Tokyo.GitCockiePH();
    Tokyo.render();
   
let Dubai = {
    min : "11" ,
    max : "38" ,
    AvgCookie : "3.7",
    Total : 0 ,
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    CoustemrsPerHour : [] ,
    CockiesPerHour : [],
    GitCockiePH : function () {
        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,
    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Dubai';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }
    }
    
    Dubai.GitCockiePH();
    Dubai.render();
let Paris = {
    min : "20" ,
    max : "38" ,
    AvgCookie : "2.3",
    Total : 0 ,
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    CoustemrsPerHour : [] ,
    CockiesPerHour : [],
    GitCockiePH : function () {
        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,
    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Paris';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }
    }
    
    Paris.GitCockiePH();
    Paris.render();
let Lima = {
    min : "2" ,
    max : "16" ,
    AvgCookie : "4.6", 
    Total : 0 , 
    openinghours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    CoustemrsPerHour : [] ,
    CockiesPerHour : [],
    GitCockiePH : function () {
        for (let i = 0 ; i < this.openinghours.length ; i++ ){
        
            this.CockiesPerHour.push(Math.ceil(getRandomInt(this.min,this.max) * this.AvgCookie))
            this.Total += this.CockiesPerHour[i];
            
        }
    } ,
    
    render: function () {
        console.log('hello');
        let con = document.getElementById('con');
        let h1el = document.createElement('hi');
        con.append(h1el);
        h1el.textContent= 'Lima';
        let ul = document.createElement('ul');
        con.append(ul);
        for (let j = 0; j <this.openinghours.length; j++){
            let li = document.createElement('li')
            ul.append(li);
            li.textContent = `${this.openinghours[j]} : ${this.CockiesPerHour[j]}`
        }
        let liEl = document.createElement('li');
        ul.append(liEl);
        liEl.textContent = `Total : ${this.Total}`;
    
        
    }
    }
    
    Lima.GitCockiePH();
    Lima.render();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
   */
