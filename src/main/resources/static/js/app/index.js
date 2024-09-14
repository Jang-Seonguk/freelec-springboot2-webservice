function updateInput(part, item) {
    document.getElementById(part).value = item;
}

var main = {
    init : function () {
    var _this = this;

    $('#btn-save').on('click', function () { _this.post();
    });

    $('#btn-update').on('click', function () { _this.update();
    });

    $('#btn-delete').on('click', function () { _this.delete();
    });

    $('#cpu').on('click', function () { _this.show('cpu');
    });
    $('#mainboard').on('click', function () { _this.show("mainboard");
    });
    $('#gpu').on('click', function () { _this.show("gpu");
    });
    $('#memory').on('click', function () { _this.show("memory");
    });
    $('#storage').on('click', function () { _this.show("storage");
    });
    $('#power').on('click', function () { _this.show("power");
    });
    $('#cooler').on('click', function () { _this.show("cooler");
    });
    $('#computercase').on('click', function () { _this.show("computercase");
    });

    $('#search-box').on('input', function () { _this.findList();
    });

    },

    findList : function () {
        var searchTerm = $('#search-box').val().toLowerCase();
        var temp = $("p").filter(function() {
            return $(this).text().toLowerCase().indexOf(searchTerm) !== -1;
        });

        $("p").hide();
        $(temp).show();
    },

    show : function (value) {

        $.ajax({
            type: 'GET',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (posts) {

            let container = $('#tbody');
            let userData = "";

            posts.forEach(function (item) {
                userData += '<div onclick="updateInput(\'' + value + '\', \'' + item[value] + '\')">' +
                    '<p>' + item[value] + '</p>' +
                    '</div><hr>';
            });
            container.html(userData);
        }).fail(function (error) {
            alert("에러입니다");
        });
    },


    post: function () {
        // var cpu = $('#cpu').val();
        // var mainboard = $('#mainboard').val();
        // var memory = $('#memory').val();
        // var storage = $('#storage').val();
        // var power = $('#power').val();
        //



        $.ajax({
            type: 'GET',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    save: function () {
        var data = {
            title : $('#title').val(),
            author : $('#author').val(),
            content : $('#content').val()
            };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    update : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
            };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',data: JSON.stringify(data)
        }).done(function() {
            alert('글이 수정되었습니다. ');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    delete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8'
        }).done(function() {
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
};

main.init();



