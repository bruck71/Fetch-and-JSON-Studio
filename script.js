// Event Listener for page load
window.addEventListener("load", function(){
    // Create object for result section
    let result = document.getElementById("result");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        console.log(response);
        response.json().then(function(data){
            let dataFetch = data;
            console.log(dataFetch);
            for(let i = 0; i < dataFetch.length; i++){
                //make variables
                //Name - string
                let astronautName = (`${dataFetch[i].firstName} ${dataFetch[i].lastName}`);
                //console.log(astronautName);
                //Hours - number
                let spaceHours = dataFetch[i].hoursInSpace;
                //console.log(spaceHours);
                //Active? - boolean
                let currentlyActive = dataFetch[i].active;
                //console.log(currentlyActive);
                //skills: - string
                let astronautSkills = dataFetch[i].skills;
                //console.log(astronautSkills);
                //picture
                let astronautPicture = dataFetch[i].picture;

                const div = document.getElementById("container");
                div.innerHTML += `
                    <div class = "astronaut">
                        <div class = "bio">
                            <h3>${astronautName}</h3>
                            <ul>
                                <li>Hours in space: ${spaceHours}</li>
                                <li>Active: ${currentlyActive}</li>
                                <li>Skills: ${astronautSkills}</li>
                            </ul>
                        </div>
                        <img class = "avatar" src = "${astronautPicture}">
                    </div> 
                `;
            }
        });

    });
});
