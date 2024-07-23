var main = {
    init : function () {
    var _this = this;
    $('#btn-save').on('click', function () { _this.post();
    });

    $('#btn-update').on('click', function () { _this.update();
    });

    $('#btn-delete').on('click', function () { _this.delete();
    });
    },

    post : function () {
        // var cpu = $('#cpu').val();
        // var mainboard = $('#mainboard').val();
        // var memory = $('#memory').val();
        // var storage = $('#storage').val();
        // var power = $('#power').val();
        //
        // document.getElementById('td_cpu').innerHTML = cpu;
        // document.getElementById('td_mainboard').innerHTML = mainboard;
        // document.getElementById('td_memory').innerHTML = memory;
        // document.getElementById('td_storage').innerHTML = storage;
        // document.getElementById('td_power').innerHTML = power;
        //<td id="td_mainboard"></td>

        var data = {
            cpu: $('#cpu').val(),
            mainboard: $('#mainboard').val(),
            memory: $('#memory').val(),
            storage: $('#storage').val(),
            power: $('#power').val()
        };

        $.ajax({
            type: 'POST',
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



