//buildALibrary
//recreate a parent class named Media with subclasses: Book, Movie, and CD. 
// Part of Codecademy/Web Dev Track

class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._rating = [];
    }
    get title() {
      return this._title;
    }
    
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    
    get ratings(){
      return this._ratings;
    }
       
      //Step 6
      toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
      }
  
    //Step 7 .getAverageRating method
      getAverageRating(){
        let ratingsSum = this.rating.reduce((currentSum,rating) => currentSum + rating,0);
        const lengthOfArray = ratings.length;
        return ratingsSum/lengthOfArray;
      }
      
    //Step 8 .addRating method
      addRating(inputValue){
        this.ratings.push(inputValue);
      }
      
  }
    
    
  //Step 9: Build a Book class that extends
  //Media
  
  class Books extends Media{
      constructor(author,title,pages){
          //Step 11: call super
        super(title);
        
        //Step 12: set author and pages properties
        this._author = author;
        this._pages = pages;
        
      }
    
    //Step 13 add getters
    get author(){
      return this._author;
    }  
    
    get pages(){
      return this._pages;
    }
  }
  
  //Step 14: Create Movie class
  class Movie extends Media{
    constructor(director,title,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director(){
      return this._director;
    }
    
    get runTime(){
      return this._runTime;
    }
  }
  
  //Step 15: Create a Book instance
  const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
  
  //Step 16: .toggleCheckOutStatus() on the historyOfEverything 
  historyOfEverything.toggleCheckOutStatus();
  
  //Step 17:log the value saved to isCheckedOut in historyOfEverything
  console.log(historyOfEverything.isCheckedOut);
  
  //Step 18: call .addRating 3 times on historyOfEverything
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  //Step 19: call .getAverageRating() on historyOfEverything
  console.log(historyOfEverything.getAverageRating());
  
  //Step 20: Create a Movie instance
  const speed  = new Movie('Jan de Bont','Speed',116)
  
  //Step 21: Call .toggleCheckOutStatus() on the speed instance
  speed.toggleCheckOutStatus();
  
  //Step 22: log the value saved to the isCheckedOut in the speed instance
  console.log(speed.isCheckedOut);
  
  //Step 23: Call .addRating() 3 times on speed
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  //Step 24: call .getAverageRating() on speed. Log the result.
  console.log(speed.getAverageRating());
  
  
  
  
  
  