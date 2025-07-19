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

    $('#CPU').on('click', function () { _this.show('CPU');
    });
    $('#MAINBOARD').on('click', function () { _this.show("MAINBOARD");
    });
    $('#GPU').on('click', function () { _this.show("GPU");
    });
    $('#MEMORY').on('click', function () { _this.show("MEMORY");
    });
    $('#STORAGE').on('click', function () { _this.show("STORAGE");
    });
    $('#POWER').on('click', function () { _this.show("POWER");
    });
    $('#COOLER').on('click', function () { _this.show("COOLER");
    });
    $('#COMPUTERCASE').on('click', function () { _this.show("COMPUTERCASE");
    });

    },


    show : function (value) {

        // 전역 변수로 원본 데이터와 필터링 데이터를 저장
        let allPosts = [], filteredPosts = [], nonePosts = [];
        const itemsPerPage = 10;


        // 1) 데이터 받아오기
        $.ajax({
            type: 'GET',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (posts) {
            /*
            allPosts = posts; // 원본 저장
            filteredPosts = posts; // 초기에는 전체 보여줌
            */

            allPosts = posts.filter(item => item.part === value);
            filteredPosts = posts.filter(item => item.part === value);
            initPagination(filteredPosts);

        }).fail(function () {
            alert("에러입니다");
        });

        // 2) 페이징 초기화 함수
        function initPagination(dataArray) {
            const totalPages = Math.ceil(dataArray.length / itemsPerPage);
            $('#pagination').twbsPagination('destroy');
            $('#pagination').twbsPagination({
                totalPages: totalPages,
                visiblePages: 5,
                startPage: 1,
                hideOnlyOnePage: false,
                initiateStartPageClick: true,
                first: '<span aria-hidden="true">«</span>',
                last: '<span aria-hidden="true">»</span>',
                prev: "이전",
                next: "다음",
                onPageClick: function (event, page) {
                    displayPage(dataArray, page);
                }
            });
        }

        // // 3) 특정 페이지 데이터 표시 함수
        function displayPage(dataArray, page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            let html = '';

            dataArray.slice(start, end).forEach(function (item) {
                html += '<li class="item" onclick="updateInput(\'' + value + '\', \'' + item.name + '\')">' +
                    '<p>' + item.name + '</p>' +
                    '</li>';
            });


            $('#tbody-id').html(html);
        }



        // 4) 검색 입력 이벤트 처리
        $('#search-input').on('input', function () {
            const keyword = $(this).val().trim().toLowerCase();

            if (keyword === '') {
                // 검색어 없으면 전체
                filteredPosts = allPosts;
            } else {
                // 일단 필터링
                filteredPosts = allPosts.filter(item =>
                    item.name.toString().toLowerCase().includes(keyword)
                );

            }

            // 결과가 아예 없으면
            if (filteredPosts.length === 0) {
                // 목록 비우기
                $('#tbody-id').empty();
                // 페이징 숨기기
                $('#pagination').hide();
                return;  // 이후 initPagination 호출 안 함
            }

            // 결과가 있으면 페이징 보이기 + 재초기화
            $('#pagination').show();
            initPagination(filteredPosts);
        });

    },


    /*
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

     */
};




main.init();



