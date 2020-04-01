console.log("");
console.log("=== OBJETOS 3 ===");

// objeto literal
var computer = {
    processor: {
        model: "Intel I7",
        cores: 8,
        frequency: "3.5 Ghz",
        info: function() {
            return this;
        }
    },
    memory: "16GB",
    disk: {
        size: "1TB",
        model: "Samsung SSD"
    },
    running: false,
    start: function() {
        this.running = true;
        return "UP";
    },
    stop: function() {
        this.running = false;
        return "DOWN";
    },
    info: function() {
        return `${this.processor} CPU - ${this.memory} RAM - ${this.disk} Disk`;
        // return pc.processor + " CPU - " + pc.memory + " RAM - " + pc.disk + " Disk";
    }
};

console.log(computer);

/*
console.log(pc);
console.log(pc.processor, pc.memory, pc.disk);
console.log( pc.running ); // false
console.log( pc.start() );
console.log( pc.running ); // true
console.log( pc.stop() );
console.log( pc.running ); // false
console.log( pc.info() ); // AMD CPU - 16GB RAM - 1TB Disk
*/