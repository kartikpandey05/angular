// Initailized
var ngTodo = angular.module('ngTodo', []);
// Head of department
ngTodo.controller('mainController', function($scope){
    $scope.todoList = [
                        {
                            title:'homework',
                            details:'time 2pm to 4pm'
                        },
                        {
                            title:'play',
                            details:'time 4pm to 6pm'
                        },
                        {
                            title:'coding',
                            details:'time 6:10pm to 9pm'
                        },
                         {
                            title:'dinner',
                            details:'time 9:10pm to 9:30pm'
                        },
                         {
                            title:'movie',
                            details:'time 9:30pm to 11pm'
                        },
                         {
                            title:'Sleep',
                            details:'time 11pm to 6am'
                        },
        
    ]
    
    
    $scope.addtodoList = function(title) {
		$scope.todoList.push(title);
	}
    $scope.addtodoList = function(details) {
		$scope.todoList.push(details);
	}
    	$scope.deleteTodoList = function(todo) {
		var index = $scope.todoList.indexOf(todo);
		$scope.todoList.splice(index, 1);
        }

});