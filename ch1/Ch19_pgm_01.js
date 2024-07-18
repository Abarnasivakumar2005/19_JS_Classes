class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    speak() {
      return `${this.name} makes a sound.`;
    }
  
    description() {
      return `${this.name} is a ${this.color} animal, ${this.age} years old with ${this.legs} legs.`;
    }
  }

  

  class Dog extends Animal {
    speak() {
      return `${this.name} barks.`;
    }
  }
  
  class Cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
  }
  
  // Example usage
  const dog = new Dog('Buddy', 3, 'brown', 4);
  console.log(dog.speak()); // Buddy barks.
  console.log(dog.description()); // Buddy is a brown animal, 3 years old with 4 legs.
  
  const cat = new Cat('Whiskers', 2, 'black', 4);
  console.log(cat.speak()); // Whiskers meows.
  console.log(cat.description()); // Whiskers is a black animal, 2 years old with 4 legs.

  class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(this.count() / 2);
  
      return this.count() % 2 !== 0
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;
    }
  
    mode() {
      const frequency = {};
      this.data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
  
      let mode = [];
      let maxFreq = 0;
  
      for (const key in frequency) {
        if (frequency[key] > maxFreq) {
          maxFreq = frequency[key];
          mode = [Number(key)];
        } else if (frequency[key] === maxFreq) {
          mode.push(Number(key));
        }
      }
  
      return { mode: mode[0], count: maxFreq };
    }
  
    var() {
      const mean = this.mean();
      const squaredDiffs = this.data.map(num => Math.pow(num - mean, 2));
      return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
  
      const freqArray = [];
      for (const key in frequency) {
        freqArray.push([Number(key), frequency[key]]);
      }
  
      return freqArray.sort((a, b) => b[1] - a[1]).map(item => [(item[1] / this.count()) * 100, item[0]]);
    }
  }
  
  // Example usage
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum:', statistics.sum()); // 744
  console.log('Min:', statistics.min()); // 24
  console.log('Max:', statistics.max()); // 38
  console.log('Range:', statistics.range()); // 14
  console.log('Mean:', statistics.mean()); // 29.76
  console.log('Median:', statistics.median()); // 27
  console.log('Mode:', statistics.mode()); // { mode: 26, count: 5 }
  console.log('Variance:', statistics.var()); // 17.16
  console.log('Standard Deviation:', statistics.std()); // 4.14
  console.log('Frequency Distribution:', statistics.freqDist()); 
  /*
  [
    [20, 26], [16, 27], [12, 32], [8, 37], 
    [8, 34], [8, 33], [8, 31], [8, 24], 
    [4, 38], [4, 29], [4, 25]
  ]
  */
  