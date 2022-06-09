$(document).ready(function () {
    $.getJSON("./data/contributors.json", function (data) {
        var dataBuilder = '';

        $.each(data, function (id, contributors) {
            dataBuilder += '<li>';
            dataBuilder += '<h1 class="font-semibold">';
            switch (id) {
                case 'original_author':
                    dataBuilder += 'Original Author';
                    break;
                case 'maintainers':
                    dataBuilder += 'Maintainers';
                    break;
                default:
                    dataBuilder += 'Contributors';
            }

            dataBuilder += '</h1>';
            dataBuilder += '<ul class="pl-12 list-disc">';
            
            $.each(contributors, function (_, contributor) {
                dataBuilder += '<li>' + contributor.username + ' (<' + contributor.id + '>)';
                    
                if (contributor.github !== null)
                    dataBuilder += ' <a class="link" href="https://github.com/' + contributor.github + '" target="_blank">GitHub</a>'
        
                dataBuilder += '</li>';
            })

            dataBuilder += '</ul>';
            dataBuilder += '</li>';
        });

        $('#contributors').append(dataBuilder);
    });
});
