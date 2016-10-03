(function() {
    var sel = document.querySelectorAll('.radio input[type="radio"]');
    sel.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
            var node = document.createElement('span');
            node.className += "dot animate";

            var allInks = document.querySelectorAll('.dot');


            if (allInks.length > 0) {
                allInks.forEach(function(i) {
                    i.remove()
                })
            }

            // /var prevInk = this.parentNode.querySelectorAll('.dot');
            /*var self = this;
            if (prevInk.length > 0) {
                prevInk.forEach(function(prev) {
                    self.parentNode.removeChild(prev)
                })
            }*/
            this.parentNode.appendChild(node)
            node.style.transform = 'scale(2)'
        })
    })
})();
