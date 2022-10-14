
const list = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')

listLength = 0

button.addEventListener('click', function(populatelist) {
    
    if (input.value.length === 0) {
        alert("Please add a chapter from the Book of Mormon");
    } else if (listLength >= 25) {
        alert("You already have 25 chapters chosen. I know they are all good but 25 is the limit");
        input.value = "";
        input.focus();
    } else {    

        let myItem = input.value;

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement('button');

        listItem.append(listText);
        listText.textContent = myItem;
        listItem.append(listBtn);
        listBtn.textContent = "❌";

        list.append(listItem);

        input.value = "";
        
        listBtn.addEventListener("click", function() {
            list.removeChild(listItem);
        });

        listLength = listLength + 1
        console.log(listLength)

    }

    input.focus();
}
)