document.addEventListener("DOMContentLoaded", function(event) { 
  // var app = new Vue({
  //   el: '#app',
  //   data: {
  //     events: [],
  //     title: '',
  //     start: '',
  //     end: '', 
  //   },
  //   methods: {
  //   	addEvent: function(){
  //   		var params = {
  //   			title: this.title,
  //   			start: this.start, 
  //   			end: this.end,
  //   			user_id: 9
  //   		}

  //   		$.post('http://localhost:3000/api/v1/events.json', params, function(result){
  //   			this.events.push(result);
  //   		}.bind(this));
  //   	}, 
  //   }
  // });

  var todoList = new Vue({
    el: '#todo-list',
    data: {
      newTask: '',
      tasks: [
        {
          text: 'Walk the dog',
          completed: false
        }
      ],
      editingTask: {

      }
    },
    computed: {
      areAllSelected: function () {
        return this.tasks.every(function(task) {
          return task.checked;
        }) &&  this.tasks.length > 0;
      },
    },
    methods: {
      // addTask: function(){
      //   if(this.newTask != ""){
      //     var submitTask = {
      //       text: this.newTask,
      //       completed: false
      //     }
      //     this.tasks.push(submitTask);
      //     this.newTask = "";
      //   }
      // },
       // completeTask: function(task){
      //     task.completed = !task.completed
      // },
      addTask: function () {
        var task = this.newTask.trim();
        if (task) {
          this.tasks.push({text: task, checked: false});
          this.newTask = "";
        }
      },
      removeTask: function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
      },
      editTask: function (task) {
        this.editingTask = task;
      }, 
      endEditing: function (task) {
        this.editingTask = {};
        if (task.text.trim() === ""){
          this.removeTask(task);
        } 
      },
      clearList: function () {
        this.tasks = [

        ];
      },
      selectAll: function (task) {
        var targetValue = this.areAllSelected ? false : true;
        for (var i = 0; i < this.tasks.length; i++) {
          this.tasks[i].checked = targetValue;
        }
      },
      check: function (task) {
        task.checked = true;
      },
      isChecked: function (task) {
        return task.checked;
      }
    }
  });
});
