$(document).ready(function() {
    let totalPrice = 0;
    const clickedElements = {};

    $(".element-button").click(function() {
        const element = $(this).data("element");
        const price = $(this).data("price"); 
        
        totalPrice += price;

        
        $("#priceDisplay").val("Total Price: AED " + totalPrice.toFixed(2));

        if (clickedElements[element]) {
            clickedElements[element]++;
        } else {
            clickedElements[element] = 1;
        }
        updateLogDisplay()
        
        function updateLogDisplay() {
            const logDisplay = $("#logDisplay")
            logDisplay.empty();
            
            for(const element in clickedElements) {
                const count = clickedElements[element]
                const listItem = $("<li>")
                const elementText = $("<span>").text(element).css("color", "black");
                const countText = $("<span>").text(` (${count})`).css("color", "red");
                
                listItem.append(elementText).append(countText);
                logDisplay.append(listItem);

        }
    }
    });
});
