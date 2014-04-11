/**
 * Created by Raj on 3/19/14.
 */
$(document).ready(function(){

    var queue = {
        elements: [1,2,3,4,5,6,7,8,9],
        addElement: function(element){
            this.elements.push(element);
            this.elements.shift();
        }

    };

    console.log(queue.elements.join(', '));
    queue.addElement(10);
    console.log(queue.elements.join(', '));
    queue.addElement(11);
    console.log(queue.elements.join(', '));

    queue.elements.unshift(100);
    console.log(queue.elements.join(', '));


});