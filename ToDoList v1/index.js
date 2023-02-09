new Vue({
    el:'#app',
    data (){
        return {
            task: "",
            arrayTasksToDo: [],
            countTasksDone: 0,
        };
    },
    
    methods:{
        addTask(){
            this.arrayTasksToDo.push({
                description:this.task,
                state:false
            });
            
            console.log(this.arrayTasksToDo);
        },

        deleteTask(index){
            this.arrayTasksToDo.splice(index,1);
            console.log(this.arrayTasksToDo);
        },

        taskDone(index){
            if(this.arrayTasksToDo[index].state === false){
                this.arrayTasksToDo[index].state = true;
                this.countTasksDone++;
            }
            else{
                this.arrayTasksToDo[index].state = false;
                this.countTasksDone--;
            }
            console.log(this.arrayTasksToDo);
        },
        deleteAllTasks(arrayTasksToDo){
            this.arrayTasksToDo.splice(arrayTasksToDo.length);
            console.log(this.arrayTasksToDo);
        },
        
    },
    
});
