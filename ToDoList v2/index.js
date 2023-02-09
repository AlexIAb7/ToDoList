new Vue({
    el:'#app',
    data (){
        return {
            task: "",
            arrayTasksToDo: [],
            countTasksDone: 0,
        };
    },
    created: function () {
          if (localStorage.getItem("arrayTasksToDo")){
            this.arrayTasksToDo = JSON.parse(localStorage.getItem("arrayTasksToDo"));
            this.countTasksDone = JSON.parse(localStorage.getItem("countTasksDone"));
          }
          
    },
    
    methods:{

        addTask(){
            this.arrayTasksToDo.push({description:this.task, state:false});
            localStorage.setItem("arrayTasksToDo", JSON.stringify(this.arrayTasksToDo));
        },


        taskDone(index){
            if(this.arrayTasksToDo[index].state === false){
                this.arrayTasksToDo[index].state = true;
                console.log(this.arrayTasksToDo[index].state);
                this.countTasksDone++;
            }
            else{
                this.arrayTasksToDo[index].state = false;
                console.log(this.arrayTasksToDo[index].state);
                this.countTasksDone--;
            }
            localStorage.setItem("arrayTasksToDo", JSON.stringify(this.arrayTasksToDo));
            localStorage.setItem("countTasksDone", JSON.stringify(this.countTasksDone));
        },
        

        deleteTask(index){
            if (index >= 0 && index < this.arrayTasksToDo.length){
                let task = this.arrayTasksToDo[index];
                if (task && task.state === true){
                    this.countTasksDone--;
                }
            }
            this.arrayTasksToDo.splice(index,1);
            
            localStorage.setItem("arrayTasksToDo", JSON.stringify(this.arrayTasksToDo));
            localStorage.setItem("countTasksDone", JSON.stringify(this.countTasksDone));
        },
        
        
        deleteAllTasks(arrayTasksToDo){
            this.arrayTasksToDo.splice(arrayTasksToDo.length);
            this.countTasksDone = 0;
            localStorage.setItem("arrayTasksToDo", JSON.stringify(this.arrayTasksToDo));
            localStorage.setItem("countTasksDone", JSON.stringify(this.countTasksDone));
        },
        

        deleteTasksDo(state){
            let deleteTasks = 0;
            for(let i = this.arrayTasksToDo.length - 1; i>=0; i--){
                if (this.arrayTasksToDo[i].state === true){
                    this.arrayTasksToDo.splice(i, 1);
                    deleteTasks++;
                    
                }
               
            }
            this.countTasksDone = this.countTasksDone - deleteTasks; 
            
            
            localStorage.setItem("arrayTasksToDo", JSON.stringify(this.arrayTasksToDo));
            localStorage.setItem("countTasksDone", JSON.stringify(this.countTasksDone));
            
        }
            
        
    },
    
});

//Problème niveau counter: modification du counter à prévoir (suppression et do/notdo) !!