const geonamesURL = 'http://localhost:8081/location';

function getDiffDay(dateDivided, ts) {
    return Math.round(Math.abs(dateDivided - ts) / 86400);
}

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const location = document.getElementById('location').value;
    // valueAsNumber returns milliseconds, so we divide by 1000
    let date = document.getElementById('date').value;
    let dateDivided = document.getElementById('date').valueAsNumber / 1000;

    // get current day
    let ts = Math.round((new Date()).getTime() / 1000);
    // get remain date for trip
    let diffDays = getDiffDay(dateDivided, ts);

    //add new card
    const newDiv = document.createElement('div');
    const att = document.createAttribute("class");
    att.value = "card";
    newDiv.setAttributeNode(att);

    const entrySection = document.getElementById("entry");
    entrySection.appendChild(newDiv);

    const locationFetchUrl = `${geonamesURL}?q=${location}&days=${diffDays}`;
    await fetch(locationFetchUrl, {
            method: "GET",
        })
        .then(res => {
            return res.json();
        })
        .then(content => {
            JSON.stringify(content);

            const newElement = document.createElement('p');

            const section = document.getElementById('entry');
            const newCard = document.querySelector('.card');
            newCard.appendChild(newElement);
            section.appendChild(newCard);

            const forecast = content.forecast;
            const forecastDate = content.forecastDate;
            const maxTemp = content.maxTemp;
            const lowTemp = content.lowTemp;
            const cityName = content.cityName;
            const placePic = content.picture;

            // create trip title
            const tripTitle = document.createElement('div');
            tripTitle.className = 'row-h1'
            tripTitle.innerHTML = 'Your Trip to ' + cityName + ',  Departing: ' + forecastDate;
            newDiv.appendChild(tripTitle);

            const rowdiv = document.createElement('div');
            rowdiv.className = 'card-row';
            newCard.appendChild(rowdiv);

            // create column div
            const columnDiv = document.createElement('div');
            columnDiv.className = 'column';
            rowdiv.appendChild(columnDiv);

            const placeImg = document.createElement('img')
            placeImg.src = `${placePic}`;
            placeImg.alt = `${cityName}.img`
            placeImg.className = "card-img-top";

            columnDiv.appendChild(placeImg);

            // create column div2
            const columnDiv2 = document.createElement('div');
            columnDiv2.className = 'column';
            rowdiv.appendChild(columnDiv2);

            const newForecast = document.createElement('p');
            newForecast.innerText = "Typical weather for then is: " + forecast;
            const newTemp = document.createElement('p');
            newTemp.innerText = "High: " + maxTemp + " degree, Low: " + lowTemp + " degree";

            const p = document.createElement('p');
            p.innerText = "Your trip is " + diffDays + " days away";

            columnDiv2.appendChild(newForecast);
            columnDiv2.appendChild(newTemp);
            columnDiv2.appendChild(p);

            // create tasker div
            const task = document.createElement('div');
            task.className = 'tasker';
            task.id = 'tasker';
            columnDiv2.appendChild(task);

            // create error div
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.id = 'error';
            errorDiv.innerText = "error";
            task.appendChild(errorDiv);

            // create tasker-header div
            const taskHeader = document.createElement('div');
            taskHeader.className = 'tasker-header';
            taskHeader.id = 'tasker-header';

            task.appendChild(taskHeader);

            const taskInput = document.createElement("input");
            taskInput.setAttribute("type", "text");
            taskInput.id = "input-task";
            taskInput.setAttribute("placeholder", "Enter a ToDo List");
            taskHeader.appendChild(taskInput);

            //create Button
            const addBtn = document.createElement("button");
            addBtn.id = "add-task-btn";
            const buttonIcon = document.createElement("i");
            buttonIcon.setAttribute("class", "fa fa-fw fa-plus");
            addBtn.appendChild(buttonIcon);

            taskHeader.appendChild(addBtn);

            // create tasker-header div
            const taskBody = document.createElement('div');
            taskBody.className = 'tasker-body';

            const taskBodyUl = document.createElement('ul');
            taskBodyUl.id = "tasks";
            taskBody.appendChild(taskBodyUl);
            task.appendChild(taskBody);
            rowdiv.appendChild(columnDiv2);

            (function() {
                'use strict';
                var tasker = {
                    init: function() {
                        this.cacheDom();
                        this.bindEvents();
                        this.evalTasklist();
                    },
                    cacheDom: function() {
                        this.taskInput = document.getElementById("input-task");
                        this.addBtn = document.getElementById("add-task-btn");
                        this.tasklist = document.getElementById("tasks");
                        this.tasklistChildren = this.tasklist.children;
                        this.errorMessage = document.getElementById("error");
                    },
                    bindEvents: function() {
                        this.addBtn.onclick = this.addTask.bind(this);
                        this.taskInput.onkeypress = this.enterKey.bind(this);
                    },
                    evalTasklist: function() {
                        var i, chkBox, delBtn;
                        //BIND CLICK EVENTS TO ELEMENTS
                        for (i = 0; i < this.tasklistChildren.length; i += 1) {
                            //ADD CLICK EVENT TO CHECKBOXES
                            chkBox = this.tasklistChildren[i].getElementsByTagName("input")[0];
                            chkBox.onclick = this.completeTask.bind(this, this.tasklistChildren[i], chkBox);
                            //ADD CLICK EVENT TO DELETE BUTTON
                            delBtn = this.tasklistChildren[i].getElementsByTagName("button")[0];
                            delBtn.onclick = this.delTask.bind(this, i);
                        }
                    },
                    render: function() {
                        var taskLi, taskChkbx, taskVal, taskBtn, taskTrsh;
                        //BUILD HTML
                        taskLi = document.createElement("li");
                        taskLi.setAttribute("class", "task");
                        //CHECKBOX
                        taskChkbx = document.createElement("input");
                        taskChkbx.setAttribute("type", "checkbox");
                        //USER TASK
                        taskVal = document.createTextNode(this.taskInput.value);
                        //DELETE BUTTON
                        taskBtn = document.createElement("button");
                        //TRASH ICON
                        taskTrsh = document.createElement("i");
                        taskTrsh.setAttribute("class", "fas fa-trash-alt");
                        //INSTERT TRASH CAN INTO BUTTON
                        taskBtn.appendChild(taskTrsh);

                        //APPEND ELEMENTS TO TASKLI
                        taskLi.appendChild(taskChkbx);
                        taskLi.appendChild(taskVal);
                        // taskLi.appendChild(taskTrsh);
                        taskLi.appendChild(taskBtn);

                        //ADD TASK TO TASK LIST
                        this.tasklist.appendChild(taskLi);

                    },
                    completeTask: function(i, chkBox) {
                        if (chkBox.checked) {
                            i.className = "task completed";
                        } else {
                            this.incompleteTask(i);
                        }
                    },
                    incompleteTask: function(i) {
                        i.className = "task";
                    },
                    enterKey: function(event) {
                        if (event.keyCode === 13 || event.which === 13) {
                            this.addTask();
                        }
                    },
                    addTask: function() {
                        var value = this.taskInput.value;
                        this.errorMessage.style.display = "none";

                        if (value === "") {
                            this.error();
                        } else {
                            this.render();
                            this.taskInput.value = "";
                            this.evalTasklist();
                        }
                    },
                    delTask: function(i) {
                        this.tasklist.children[i].remove();
                        this.evalTasklist();
                    },
                    error: function() {
                        this.errorMessage.style.display = "block";
                    }
                };

                tasker.init();
            }());

        })
        .catch(error => {
            console.error("error", error)
        })
}

export {
    handleSubmit
}

export {
    getDiffDay
}