
function Iterator(collection){
    this.collection = collection;
    this.index = 0;
  }

  Iterator.prototype = {
    hasNext: function(){
      return this.index < this.collection.length
    },
    next: function(){
      return this.collection[this.index++]
    }
  }

export default Iterator