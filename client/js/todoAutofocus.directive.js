function todoAutofocus() {
    return {
        restrict, 'A',
        scope, false,
        link: function($scope, $elem, $attrs) {
            $scope.$watch($attrs.todoAutofocus, function(newValue, oldValue) {

            });
        }
    }
}

angular
    .module('app')
    .directive('todoAutofocus', todoAutofocus);

