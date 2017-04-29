app.controller('ctrlMVC', function() {});

app.directive('renderNestedHtml', function() {
    return {
        compile: function(element, attrs) {
            var rawHtml = element[0].innerHTML;
            var code = angular.element('<code data-trim></code>');

            code.text(rawHtml.trim());
            element.replaceWith(code);
        },
    }
})
