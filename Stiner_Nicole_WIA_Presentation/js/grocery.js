 /*
 * Created by Nicole Stiner on 1/15/16.
 */


angular.module('groceryApp', [])
    .controller('GroceryListController', function() { /*controller codes behind the user view */
        var groceryList = this;
        groceryList.groceries = [ /*Create list with two or more initial items.  */
            {text:'Bread', done:true},
            {text:'Milk', done:false}];

        groceryList.addGrocery = function() { /*we must create behavior into the $scope so our submit method can complete it */
            groceryList.groceries.push({text:groceryList.groceryText, done:false}); /*pushing the items in the array to view. ng-repeat unrolls previous arrays and adds the new element into view*/
            groceryList.groceryText = '';
        };

        groceryList.remaining = function() {
            var count = 0;
            angular.forEach(groceryList.groceries, function(grocery) {
                count += grocery.done ? 0 : 1;
            });
            return count;
        };

        groceryList.archive = function() {
            var oldGroceries = groceryList.Groceries;
            groceryList.groceries = [];
            angular.forEach(oldGroceries, function(grocery) {
                if (!grocery.done) groceryList.groceries.push(grocery);
            });
        };

    });